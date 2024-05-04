import { readFile, writeFile } from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../data/deportes.json");

const findAllDepo = async () => {
    const preview = await readFile(pathFile, "utf-8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    return data;
};

const create = async (nombre, precio) => {
    const preview = await readFile(pathFile, "utf-8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const newDepo = {
        nombre,
        precio,
        id: nanoid(7),
    };

    data.push(newDepo);

    await writeFile(pathFile, JSON.stringify(data));

    return newDepo;
};

const removeDepo = async (id) => {
    const preview = await readFile(pathFile, "utf-8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const depo = data.find((item) => item.id === id);

    if (!depo) return "Deporte no encontrado";

    const restDepo = data.filter((item) => item.id !== id);

    await writeFile(pathFile, JSON.stringify(restDepo));
    return depo;
};

const putDepo = async (id, nombre, precio) => {
    const preview = await readFile(pathFile, "utf-8");
    const data = preview.trim() ? JSON.parse(preview) : [];

    const depo = data.find((item) => item.id === id);

    if (!depo) return "Deporte no encontrado";

    depo.nombre = nombre;
    depo.precio = precio;

    await writeFile(pathFile, JSON.stringify(data));

    return depo;
};

export const modelDepo = {
    findAllDepo,
    create,
    removeDepo,
    putDepo,
};
