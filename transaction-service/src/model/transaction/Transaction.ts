class Transaction {
  private id;
  private type;
  private method;
  private value;
  private userId;
  private status;
  private date;

  constructor(
    id: string,
    type: string,
    method: string,
    value: number,
    userId: string,
    status: string,
    date: Date
  ) {
    this.id = id;
    this.type = type;
    this.method = method;
    this.value = value;
    this.userId = userId;
    this.status = status;
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

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: string) {
    this.status = status;
  }

  public getDate() {
    return this.date;
  }

  public setDate(date: Date) {
    this.date = date;
  }
}

export default Transaction;
