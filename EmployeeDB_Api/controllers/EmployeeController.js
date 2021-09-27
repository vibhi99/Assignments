const Employee = require('../models/Employee')

//Show the list of Employee
const index = (req, res, next)=>{
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occurred!'
        })
    })
}

//Show single employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
        .catch(error =>{
            res.json({
                message: 'An error Occured!'
            })
        })
    })
}

//Add a new Employee
const store = (req, res, next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()

    .then(response =>{
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured while adding!'
        })
    })
}

//Update an employee

const update = (req, res, next) =>{
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(response =>{
        res.json({
            message: 'Employee Updated Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occurred while updating!'
        })
    })
}

// Delete an employee

const destroy = (req, res, next) =>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(response => {
        res.json({
            message: 'Employee Deleted Succesfully!'
        })
    })
    .then(error =>{
        res.json({
            message: 'An error occurred while deleting!'
        })
    })
}


module.exports = {
    index, show, store, update, destroy
}
