const db = require("../models/student");

module.exports.createdStudent = async (req, res) => {
  try {
    const student = await db.create(req.body);
    res.status(200).json({
      msg: "student created successfully!",
      error: false,
      id: student._id,
    });
  } catch (error) {
    res.status(500).json({
      msg: "something went wrong",
      student: null,
      err: error.message,
    });
  }
};
module.exports.getAllStudent = async (req, res) => {
  try {
    const student = await db.find();
    res.status(200).json({
      error: false,
      student,
    });
  } catch (error) {
    res.status(500).json({
      msg: "something went wrong",
      student: null,
      err: error.message,
    });
  }
};
module.exports.getOneStudent = async (req, res) => {
    try {
        const student = await db.findById(req.params.id);
        res.status(200).json({
          error: false,
          student,
        });
      } catch (error) {
        res.status(500).json({
          msg: "something went wrong",
          student: null,
          err: error.message,
        });
      }
};
module.exports.updateOneStudent = async (req, res) => {
    try {
        const student = await db.findByIdAndUpdate(req.params.id,req.body, { new: true, useFindAndModify: false });
        res.status(200).json({
          error: false,
          msg: "student updated successfully!",
          id: student._id,
        });
      } catch (error) {
        res.status(500).json({
          msg: "something went wrong",
          student: null,
          err: error.message,
        });
      }
};
module.exports.removeStudent = async (req, res) => {
  try {
    const student = await db.findByIdAndRemove(req.params.id);
    res.status(200).json({
      msg: "student removed successfully",
      error: false,
      id: student._id,
    });
  } catch (error) {
    res.status(500).json({
      msg: "student couldn't removed",
      student: null,
      err: error.message,
    });
  }
};
