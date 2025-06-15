
exports.getConfigData = async (req, res) => {
  try {
    // Replace this with real DB/service logic
    res.json({ message: 'Config endpoint works' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
