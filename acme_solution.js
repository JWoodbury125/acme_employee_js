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

    
    return workers;
}

const generateManagementTree = (arr) => {
    let workers = arr.filter(value => (value['name'] !== 'moe'));
    let boss = arr.filter(value => value['name'] === 'moe')[0];
    let ids = workers.map(value => value['id']);
    let manageTree = {};

    
    for(let i =0; i<ids.length; i++){
        let downstream = [];
        for(let j=0; j<ids.length; j++){
            if (ids[i] === workers[j]["managerId"]){
                downstream.push(workers[j]);
            }
            
        workers[i]['reports'] = downstream;
        }
    }

    boss['reports'] = workers.filter(value => value.managerId === boss.id);
    
    return boss;
}