const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this environment variable is set
  ssl: {
    rejectUnauthorized: false // Adjust based on your security needs
  }
});

// Middleware to parse JSON
app.use(express.json());

// Logging middleware to inspect request body
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

// Endpoint to insert product data from the request body
app.post('/api/products', async (req, res) => {
  console.log('POST /api/products called');
  try {
    const { productCards } = req.body; // Extract productCards from the request body
    console.log('Received data:', productCards);

    if (!Array.isArray(productCards)) {
      console.error('Invalid data format');
      return res.status(400).json({ error: 'Invalid data format' });
    }

    const query = `
      INSERT INTO products (rank, "imageUrl", title, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const client = await pool.connect();
    const results = [];

    for (const product of productCards) {
      const values = [product.rank, product.imageUrl, product.title, product.description];
      const result = await client.query(query, values);
      results.push(result.rows[0]);
    }

    client.release();
    res.status(201).json({ success: true, data: results });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
