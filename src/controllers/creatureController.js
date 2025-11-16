const Creature = require("../models/Creature");

module.exports = {
    async getAll(req, res) {
        const creatures = await Creature.find();
        res.json(creatures);
    },

    async getOne(req, res) {
        const creature = await Creature.findById(req.params.id);
        res.json(creature);
    },

    async create(req, res) {
        const creature = await Creature.create(req.body);
        res.json(creature);
    },

    async update(req, res) {
        const creature = await Creature.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(creature);
    },

    async remove(req, res) {
        await Creature.findByIdAndDelete(req.params.id);
        res.json({ message: "Criatura removida" });
    }
};
