const express = require("express");
const router = express.Router();
const { Animal } = require("../models");

router.post("/create", async (req, res) => {
    let {name, legNumber, predator} = req.body.animal;

    try {
        const NewAnimal = await Animal.create({
            name,
            legNumber,
            predator
        })

        res.status(201).json({
            message: "Animal successfully created",
            name: NewAnimal
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to create animal"
        })
    }
})

module.exports = router;