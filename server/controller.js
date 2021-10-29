const postData = require("./model");

const createData = async (req, res) => {
  try {
    let formData = new postData({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      location: req.body.location,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });

    formData = await formData.save();

    return res.status(201).json({
      status: 201,
      data: { formData },
    });
  } catch (error) {
    console.log(error, "error encountered");
  }
};

const getData = async (req, res) => {
  try {
    const infoData = await postData.find({});

    return res.status(200).json({
      status: 200,
      data: { infoData },
    });
  } catch (error) {
    console.log(error, "error encountered");
  }
};

module.exports = { createData, getData };
