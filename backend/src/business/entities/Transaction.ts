import User from "./User";

class Transaction {
  private id;
  private type;
  private method;
  private value;
  private user;
  private date;

  constructor(
    id: string,
    type: string,
    method: string,
    value: number,
    user: User,
    date: Date
  ) {
    this.id = id;
    this.type = type;
    this.method = method;
    this.value = value;
    this.user = user;
    this.date = date;
  }

  public getId() {
    return this.id;
  }

  public getType() {
    return this.type;
  }

  public setType(type: string) {
    this.type = type;
  }

  public getMethod() {
    return this.method;
  }

  public setMethod(method: string) {
    this.method = method;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public getDate() {
    return this.date;
  }

  public setDate(date: Date) {
    this.date = date;
  }
}

export default Transaction;
