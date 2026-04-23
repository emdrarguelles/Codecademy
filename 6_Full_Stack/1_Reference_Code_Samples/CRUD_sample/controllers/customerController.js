// POST /api/customers
app.post('/api/customers', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );

    res.status(201).json({
      message: 'Customer created successfully',
      customer: result.rows[0]
    });

  } catch (err) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
});