const { validationResult } = require("express-validator");
const { Invoice, MessOff, Student } = require("../models");
// const { Mess_bill_per_day } = require('../constants/mess');

// // @route   Generate api/invoice/generate
// // @desc    Generate invoice
// // @access  Public
// exports.generateInvoices = async (req, res) => {
//     let success = false;
//     const { hostel } = req.body;
//     const students = await Student.find({ hostel });
//     console.log(students);

//     // const invoices = await Invoice.find({ student: { $in: students }, date: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) } })
//     // if (invoices.length === students.length) {
//     //     return res.status(400).json({ errors: 'Invoices already generated', success });
//     // }

//     // // get days in previous month
//     // let daysinlastmonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();

//     // let amount = Mess_bill_per_day * daysinlastmonth;
//     // count = 0;
//     // students.map(async (student) => {
//     //     let messoff = await MessOff.find({ student: student });
//     //     if (messoff) {
//     //         messoff.map((messoffone) => {
//     //             if (messoffone.status === 'approved' && messoffone.return_date.getMonth() + 1 === new Date().getMonth()) {
//     //                 let leaving_date = messoffone.leaving_date;
//     //                 let return_date = messoffone.return_date;
//     //                 let number_of_days = (return_date - leaving_date) / (1000 * 60 * 60 * 24);
//     //                 amount -= Mess_bill_per_day * number_of_days;
//     //             }
//     //         });
//     //     }

//     //     try {
//     //         let invoice = new Invoice({
//     //             student,
//     //             amount
//     //         });
//     //         await invoice.save();
//     //         count++;
//     //     }
//     //     catch (err) {
//     //         console.error(err.message);
//     //         res.status(500).json({success, errors: [{msg: 'Server error'}]});
//     //     }
//     // });
//     // success = true;
//     // res.status(200).json({ success, count });

// }

// exports.updateStudent = async (req, res) =>
// {
//     let success = false;
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         return res.status(400).json({ success, errors: errors.array() });
//     }

//     const invoices = await Invoice.find({
//         student: { $in: students },
//         date: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
//     });
//     if (invoices.length === students.length) {
//             return res.status(400).json({ errors: 'Invoices already generated', success });
//         }

//         const {
//             name, urn, room_no, batch, dept, course,
//             email, father_name, contact, address,
//             dob, uidai, hostel, password
//         } = req.body;

//         let count = 0;
//         try {
//             await Promise.all(students.map(async (student) => {
//                 let amount = Mess_bill_per_day * daysinlastmonth;
//                 let messoff = await MessOff.find({ student: student });
//                 if (messoff) {
//                     messoff.forEach((messoffone) => {
//                         if (messoffone.status === 'approved' && messoffone.return_date.getMonth() + 1 === new Date().getMonth()) {
//                             let leaving_date = messoffone.leaving_date;
//                             let return_date = messoffone.return_date;
//                             let number_of_days = (return_date - leaving_date) / (1000 * 60 * 60 * 24);
//                             amount -= Mess_bill_per_day * number_of_days;
//                         }
//                     });
//                 }
//                 let invoice = new Invoice({
//                     student,
//                     amount
//                 });
//                 await invoice.save();
//                 count++;
//             }));
//             success = true;
//             res.status(200).json({ success, count });
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).json({success, errors: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});
//         }
//     };
//     // @route   GET api/invoice/getbyid
//     // @desc    Get all invoices
//     // @access  Public
//     exports.getInvoicesbyid = async (req, res) => {
//         let success = false;
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array(), success });
//         }
//         const { hostel } = req.body;
//         let student = await Student.find({ hostel: hostel });
//         try {
//             let invoices = await Invoice.find({ student: student }).populate('student', ['name', 'room_no', 'urn']);
//             success = true;
//             res.status(200).json({ success, invoices });
//         }
//         catch (err) {
//             console.error(err.message);
//             res.status(500).json({success, errors: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});
//         }
//     }

