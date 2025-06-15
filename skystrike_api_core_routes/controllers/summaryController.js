
exports.getSummaryData = async (req, res) => {
  try {
    // Replace this with real DB/service logic
    res.json({ message: 'Summary endpoint works' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
