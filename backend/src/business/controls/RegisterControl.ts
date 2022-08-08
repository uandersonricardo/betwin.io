import UserFields from "../entities/UserFields";
import AccountRegister from "./AccountRegister";
import UserRegister from "./UserRegister";

class RegisterControl {
  private userRegister;
  private accountRegister;

  constructor(userRegister: UserRegister, accountRegister: AccountRegister) {
    this.userRegister = userRegister;
    this.accountRegister = accountRegister;
  }

  public register(user: UserFields) {
    this.userRegister.insert(user);
    this.accountRegister.insert(user);
  }
}

export default RegisterControl;
