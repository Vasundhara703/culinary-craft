const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const dataFilePath = path.join(__dirname, 'data', 'recipes.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(path.dirname(dataFilePath))) {
  fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
}
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify({ recipes: [], lastUpdated: 0 }, null, 2));
}

// GET /api/recipes - Fetch all recipes
app.get('/api/recipes', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath, 'utf-8');
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    console.error('Error reading recipes data:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// POST /api/recipes - Save/Update recipes
app.post('/api/recipes', (req, res) => {
  try {
    const { recipes, lastUpdated } = req.body;
    
    if (!recipes) {
      return res.status(400).json({ error: 'Recipes data is required' });
    }

    const dataToSave = {
      recipes: recipes,
      lastUpdated: lastUpdated || Date.now()
    };

    fs.writeFileSync(dataFilePath, JSON.stringify(dataToSave, null, 2));
    res.json({ message: 'Recipes saved successfully', lastUpdated: dataToSave.lastUpdated });
  } catch (error) {
    console.error('Error saving recipes data:', error);
    res.status(500).json({ error: 'Failed to save recipes' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
