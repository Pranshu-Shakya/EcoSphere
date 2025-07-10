import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); 
}

// Login a user
const loginUser = async (req, res) => {

    try {
        
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please fill all the fields' });
        }   

        // Check if user exists 
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User does not exist' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Create a token
        const token = createToken(user._id);
        res.status(200).json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

};

// Register a new user
const registerUser = async (req, res) => {
    
    try {
        
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await User.findOne({email});
        if (exists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        //validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a vlid email' });
        }
        // if(!validator.isStrongPassword(password)) {
        //     return res.status(400).json({ success: false, message: 'Please enter a strong password' });
        // }
        if(password.length < 5) {
            return res.status(400).json({ success: false, message: 'Password must be at least 5 characters long' });
        }

        if(!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please fill all the fields' });
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);
        res.status(201).json({ success: true, token });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

};

// admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please fill all the fields' });
        }
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.status(200).json({ success: true, token });
        } else {
            res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { loginUser, registerUser, adminLogin };
