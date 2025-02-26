// Import required packages
const express = require("express"); // Express framework for Node.js
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const cors = require("cors"); // CORS to allow cross-origin requests
const UserModel = require('./models/User.jsx'); // Make sure the path to the model is correct

// Initialize Express application
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
const MONGO_URL = "mongodb://127.0.0.1:27017/you-tube"; // Ensure correct format

console.log("MONGO_URL:", MONGO_URL);
console.log("PORT:", PORT);

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// POST route to create a new user
app.post("/api/create-user", async (req, res) => {
    UserModel.create(req.body)
        .then(users => res.status(201).json({ message: "User added successfully", data: users }))
        .catch(error => res.status(500).json({ message: "Internal Server Error", error }));
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
