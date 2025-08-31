
// GoCity – Mutual Transfer App Code (Extended Version)

// --- Backend: Node.js + Express + MongoDB + Firebase Auth + FCM ---

const express = require("express"); const mongoose = require("mongoose"); const bodyParser = require("body-parser"); const cors = require("cors"); const admin = require("firebase-admin");

const app = express(); app.use(cors()); app.use(bodyParser.json());

// Initialize Firebase Admin SDK (for Auth + Notifications) const serviceAccount = require("./firebase-service-account.json"); // add your service account JSON file admin.initializeApp({ credential: admin.credential.cert(serviceAccount), });

// MongoDB connection mongoose.connect("mongodb://localhost:27017/gocity", { useNewUrlParser: true, useUnifiedTopology: true, });

const UserSchema = new mongoose.Schema({ uid: String, email: String, phone: String, department: String, designation: String, current_city: String, current_state: String, desired_city: String, desired_state: String, additional_info: String, fcm_token: String, matched_with: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, status: { type: String, default: "Pending" }, accepted: { type: Boolean, default: false }, });

const User = mongoose.model("User", UserSchema);

// Verify Firebase Auth token async function verifyToken(req, res, next) { const token = req.headers.authorization; try { const decoded = await admin.auth().verifyIdToken(token); req.uid = decoded.uid; next(); } catch (err) { res.status(401).send({ error: "Unauthorized" }); } }

// Register or update profile app.post("/api/register", verifyToken, async (req, res) => { const { email, phone, department, designation, current_city, current_state, desired_city, desired_state, additional_info, fcm_token } = req.body; let user = await User.findOne({ uid: req.uid });

if (!user) { user = new User({ uid: req.uid, email, phone, department, designation, current_city, current_state, desired_city, desired_state, additional_info, fcm_token }); } else { Object.assign(user, { email, phone, department, designation, current_city, current_state, desired_city, desired_state, additional_info, fcm_token }); }

await user.save(); res.send({ success: true, user }); });

// Matching logic app.get("/api/match", verifyToken, async (req, res) => { const user = await User.findOne({ uid: req.uid }); if (!user) return res.status(404).send({ error: "User not found" });

const matches = await User.find({ department: user.department, current_city: user.desired_city, desired_city: user.current_city, uid: { $ne: user.uid }, accepted: false, });

// Notify matches if any for (const match of matches) { if (match.fcm_token) { await admin.messaging().send({ token: match.fcm_token, notification: { title: "Match Found!", body: You have a potential mutual transfer match., }, }); } }

res.send({ matches }); });

// Accept match app.post("/api/accept/:matchId", verifyToken, async (req, res) => { const user = await User.findOne({ uid: req.uid }); const match = await User.findById(req.params.matchId); if (!user || !match) return res.status(404).send({ error: "User not found" });

user.matched_with = match._id; user.status = "Contacted"; user.accepted = true;

match.matched_with = user._id; match.status = "Contacted"; match.accepted = true;

await user.save(); await match.save();

res.send({ success: true }); });

// Get user dashboard app.get("/api/user", verifyToken, async (req, res) => { const user = await User.findOne({ uid: req.uid }).populate("matched_with"); res.send({ user }); });

app.listen(5000, () => console.log("GoCity server running on port 5000"));
