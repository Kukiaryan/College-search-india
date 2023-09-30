const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Serve the JSON data
app.get('/api/colleges', (req, res) => {
    const colleges = require('./colleges.json');
    res.json(colleges);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
