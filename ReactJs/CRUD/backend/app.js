// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express application
const app = express();

// Define the port number for running the server
const PORT = 8080;

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9")
    .then(() => {
        console.log("MongoDB Connected");

        // List databases after successful connection
        mongoose.connection.db.admin().listDatabases()
            .then((databases) => {
                console.log("Databases:");
                databases.databases.forEach(db => {
                    console.log(db.name); // Print each database name
                });
            })
            .catch((err) => {
                console.log("Error listing databases:", err);
            });
    })
    .catch((err) => console.log("MongoDB Connection Error:", err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


    // const { MongoClient } = require('mongodb');

    // async function main() {
    //     /**
    //      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    //      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    //      */
    //     const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9";
    
    //     /**
    //      * The Mongo Client you will use to interact with your database
    //      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
    //      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
    //      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
    //      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
    //      */
    //     const client = new MongoClient(uri);
    
    //     try {
    //         // Connect to the MongoDB cluster
    //         await client.connect();
    
    //         // Make the appropriate DB calls
    //         await listDatabases(client);
    
    //     } catch (e) {
    //         console.error(e);
    //     } finally {
    //         // Close the connection to the MongoDB cluster
    //         await client.close();
    //     }
    // }
    
    // main().catch(console.error);
    
    // /**
    //  * Print the names of all available databases
    //  * @param {MongoClient} client A MongoClient that is connected to a cluster
    //  */
    // async function listDatabases(client) {
    //     databasesList = await client.db().admin().listDatabases();
    
    //     console.log("Databases:");
    //     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    // };