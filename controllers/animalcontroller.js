const Express = require("express");
const router = Express.Router();
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

router.get("/", async (req, res) => {
    try {
        const animals = await Animal.findAll();
        res.status(200).json(animals);
    } catch (err) {
        res.status(500).json({error: err});
    }
})

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const query = {
            where: {
                id: id
            }
        }
        await Animal.destroy(query);
        res.status(200).json({message: "Animal DESTROYED"});
    } catch (err) {
        res.status(500).json({error: err});
    }
})

router.put("/update/:id", async (req, res) => {
    const {name, legNumber, predator} = req.body.animal;
    const animalId = req.params.id;

    const query = {
        where: {
            id: id
        }
    }

    const updatedAnimal = {
        name: name,
        legNumber: legNumber,
        predator: predator
    }

    try {
        const update = await Animal.update(updatedAnimal, query);
        res.status(200).json(update, {message: "Animal Geneticly Altered"});
    } catch (err) {
        res.status(500).json({error: err});
    }
})

module.exports = router;