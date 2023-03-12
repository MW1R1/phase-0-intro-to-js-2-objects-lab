// Write your solution in this file!
const employee = {
    name: "Johnson",
    streetAddress: "Nairobi",
}

function updateEmployeeWithKeyAndValue(employee, key,value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;

}