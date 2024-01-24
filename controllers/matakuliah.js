const prisma = require("../libs/prisma");

const createMatKul = async (req, res, next) => {
    try {
        const { kode_matkul, nama_matkul, dosen_pengampu } = req.body;

        const MataKuliah = await prisma.mataKuliah.create({
            data:{
                kode_matkul: kode_matkul,
                nama_matkul: nama_matkul,
                dosen_pengampu: dosen_pengampu,
            },
        });

        return res.status(201).json({
            status: "success",
            message:"Data matkul berhasil dibuat",
            data: MataKuliah,
        });
    } catch (error) {
        next(error);
    }
};

const getAllMatkul = async (req, res, next) => {
    try {
        const MataKuliah = await prisma.mataKuliah.findMany();

        return res.status(200).json({
            status: "success",
            message: "Data Semua Matkul",
            data: MataKuliah,
        });
    } catch (error) {
        next(error);
    }
};

module.exports ={
    createMatKul,
    getAllMatkul,
};