const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Respond with index.html for GET requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
