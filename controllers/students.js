const prisma = require("../libs/prisma");

const createStudent = async (req, res, next) => {
    try {
        const { nim, name, email, phone_number } = req.body;

        const student = await prisma.students.create({
            data:{
                nim: nim,
                name: name,
                email: email,
                phone_number: phone_number,
            },
        });

        return res.status(201).json({
            status: "success",
            message:"Data student berhasil dibuat",
            data: student,
        });
    } catch (error) {
        next(error);
    }
};

const getAllStudents = async (req, res, next) => {
    try {
        const students = await prisma.students.findMany();

        return res.status(200).json({
            status: "success",
            message: "Data Semua Students",
            data: students,
        });
    } catch (error) {
        next(error);
    }
};

module.exports ={
    createStudent,
    getAllStudents,
};