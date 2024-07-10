class Product {
  constructor(private name: string, private price: number) {}

  getPriceWithTax(): number {
    return this.price * 1.2; // Suponiendo un 20% de impuesto
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}
