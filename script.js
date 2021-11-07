$(document).ready(readyNow) 

let employees = [];

function readyNow() {
    $('#add-employee-btn').on('click', handleAddEmployeeClick);
    $('#employee-table-body').on('click', '#remove-btn', handleRemoveButtonClick)
    //renderEmployees(employees);
    renderTotalMonthlyOutput(employees);
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
        idNum: Number(idNum),
        titleName: titleName,
        annualSalary: Number(annualSalary)
    };

    employees.push(newEmployee);

    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');

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
                <td data-id='${employee.idNum}'>${employee.idNum}</td>
                <td>${employee.titleName}</td>
                <td>$${employee.annualSalary.toLocaleString('en-US')}</td>
                <td>
                    <button id="remove-btn">Remove</button>
                </td>
            </tr>
        `;
        $('#employee-table-body').append(newTableRow);
    }
    
}

function handleRemoveButtonClick() {
    const employeeId = $(this).parent().prev().prev().prev().data().id
    $(this).parent().parent().remove();

    employees = employees.filter(employee => employee.idNum !== employeeId);
   
    renderTotalMonthlyOutput(employees);
}

function renderTotalMonthlyOutput(employeesArray) {

    let totalSum = calculateTotalMonthlyOutput(employeesArray);
  
    $('#total-monthly-output').empty();
    if (totalSum < 20000) {
        $('#total-monthly-output').append(totalSum.toLocaleString('en-US', 
            {maximumFractionDigits: 2}));
        $('#total-monthly-area').removeClass("redWarning");
    } else if (totalSum > 20000) {
        $('#total-monthly-output').append(totalSum.toLocaleString('en-US', 
            {maximumFractionDigits: 2}));
        $('#total-monthly-area').addClass("redWarning");
    }

}

function calculateTotalMonthlyOutput(employeesArray) {
    let sum = 0;

    for (let employee of employeesArray) {
        sum += employee.annualSalary / 12;
    }
    return sum;
}