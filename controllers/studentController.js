const Student = require('../models/studentModel');

exports.getData = async (req, res) => {
    // get data from database
    const students = await Student.find();
    res.status(200).json ({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};

exports.getDataById = async (req, res) => {
    // get data from database by id
    const {id} = req.params;
    const student = await Student.find({_id: id});
    res.status(200).json ({
        status: 'success',
        data: {
            student
        }
    });
};

exports.postData = async (req, res) => {
    // insert data into database
    const newStudent = req.body;
    const student = await Student.create(newStudent);
    res.status(201).json({
        status: 'success',
        data: student
    });
};

exports.patchDataById = (req, res) => res.send('Hello Student! from PATCH');
exports.updateDataById = (req, res) => res.send('Hello Student! from PUT');
exports.deleteDataById = (req, res) => res.send('Hello Student! from DELETE');