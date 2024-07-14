
const Character = require('../models/Character');

exports.createCharacter = async (req, res) => {
    try {
        const character = new Character(req.body);
        await character.save();
        res.status(201).send(character);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getCharacters = async (req, res) => {
    try {
        const characters = await Character.find({});
        res.status(200).send(characters);
    } catch (error) {
        res.status(500).send(error);
    }
};
    