const { generateToken, verifyToken } = require('../utils/auth');
const { validationResult } = require('express-validator');
const { Student, Hostel, User } = require('../models');
const bcrypt = require('bcryptjs');
const Parser = require('json2csv').Parser;
const registerStudent = async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const {
        name, urn, room_no, batch, dept, course,
        email, father_name, contact, address,
        dob, uidai, hostel, password
    } = req.body;

    try {
        // Check if student with same URN exists
        let existingStudent = await Student.findOne({ urn });
        if (existingStudent) {
            return res.status(400).json({ success, errors: [{ msg: 'Student with this URN already exists' }] });
        }

        // Check if user with same email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success, errors: [{ msg: 'Email already registered' }] });
        }

        // Find hostel
        const shostel = await Hostel.findOne({ name: hostel });
        if (!shostel) {
            return res.status(400).json({ success, errors: [{ msg: 'Hostel not found' }] });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            email,
            password: hashedPassword,
            isAdmin: false
        });

        await user.save();

        // Create student linked to user and hostel
        const student = new Student({
            name,
            urn,
            room_no,
            batch,
            dept,
            course,
            email,
            father_name,
            contact,
            address,
            dob,
            uidai,
            user: user._id,
            hostel: shostel._id
        });

        await student.save();

        success = true;
        res.status(201).json({ success, student });

    } catch (err) {
        console.error("Error in registerStudent:", err);
        if (err.code === 11000) {
            return res.status(400).json({ success, errors: [{ msg: 'Duplicate entry. Email or URN already exists.' }] });
        }
        res.status(500).json({ success, errors: [{ msg: 'Server error' }] });
    }
};


const getStudent = async (req, res) => {
    try {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }

        const { isAdmin } = req.body;

        if (isAdmin) {
            return res.status(400).json({success, errors:  'Admin cannot access this route' });
        }

        const { token } = req.body;
        
        const decoded = verifyToken(token);

        const student = await Student.findOne({user: decoded.userId}).select('-password');
        
        if (!student) {
            return res.status(400).json({success, errors: 'Student does not exist' });
        }

        success = true;
        res.json({success, student });
    } catch (err) {
        res.status(500).json({success, errors: 'Server error'});
    }
}

const getAllStudents = async (req, res) => {

    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }

    let { hostel } = req.body;

    try {

        const shostel = await Hostel.findById(hostel);

        const students = await Student.find({ hostel: shostel.id }).select('-password');

        success = true;
        res.json({success, students});
    }
    catch (err) {
        res.status(500).json({success, errors: [{msg: 'Server error'}]});
    }
}

const updateStudent = async (req, res) => {

    let success = false;
    try {
        const student = await Student.findById(req.student.id).select('-password');

        const { name, urn, room_no, batch, dept, course, email, father_name, contact, address, dob, uidai, user, hostel } = req.body;

        student.name = name;
        student.urn = urn;
        student.room_no = room_no;
        student.batch = batch;
        student.dept = dept;
        student.course = course;
        student.email = email;
        student.father_name = father_name;
        student.contact = contact;
        student.address = address;
        student.dob = dob;
        student.uidai = uidai;
        student.hostel = hostel;

        await student.save();

        success = true;
        res.json({success, student});
    } catch (err) {
        res.status(500).json({success, errors: [{msg: 'Server error'}]});
    }
}

const deleteStudent = async (req, res) => {
    try {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }

        const { id } = req.body;

        const student = await Student.findById(id).select('-password');

        if (!student) {
            return res.status(400).json({success, errors: [{ msg: 'Student does not exist' }] });
        }

        const user = await User.findByIdAndDelete(student.user);

        await Student.deleteOne(student);

        success = true;
        res.json({success, msg: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({success, errors: [{msg: 'Server error'}]});
    }
}

const csvStudent = async (req, res) => {
    let success = false;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }

        const { hostel } = req.body;

        const shostel = await Hostel.findById(hostel);

        const students = await Student.find({ hostel: shostel.id }).select('-password');

        students.forEach(student => {
            student.hostel_name = shostel.name;
            student.d_o_b = new Date(student.dob).toDateString().slice(4);
            student.contact_no = "+91 "+student.contact.slice(1);
        });

        const fields = ['name', 'urn', 'room_no', 'batch', 'dept', 'course', 'email', 'father_name', 'contact_no', 'address', 'd_o_b', 'uidai_no', 'hostel_name'];

        const opts = { fields };

        const parser = new Parser(opts);

        const csv = parser.parse(students);

        success = true;
        res.json({success, csv});
    } catch (err) {
        res.status(500).json({success, errors: [{msg: 'Server error'}]});
    }
}

module.exports = {
    registerStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getAllStudents,
    csvStudent
}