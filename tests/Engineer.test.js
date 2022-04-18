const Engineer = require("../lib/Engineer");

test("Create Github?", () => {
  const githubTest = "hestokes";
  const employeeInstance = new Engineer(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    githubTest
  );
  expect(employeeInstance.github).toBe(githubTest);
});

test("Will githubTest return github?", () => {
  const githubTest = "hestokes";
  const employeeInstance = new Engineer(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    githubTest
  );
  expect(employeeInstance.getGithub()).toBe(githubTest);
});

test("Role test.", () => {
  const returnRole = "Engineer";
  const employeeInstance = new Engineer(
    "Aaron",
    2,
    "stokescomp01@gmail.com",
    "hestokes"
  );
  expect(employeeInstance.getRole()).toBe(returnRole);
});
