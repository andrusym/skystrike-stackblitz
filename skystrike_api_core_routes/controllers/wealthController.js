
exports.getWealthData = async (req, res) => {
  try {
    // Replace this with real DB/service logic
    res.json({ message: 'Wealth endpoint works' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
