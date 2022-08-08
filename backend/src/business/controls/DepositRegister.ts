import IDepositRepository from "../../data/IRepository/IDepositRepository";
import User from "../entities/User";

class DepositRegister {
  private depositRepository;

  constructor(depositRepository: IDepositRepository) {
    this.depositRepository = depositRepository;
  }

  public insert(method: string, value: number, user: User) {
    this.depositRepository.insert(method, value, user);
  }
}
export default DepositRegister;