//     // @route   GET api/invoice/student
//     // @desc    Get all invoices
//     // @access  Public
//     exports.getInvoices = async (req, res) => {
//         let success = false;
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array(), success });
//         }
//         const { student } = req.body;
//         try {
//             let invoices = await Invoice.find({ student: student });
//             success = true;
//             res.status(200).json({ success, invoices });
//         }
//         catch (err) {
//             console.error(err.message);
//             res.status(500).json({success, errors: [{msg: 'Server error'}]});: [{msg: 'Server error'}]});
//         }
//     }

//     // @route   GET api/invoice/update
//     // @desc    Update invoice
//     // @access  Public
// exports.updateInvoice = async (req, res) => {
//         let success = false;
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array(), success });
//         }
//         const { student, status } = req.body;
//         try {
//             let invoice = await Invoice.findOneAndUpdate({ student: student, date: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) } }, { status: status });
//             success = true;
//             res.status(200).json({ success, invoice });
//         }
//         catch (err) {
//             console.error(err.message);
//             res.status(500).json({success, errors: [{msg: 'Server error'}]});
//         }
//     }
exports.generateInvoices = async (req, res) => {
  console.log("Generating invoices...");
  let success = false;

  const { studentId, messDiet } = req.body;
  console.log("Hostel ID:", studentId, "Mess Diet:", messDiet);

  try {
    const students = await Student.findById(studentId);

    console.log("Students found:", students);
    const studentIds = students.map((s) => s._id);
    console.log("Student IDs:", studentIds);

    // Get already generated invoices for current month
    const startOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );
    const existingInvoices = await Invoice.find({
      student: { $in: studentIds },
      date: { $gte: startOfMonth },
    });

    if (existingInvoices.length === students.length) {
      return res
        .status(400)
        .json({ errors: "Invoices already generated", success });
    }

    const daysInLastMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      0
    ).getDate();
    let count = 0;

    for (let student of students) {
      // Skip if invoice already exists for student
      const alreadyExists = existingInvoices.find(
        (inv) => inv.student.toString() === student._id.toString()
      );
      if (alreadyExists) continue;

      let totalAmount = messDiet * daysInLastMonth;

      // Get all approved mess off records for last month
      const messOffs = await MessOff.find({
        student: student._id,
        status: "approved",
        return_date: {
          $gte: new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            1
          ),
          $lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      });

      for (let off of messOffs) {
        const leaveDate = new Date(off.leaving_date);
        const returnDate = new Date(off.return_date);
        const daysOff = Math.floor(
          (returnDate - leaveDate) / (1000 * 60 * 60 * 24)
        );
        totalAmount -= messDiet * daysOff;
      }

      const invoice = new Invoice({
        student: student._id,
        amount: Math.max(0, totalAmount), // Ensure non-negative
      });

      await invoice.save();
      count++;
    }

    success = true;
    return res.status(200).json({ success, count });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ success: false, msg: "Server error" });  // ✅ Sends valid JSON

  }
};

// @route   GET api/invoice/getbyid
// @desc    Get all invoices
// @access  Public
exports.getInvoicesbyid = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), success });
  }
  const { hostel } = req.body;
  let student = await Student.find({ hostel: hostel });
  try {
    let invoices = await Invoice.find({ student: student }).populate(
      "student",
      ["name", "room_no", "urn"]
    );
    success = true;
    res.status(200).json({ success, invoices });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, msg: "Server error" });  // ✅ Sends valid JSON

  }
};

// @route   GET api/invoice/student
// @desc    Get all invoices
// @access  Public
exports.getInvoices = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), success });
  }
  const { student } = req.body;
  try {
    let invoices = await Invoice.find({ student: student });
    success = true;
    res.status(200).json({ success, invoices });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, msg: "Server error" });  // ✅ Sends valid JSON

  }
};

// @route   GET api/invoice/update
// @desc    Update invoice
// @access  Public
exports.updateInvoice = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), success });
  }
  const { student, status } = req.body;
  try {
    let invoice = await Invoice.findOneAndUpdate(
      {
        student: student,
        date: {
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
      { status: status }
    );
    success = true;
    res.status(200).json({ success, invoice });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, msg: "Server error" });  // ✅ Sends valid JSON

  }
};
