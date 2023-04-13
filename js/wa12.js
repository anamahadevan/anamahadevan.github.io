// JSON for each employee with the following details 
//(first name, department, designation, salary, raise eligible)

var employees = { "employees": 
    [
    {
    "firstname": "Sam", "department": "Tech",
    "designation": "Manager", "salary": 40000,"raise_eligible": "true"
    },
    {
    "firstname": "Mary", "department": "Finance",
    "designation": "Trainee","salary": 18500,"raise_eligible": "true"
    },
    {
    "firstname": "Bill",  "department": "HR",
    "designation": "Executive", "salary": 21200,"raise_eligible": "false"
    },

    ]
}

//create JSON for company  (companyName, website, employees)
var company =
{   
    "company_name": "Tech Stars","website": "www.techstars.site", "employees": [],
}

// problem 1: output employee list
console.log('problem 1:')
console.log(employees)

//problem 2: output company information
console.log('problem 2:')
company.employees = employees.employees
console.log(company)

//problem 3: add anna to the JSON
console.log('problem 3:')
company.employees = company.employees.concat({
    "firstname": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": "false"
})
console.log(company)

//problem 4: find total salary
console.log('problem 4:')
//function in which
function salary_calc() 
{
    var total_salary = 0;
    for (i in company.employees) {
        total_salary = total_salary + (company["employees"][i]["salary"]);
    }
console.log("total salary: " + total_salary)
}
salary_calc();



//problem 5:  if employee raise eligible, increase salary by 10%
console.log('problem 5:')

function raiseten() {
    for (i in company.employees) {
        if (company["employees"][i]["raise_eligible"] === "true"){ // if they are eligible for a raise THEN
            company["employees"][i]["salary"] = company["employees"][i]["salary"]  * 1.1;
            company["employees"][i]["raise_eligible"]; // reset to false again so it doesnt keep doing the same?
        }
    }
}
raiseten(); 

console.log(company);

//problem 6: for each employee, add  property 'wfh' and set it to true of false
// console.log('problem 6:')

// function workfromhome(wfh_status) {
//     for (let i = 0; i < company.employees.length; i++) { // go through everyone
//         // if theyre found in the parameters
//         if(){
//             let employee = company.employees[i]; // checks if correct 
//             let is_wfh = wfh_status.employee.firstname;
//             employee.working_from_home = is_wfh;
//         }
//         else if(){ // setting that others are not working from home 

//         }

//     }
//     console.log(company);
// }
// workfromhome(["Anna","Sam"]);

console.log('problem 6:')
function workfromhome(wfh_status) {
    for (let i = 0; i < company.employees.length; i++) {
        if(company["employees"][i]["firstname"])// name is true
        {
            let employee = company["employees"][i];
            let is_working = wfh_status.includes(company["employees"][i]["firstname"]) ? true : false;// shortened if statement here
            employee.working_from_home = is_working;
        }
    }
console.log(company);
}
workfromhome(["Anna","Sam"])