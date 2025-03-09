const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// Detailed materials list
const materials = [
  { category: 'THHN 10 STR Green (Copper)', size: ['1 ft', '500 ft', '1000 ft'] },
  { category: 'THHN 10 STR Red (Copper)', size: ['1 ft', '500 ft', '1000 ft'] },
  { category: 'THHN 10 STR Black (Copper)', size: ['1 ft', '500 ft', '1000 ft'] },
  { category: 'THHN 8 STR Black', size: [''] },
  { category: 'THHN 6 STR Black', size: ['1 ft'] }
  // Add other materials as required
];

// API endpoint to fetch materials
app.get('/api/materials', (req, res) => {
  res.json(materials);
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

