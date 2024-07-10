// // Módulo para datos de empleados
// class Employee {
//     constructor(private id: number, private name: string, private salary: number) {}

//     getId(): number {
//       return this.id;
//     }

//     getName(): string {
//       return this.name;
//     }

//     getSalary(): number {
//       return this.salary;
//     }

//     setSalary(salary: number): void {
//       this.salary = salary;
//     }
//   }

//   // Módulo para cálculo de salarios
//   class SalaryCalculator {
//     calculateMonthlySalary(employee: Employee, workingDays: number): number {
//       const dailyRate = employee.getSalary() / 30;
//       return dailyRate * workingDays;
//     }
//   }

//   // Módulo para generación de reportes
//   class ReportGenerator {
//     generateEmployeeReport(employee: Employee, monthlySalary: number): string {
//       return `Employee Report: ID: ${employee.getId()}, Name: ${employee.getName()}, Monthly Salary: ${monthlySalary}`;
//     }
//   }

//   // Uso
//   const employee = new Employee(1, 'John Doe', 3000);
//   const salaryCalculator = new SalaryCalculator();
//   const reportGenerator = new ReportGenerator();

//   const monthlySalary = salaryCalculator.calculateMonthlySalary(employee, 20);
//   const report = reportGenerator.generateEmployeeReport(employee, monthlySalary);

//   console.log(report);
