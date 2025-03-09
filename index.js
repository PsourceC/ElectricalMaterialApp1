const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Example material data
const materials = [
  { category: 'THHN 10 STR Green (Copper)', size: ['1 ft', '500 ft', '1000 ft'] },
  { category: 'Connector (Flex)', size: ['1 1/4 inch', '1 1/2 inch'] },
  // Add more materials as needed
];

app.get('/api/materials', (req, res) => {
  res.json(materials);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


