const express = require('express');
const router = express.Router();

router.get('/dashboard-data', async (req, res) => {
  try {
    // Fetch data from database or other sources
    const data = {
      message: "Welcome to Zafo.ai Analytics Tool Dashboard.",
      stats: {
        users: 100,
        churnRate: 5,
        featureRequests: 10
      }
    }; // Your data fetching logic here
    res.json(data);
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
