const Intern = require("../lib/Intern");

test("Create school?", () => {
  const schoolTest = "Name of School.";
  const employeeInstance = new Intern(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    schoolTest
  );
  expect(employeeInstance.school).toBe(schoolTest);
});

test("Office number test.", () => {
  const schoolTest = "Name of School.";
  const employeeInstance = new Intern(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    schoolTest
  );
  expect(employeeInstance.getSchool()).toBe(schoolTest);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
