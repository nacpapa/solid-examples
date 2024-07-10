class Employee {
  constructor(
    private id: number,
    private name: string,
    private salary: number,
    private workingDays: number
  ) {}

  getEmployeeDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
  }

  calculateMonthlySalary(): number {
    const dailyRate = this.salary / 30;
    return dailyRate * this.workingDays;
  }

  generateReport(): string {
    return `Employee Report: ${this.getEmployeeDetails()}, Monthly Salary: ${this.calculateMonthlySalary()}`;
  }
}

// Uso
const employee = new Employee(1, "John Doe", 3000, 20);
console.log(employee.generateReport());
