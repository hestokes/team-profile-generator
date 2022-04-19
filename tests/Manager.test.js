const Manager = require("../lib/Manager");

test("Create office number?", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Aaron", 2, "stokescomp01@gmail.com", 2);
  expect(employeeInstance.getRole()).toBe(returnValue);
});
