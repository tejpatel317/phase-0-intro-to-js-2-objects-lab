const employee = {
    name: 'Tej',
    streetAdress: '380 River Drive',
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    return {...employeeObject,[key] : value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const copyOfEmployee = {...employeeObject};
    delete copyOfEmployee[key];
    return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
}