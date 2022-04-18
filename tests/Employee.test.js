const Employee = require("../lib/Employee");

test("Create new employee?", () => {
  const employeeInstance = new Employee();
  expect(typeof(employeeInstance)).toBe("object");
});

test("Test Name.", () => {
  const name = "Aaron";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Test ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Aaron", id);
  expect(employeeInstance.id).toBe(id);
});

test("Test email.", () => {
  const email = "stokescomp01@gmail.com";
  const employeeInstance = new Employee("Aaron", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Test get name.", () => {
  const testGetName = "Aaron";
  const employeeInstance = new Employee(testGetName);
  expect(employeeInstance.getName()).toBe(testGetName);
});

test("Test get ID", () => {
  const testgetID = 2;
  const employeeInstance = new Employee("Aaron", 2, testgetID);
  expect(employeeInstance.getId()).toBe(testgetID);
});

test("Test get email.", () => {
  const testgetEmail = "stokescomp01@gmail.com";
  const employeeInstance = new Employee("Aaron", 2, testgetEmail);
  expect(employeeInstance.getEmail()).toBe(testgetEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Aaron", 2, "stokescomp01@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
