/**
 * TODO: 1-) -> 
 *          Write the code that returns the number of people whose job type is student.
 *          Write the code that returns the number of people whose job type is teacher.
 *          Write the code that returns the number of people whose job type is administration.
 *          Output:
 *                //console.log(getTotalStudents)//13
                  //console.log(getTotalTeachers)//6
                  //console.log(getTotalManagers)//4

        @Point : 10            
 
 * TODO: 2-) Write the code that finds the names of people living in Switzerland.( Array)
             Output:
 *              [
                    'John Doe','David Anderson','Will Smith','Jane Smith','John Williams','John Smith',  'Emily Williams','James Brown','Anna Jones','Oliver Taylor','John Doe','Jane Smith',
                    'James Anderson', 'Diana Johnson','Michael Williams', 'Charles Taylor','Jennifer Brown','George Johnson'
                ]

        @Point : 10   

 * TODO: 3-) Write the code that retrieves the user's fullname, jobType, age, dateOfEntry and country.
            Output:
                 {
                    fullname: 'George Johnson',
                    jobType: 'Teacher',
                    age: 18,
                    dateOfEntry: '05/08/2020',
                    country: 'Switzerland'
                 }
 * TODO: 4-) Write the code that finds users who live in Switzerland and are over 25 years old

        @Point : 10    

 * TODO: 5-) Create a new object containing the user's first name, last name and age and write the code that adds it to the new array. You can use fullName to create a first and last name.

            Output: 
            [{ firstname: 'John', lastname: 'Doe', age: 21 },.....]

        @Point : 10   

 * TODO: 6-)Write the code that creates an e-mail address of the user as lastname.firstname@hicoders.ch using fullname and adds it to the object with the key named email
            Output:
                {
                   fullname: 'George Johnson',
                   jobType: 'Teacher',
                   age: 18,
                   dateOfEntry: '05/08/2020',
                   income: 26000,
                   country: 'Switzerland',
                   address: { city: 'Fribourg', street: 'Main Street', zip: 5678 },
                   email: 'johnson.george@hicoders.ch' @likethis
                }    

        @Point : 10   

 * TODO: 7-) Write the code that finds students whose parents live in zurich and whose parent's income is over 20000
            Output:
            [
                  {
                    fullname: 'John Doe',
                    jobType: 'Student',
                    courses: [ [Object], [Object], [Object] ],
                    age: 30,
                    dateOfEntry: '10/01/2020',
                    country: 'Switzerland',
                    parents: {
                      fathername: 'John Doe Sr.',
                      mothername: 'Jane Doe',
                      income: 40000,
                      professionOfFather: 'Software Engineer',
                      professionOfMother: 'Lawyer',
                      address: [Object]
                    }
                  },
                  {
                    fullname: 'John Smith',
                    jobType: 'Student',
                    courses: [ [Object], [Object], [Object] ],
                    age: 20,
                    dateOfEntry: '01-01-2020',
                    country: 'Switzerland',
                    parents: {
                      fathername: 'James Smith',
                      mothername: 'Jane Smith',
                      income: 40000,
                      professionOfFather: 'Software Engineer',
                      professionOfMother: 'Teacher',
                      address: [Object]
                    }
                  }
            ]

        @Point : 10  

 * TODO: 8-) Write the code that finds all people with "John" in their fullname
        Output:
            {
                 fullname: 'John Doe',
                 jobType: 'Teacher',
                 age: 35,
                 dateOfEntry: '05/01/2020',
                 income: 30000,
                 country: 'Switzerland',
                 address: { city: 'Zurich', street: 'Main Street', zip: 8001 }
               },
               {
                 fullname: 'Diana Johnson',
                 jobType: 'Teacher',
                 age: 39,
                 dateOfEntry: '05/04/2020',
                 income: 32000,
                 country: 'Switzerland',
                 address: { city: 'Bern', street: 'Main Street', zip: 9012 }
            },...

        @Point : 10   

 * TODO: 9-) Write the code that takes the grade point average of the students' courses and adds it to the object with a key named average 
        Output:
            {
                fullname: 'Jessica Brown',
                jobType: 'Student',
                courses: [ [Object], [Object], [Object] ],
                age: 28,
                dateOfEntry: '2/20/2020',
                country: 'Germany',
                parents: {
                  fathername: 'Theodore Brown',
                  mothername: 'Laura Brown',
                  income: 35000,
                  professionOfFather: 'Chef',
                  professionOfMother: 'Writer',
                  address: [Object]
                },
                average: 76.66666666666667 @likethis
            } 

        @Point : 10   

 * TODO: 10-) Write the code that calculates the total taxes for users whose job type is teacher and    administrator. Add TotalTax to the object and print it as a new array.Sample tax calculations are given below.
  Tax rates are at various levels in the federal and in most of the cantons. But in this question, the tax percentage will be the same for all taxpayers who live in different cantons.
            @FederalTax
            The federal tax rate for individuals in Switzerland is a flat rate of 11.5%.
            Therefore, the federal tax on an income of 5000 CHF is 11.5% x 5000 CHF = 575 CHF.
            @CantonalTax
            The cantonal tax rate in Zurich is 5.5%.
            Therefore, the cantonal tax on an income of 5000 CHF is 5.5% x 5000 CHF = 275 CHF.
            @MunicipalTax
            The municipal tax rate in Zurich is 6%.
            Therefore, the municipal tax on an income of 5000 CHF is 6% x 5000 CHF = 300 CHF.       
            @TotalTax
            The total tax on an income of 5000 CHF in Zurich is 575 CHF + 275 CHF + 300 CHF = 1150 CHF.


            
            The total tax on an income of 40000 CHF in Zurich, Switzerland is 23.0%. This is calculated as follows:
            Federal Tax: 11.5% of 40000 CHF = 4600 CHF
            Cantonal Tax: 5.5% of 40000 CHF = 2200 CHF
            Municipal Tax: 6.0% of 40000 CHF = 2400 CHF
            Total Tax: 4600 + 2200 + 2400 = 9200 CHF

        Output:
        {
            fullname: 'Jessica Brown',
            jobType: 'Student',
            courses: [ [Object], [Object], [Object] ],
            age: 28,
            dateOfEntry: '2/20/2020',
            country: 'Germany',
            parents: {
                fathername: 'Theodore Brown',
                mothername: 'Laura Brown',
                income: 35000,
                professionOfFather: 'Chef',
                professionOfMother: 'Writer',
                address: [Object]
            },
            tax: 0
            },
            {
            fullname: 'John Doe',
            jobType: 'Teacher',
            age: 35,
            dateOfEntry: '05/01/2020',
            income: 30000,
            country: 'Switzerland',
            address: { city: 'Zurich', street: 'Main Street', zip: 8001 },
            tax: 6900
            },
            {
            fullname: 'Jane Smith',
            jobType: 'Administration',
            age: 42,
            dateOfEntry: '05/02/2020',
            income: 40000,
            country: 'Switzerland',
            address: { city: 'Geneva', street: 'Main Street', zip: 1234 },
            tax: 9200
        }....

        @Point : 10   
 * 
*/

/* console.log should be here  */
import { users } from "./data.js";
import {
  getTotalStudents,
  getTotalTeachers,
  getTotalManagers,
  getNamesOfPeopleLivingInSwitzerland,
  getPeopleInfos,
  getOver23AgeAndLiveInSwitzerland,
  getPeopleNameundAgeInfos,
  getAddEmail,
  getincomeOver20000AndLiveInZurich,
  getallPeopleWithJohn,
  getAvarageOfTheStudent,
  getCalculateTax,
} from "./function.js";

console.log(getTotalStudents(users));
console.log(getTotalTeachers(users));
console.log(getTotalManagers(users));
console.log(getNamesOfPeopleLivingInSwitzerland(users));
console.log(getPeopleInfos(users));
console.log(getOver23AgeAndLiveInSwitzerland(users));
console.log(getPeopleNameundAgeInfos(users));
console.log(getAddEmail(users));
console.log(getincomeOver20000AndLiveInZurich(users));
console.log(getallPeopleWithJohn(users));
console.log(getAvarageOfTheStudent(users));
console.log(getCalculateTax(users));
