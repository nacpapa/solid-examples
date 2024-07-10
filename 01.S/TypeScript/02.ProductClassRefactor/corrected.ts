// class Product {
//   constructor(private name: string, private price: number) {}

//   getName(): string {
//     return this.name;
//   }

//   setName(name: string): void {
//     this.name = name;
//   }

//   getPrice(): number {
//     return this.price;
//   }

//   setPrice(price: number): void {
//     this.price = price;
//   }
// }

// class TaxCalculator {
//   calculateTax(price: number): number {
//     return price * 1.2; // Suponiendo un 20% de impuesto
//   }
// }

// // Uso
// const product = new Product("Laptop", 1000);
// const taxCalculator = new TaxCalculator();

// const priceWithTax = taxCalculator.calculateTax(product.getPrice());
// console.log(`Price with tax: ${priceWithTax}`);
