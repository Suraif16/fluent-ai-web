const express = require('express'); //Creating seever
const bodyParser = require('body-parser'); // parsing HTTP bodies
const cors = require('cors'); //cross origin resource sharing
const mysql = require('mysql2'); // connecting to myql database

const app = express(); // creating new instance of express app

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'fluentai',
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

app.post('/register', (req, res) => {
    const { name, email, contact_no, slmc_no, password } = req.body;
    db.query(`INSERT INTO users (name, email, contact_no, slmc_no, password) VALUES ('${name}', '${email}', '${contact_no}' , '${slmc_no}'  , '${password}')`, (err, result) => {
        if (err) {
            console.log('Error registering user:', err);
            res.status(500).send({ error: 'Error registering user' });
        } else {
            console.log('User registered successfully');
            res.status(200).send({ message: 'User registered successfully' });
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`, (err, result) => {
        if (err) {
            console.log('Error logging in user:', err);
            res.status(500).send({ error: 'Error logging in user' });
        } else {
            if (result.length > 0) {
                console.log('User logged in successfully');
                res.status(200).send({ message: 'User logged in successfully' });
            } else {
                console.log('Invalid email or password');
                res.status(401).send({ error: 'Invalid email or password' });
            }
        }
    });
});

app.post('/viewPatients', (req, res) => {
    const { patient_id, name, age, contact_no, doctor_id} = req.body;
    db.query('SELECT * FROM patients WHERE doctor_id = '${doctor_id}, (err, result) => {
        if (err) {
            console.log('Error viewing patients:', err);
            res.status(500).send({ error: 'Error viewing patients' });
        } else {
            console.log('Patients viewed successfully');
            res.status(200).send({ message: 'Patients viewed successfully' });
        }
    });
});


