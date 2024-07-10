// Tienes una clase User que gestiona los datos del usuario y también se encarga de la autenticación. Refactoriza el código para que cada clase tenga una única responsabilidad.

class User {
  constructor(private username: string, private password: string) {}

  authenticate(password: string): boolean {
    return this.password === password;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  setPassword(password: string): void {
    this.password = password;
  }
}
