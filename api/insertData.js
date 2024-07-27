const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

const app = express();
app.use(express.json());

app.post('/api/insertData', async (req, res) => {
    const { name, url } = req.body;

    try {
        const client = await pool.connect();

        const insertCategoryQuery = 'INSERT INTO Categories (heading, paragraph) VALUES ($1, $2) RETURNING id';
        const result = await client.query(insertCategoryQuery, [name, 'Tried, tested, and reviewed by the community']);
        const categoryId = result.rows[0].id;

        const insertSubcategoryQuery = 'INSERT INTO Subcategories (category_id, url) VALUES ($1, $2) RETURNING id';
        await client.query(insertSubcategoryQuery, [categoryId, url]);

        client.release();

        res.status(200).send({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send({ message: 'Error inserting data' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
