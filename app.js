const express = require("express");
require("../src/db/conn");  // Your MongoDB connection file

const MensRanking = require("../src/models/mens");  // Use a consistent name

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Handle POST request
app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        await addingMensRecords.save();  // Use await to handle asynchronous save
        res.status(201).send(addingMensRecords);  // Send a success response
    } catch (e) {
        res.status(400).send(e);  // Send a proper error response
    }
});

// READ: Handle GET request (Get all records)
app.get("/mens", async (req, res) => {
    try {
        const mensData = await MensRanking.find().sort({ ranking: 1 }); 
        res.status(200).send(mensData);
    } catch (e) {
        res.status(500).send(e);
    }
});

// READ BY ID: Handle GET request to fetch a record by ID
app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        // Validate the ID format
        if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({ error: "Invalid ID format" });
        }

        const mensData = await MensRanking.findById(_id);
        if (!mensData) {
            return res.status(404).send({ error: "Record not found" });
        }

        res.status(200).send(mensData);
    } catch (e) {
        res.status(500).send(e);
    }
});

// UPDATE BY ID: Handle PATCH request to update a record by ID
app.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedMensData = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true });

        if (!updatedMensData) {
            return res.status(404).send({ error: "Record not found" });
        }

        res.status(200).send(updatedMensData);
    } catch (e) {
        res.status(500).send(e);
    }
});

// DELETE BY ID: Handle DELETE request to remove a record by ID
app.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedMensData = await MensRanking.findByIdAndDelete(_id);

        if (!deletedMensData) {
            return res.status(404).send({ error: "Record not found" });
        }

        res.status(200).send(deletedMensData);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
});
