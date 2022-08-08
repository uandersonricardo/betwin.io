import User from "../entities/User";

class DepositControl {
  private depositRegister: DepositRegister;

  public createTransactionDeposit(user: User) {
    this.depositRegister.insert(user);
  }
}

export default DepositControl;
