const { processInputData } = require('../utils/processData');
const { USER_ID, EMAIL, ROLL_NUMBER } = require('../config/constants');

const handleBfhlPost = (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid data format' });
    }

    const processed = processInputData(data);

    return res.status(200).json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      ...processed
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ is_success: false, message: 'Server error' });
  }
};

module.exports = { handleBfhlPost };
