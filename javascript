
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    return res.status(200).json({
        message: 'Registration successful!',
        user: { name, email }, // Optionally return user info
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
