import User from "../entities/User";
import DepositRegister from "./DepositRegister";

class DepositControl {
  private depositRegister: DepositRegister;

  constructor(depositRegister: DepositRegister) {
    this.depositRegister = depositRegister;
  }

  public createTransactionDeposit(method: string, value: number, user: User) {
    this.depositRegister.insert(method, value, user);
  }
}

export default DepositControl;
