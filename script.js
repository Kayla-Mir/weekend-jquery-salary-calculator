$(document).ready(readyNow) 

let employees = [];

function readyNow() {
    $('#add-employee-btn').on('click', handleAddEmployeeClick);
    renderEmployees(employees);
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
        annualSalary: Number(annualSalary)
    };

    employees.push(newEmployee);
// IMPORTANT CLEAR FIELDS LATER!!!! ----------------------------->
    $('#first-name-input').val('Kayla');
    $('#last-name-input').val('Mir');
    $('#id-input').val('1');
    $('#title-input').val('Programmer');
    $('#annual-salary-input').val(25000);

    renderEmployees(employees);
    renderTotalMonthlyOutput(employees);
}

function renderEmployees(peopleToRender) {
    $('#employee-table-body').empty();

    for (let employee of peopleToRender) {
        let newTableRow = `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNum}</td>
                <td>${employee.titleName}</td>
                <td>$${employee.annualSalary.toLocaleString('en-US')}</td>
                <td><button id="remove-btn">Remove</button></td>
            </tr>
        `;
        $('#employee-table-body').append(newTableRow);
    }
    
}

function renderTotalMonthlyOutput(itemsToSum) {
    let totalSum = calculateTotalMonthlyOutput(itemsToSum);

    $('#total-monthly-output').text(totalSum.toLocaleString('en-US', 
        {maximumFractionDigits: 2}));
}

function calculateTotalMonthlyOutput(itemsToSum) {
    let sum = 0;

    for (let annualSalary of itemsToSum) {
        sum += annualSalary.annualSalary / 12;
    }
    return sum;
}