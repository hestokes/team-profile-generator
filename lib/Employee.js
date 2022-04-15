class Employee {
  constructor(name, id, email, password) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRoles() {
      return "Employee"
  }
}

module.exports = Employee;