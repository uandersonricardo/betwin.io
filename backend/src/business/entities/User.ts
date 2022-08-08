class User {
  private id;
  private username;
  private password;
  private email;
  private cpf;

  constructor(
    id: string,
    username: string,
    password: string,
    email: string,
    cpf: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.cpf = cpf;
  }

  public getId() {
    return this.id;
  }

  public getUsername() {
    return this.username;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getCpf() {
    return this.cpf;
  }

  public setCpf(cpf: string) {
    this.cpf = cpf;
  }
}

export default User;
