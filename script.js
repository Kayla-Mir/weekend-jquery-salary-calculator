$(document).ready(readyNow) 

let employees = [];

function readyNow() {
    $('#add-employee-btn').on('click', handleAddEmployeeClick);
}

function handleAddEmployeeClick() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let idNum = $('#id-input').val();
    let titleName = $('#title-input').val();
    let annualSalary = $('#annual-salary-input').val();

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        titleName: titleName,
        annualSalary: annualSalary
    };

    employees.push(newEmployee);
// IMPORTANT CLEAR FIELDS LATER!!!! ----------------------------->
    $('#first-name-input').val('Kayla');
    $('#last-name-input').val('Mir');
    $('#id-input').val('1');
    $('#title-input').val('Programmer');
    $('#annual-salary-input').val('25000');
}