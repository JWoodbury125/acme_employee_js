const findEmployeeByName = (strName, arr) => {
    let nameArray = arr.filter(value => value.name === strName);

    return nameArray[0];
}

const findManagerFor = (func, arr) => {
    let bossId = func.managerId;
    let nameArray = arr.filter(value => value.id === bossId);
    
    return nameArray[0];
}

const findCoworkersFor = (func, arr) => {
    let bossId = func.managerId;
    let employee = func.name;
    let nameArray = arr.filter(value => value.managerId === bossId && value.name !== employee);

    return nameArray;
}

const findManagmentChain = (arr) => {
    let workTree = {};
    let manager = arr.filter(value => value.managerId === undefined)[0];
    manager['reports'] = arr.filter(value => value.managerId === manager.id)
    let workers = arr.reduce((accum, value) => {
        if (accum.id === value.managerId){
            accum.push(value);
        }
            return accum;
         }, [])

    
    console.log(workers)
}
