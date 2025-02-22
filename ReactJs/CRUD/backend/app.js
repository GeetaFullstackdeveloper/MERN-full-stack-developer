// Import required packages
const express = require("express"); // Express framework for Node.js
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const cors = require("cors"); // CORS to allow cross-origin requests

// Initialize Express application
const app = express();

// Define the port number for running the server
const PORT = 9090;

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Enable parsing of JSON request bodies

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/crud-db")
    .then(() => console.log("MongoDB Connected")) // Success message if connection is successful
    .catch((err) => console.log("MongoDB Connection Error:", err)); // Error message if connection fails

// Start the Express server
app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});




// Define the GET /crud-db route
app.get('/you-db', (req, res) => {
    res.json({ message: 'This is the /crud-db route' });
});
// Define MongoDB schema and model for Users
const UsersSchema = new mongoose.Schema({
    name: String,  // User's name as a string
    email: String// User's email as a string
        // User's age as a number
});

// Create a User model based on the schema
const User = mongoose.model("User", UsersSchema);

// Create User API (POST request) - Adds a new user to the database
app.post("/api/create-user", async (req, res) => {
    try {
        // Extract user details from the request body
        const { name, email } = req.body;

        // Check if the user already exists based on email
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new User instance with provided data
        const newUser = new User({
            name,
            email
        });

        // Save the user to the database
        await newUser.save();

        // Send success response with the created user data
        res.status(201).json({ message: "User added successfully", data: newUser });
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ message: "Internal Server Error", error });
    }
});


// Define GET route to fetch all users and check if the database is empty
app.get('/api/get-users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // Check if the database is empty
        if (users.length === 0) {
            return res.status(200).json({ message: "No users found. Database is empty." });
        }

        // Return the list of users if the database is not empty
        res.status(200).json({ message: "Users fetched successfully", data: users });
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ message: "Internal Server Error", error });
    }
});


app.put('/api/update-user/:id', async (req, res) => {
    try {
        // Extract the user ID from the URL parameter
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(400).json({message:"User not found"})
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json({ message: "User updated successfully", data: updateUser});
     
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ message: "Internal Server Error", error });
    }
});


app.delete('/api/update-user/:id', async (req, res) => {
    try {
        // Extract the user ID from the URL parameter
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(400).json({message:"User not found"})
        }
        await User.findOneAndDelete(id);
        res.status(201).json({ message: "User deleted successfully"});
     
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ message: "Internal Server Error", error });
    }
});


// Define Book schema
// const bookSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   year: Number
// });

// // Create Book model
// const Book = mongoose.model('Book', bookSchema);

// // Start server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });

// module.exports = Book;  // Export Book model
