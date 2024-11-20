import RegisterModel  from '../models/register.js';
import bcrypt from 'bcryptjs';


export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    const existingRegister = await RegisterModel.findOne({ email });
    if (existingRegister) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const register = new RegisterModel({ name, email, password });
    await register.save();
    
    res.status(201).json({ message: "registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await RegisterModel.findOne({ email });
    if (!login) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, login.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ status: "Success", login });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const students = await RegisterModel.find();  
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

