import { modelDepo } from "../models/deporte.model.js";

const getDepo = async (req, res) => {
    try {
        const deportes = await modelDepo.findAllDepo();

        return res.json({ deportes });
    } catch (error) {
        console.error("Error===> ", error);
        return res.json({ msg: "Algo salio mal" });
    }
};

const postDepo = async (req, res) => {
    try {
        const { nombre, precio } = req.body;
        const deporte = await modelDepo.create(nombre, precio);
        return res.json(deporte);
    } catch (error) {
        console.error("Error===> ", error);
        return res.json({ msg: "Algo salio mal" });
    }
};

const deleteDepo = async (req, res) => {
    try {
        const { id } = req.params;

        const depo = await modelDepo.removeDepo(id);

        return res.json({ depo });
    } catch (error) {
        console.error("Error===> ", error);
        return res.json({ msg: "Algo salio mal" });
    }
};

const updateDepo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio } = req.body;

        const depo = await modelDepo.putDepo(id, nombre, precio);

        return res.json({ depo });
    } catch (error) {
        console.error("Error===> ", error);
        return res.json({ msg: "Algo salio mal" });
    }
};

export const depoMethod = {
    getDepo,
    postDepo,
    deleteDepo,
    updateDepo,
};
