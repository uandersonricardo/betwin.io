import UserFields from "../entities/UserFields";

class RegisterControl {
  private userRegister: UserRegister;
  private accountRegister: AccountRegister;

  public insertUser(user: UserFields) {
    this.userRegister.insert(user);
  }

  public insertAccount(user: UserFields) {
    this.accountRegister.insert(user);
  }
}

export default RegisterControl;
