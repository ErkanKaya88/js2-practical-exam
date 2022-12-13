import { users } from "./data.js";

/* Question 1  - Start  */
const getTotalStudents = (pArray) => {
  let TotalStudents = 0;
  pArray.forEach((person) => {
    if (person.jobType === "Student") {
      TotalStudents++;
    }
  });
  return TotalStudents;
};
//////
const getTotalTeachers = (pArray) => {
  let TotalTeachers = 0;
  pArray.forEach((person) => {
    if (person.jobType === "Teacher") {
      TotalTeachers++;
    }
  });
  return TotalTeachers;
};
////
const getTotalManagers = (pArray) => {
  let TotalManagers = 0;
  pArray.forEach((person) => {
    if (person.jobType === "Administration") {
      TotalManagers++;
    }
  });
  return TotalManagers;
};

/* Question 1  -  End  */

//-------------------------------------------------

/* Question 2  - Start  */

const getNamesOfPeopleLivingInSwitzerland = (pArray) => {
  let peopleNames = [];
  pArray.forEach((person) => {
    if (person.country === "Switzerland") {
      peopleNames.push(person.fullname);
    }
  });
  return peopleNames;
};

/* Question 2  -  End  */

//-------------------------------------------------

/* Question 3  - Start  */

const getPeopleInfos = (pArray) => {
  return pArray.map((person) => {
    return {
      fullname: person.fullname,
      jobType: person.jobType,
      age: person.age,
      dateOfEntry: person.dateOfEntry,
      country: person.country,
    };
  });
};

console.log(getPeopleInfos(users));
/* Question 3  -  End  */

//-------------------------------------------------

/* Question 4  - Start  */

const getOver23AgeAndLiveInSwitzerland = (pArray) => {
  return pArray.filter(
    (person) => person.age > 23 && person.country === "Switzerland"
  );
};

/* Question 4  -  End  */

//-------------------------------------------------

/* Question 5  - Start  */

const getPeopleNameundAgeInfos = (pArray) => {
  const getPersonInfos = pArray.map((person) => {
    let getFirstName = person.fullname.split(" ")[0];
    let getLastName = person.fullname.split(" ")[1];

    return {
      firstname: getFirstName,
      lastname: getLastName,
      age: person.age,
    };
  });
  return getPersonInfos;
};

/* Question  5 -  End  */

//-------------------------------------------------

/* Question 6  - Start  */

const getAddEmail = (pArray) => {
  const getPersonEmail = pArray.map((person) => {
    let getFirstName = person.fullname.split(" ")[0].toLowerCase();
    let getLastName = person.fullname.split(" ")[1].toLowerCase();

    return {
      ...person,
      email: `${getLastName}.${getFirstName}@hicoder.ch`,
    };
  });
  return getPersonEmail;
};

/* Question 6  -  End  */

//-------------------------------------------------

/* Question 7  - Start  */

const getincomeOver20000AndLiveInZurich = (pArray) => {
  return pArray.filter(
    (person) =>
      person.jobType === "Student" &&
      person.parents.income > 20000 &&
      person.parents.address.city === "Zurich"
  );
};
/* Question 7  -  End  */

//-------------------------------------------------

/* Question 8  - Start  */

const getallPeopleWithJohn = (pArray) => {
  return pArray.filter((person) => person.fullname.includes("John"));
};

/* Question 8  -  End  */

//-------------------------------------------------

/* Question 9  - Start  */

const getAvarageOfTheStudent = (pArray) => {
  return pArray
    .filter((person) => person.jobType === "Student")
    .map((person) => {
      let avarage =
        person.courses
          .map((item) => item.score)
          .reduce((acc, per) => acc + per) / person.courses.length;

      return { ...person, avarage: avarage };
    });
};

/* Question  9 -  End  */

//-------------------------------------------------

/* Question 10  - Start  */

const getCalculateTax = (pArray) => {
  return pArray.map((person) => {
    let federalTax = (person.income * 11.5) / 100;
    let cantonalTax = (person.income * 5.5) / 100;
    let municipalTax = (person.income * 6) / 100;
    let totalTax = federalTax + cantonalTax + municipalTax;
    if (person.jobType === "Student") {
      return { ...person, tax: 0 };
    } else {
      return { ...person, tax: totalTax };
    }
  });
};
/* Question 10  -  End  */

export {
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
};
