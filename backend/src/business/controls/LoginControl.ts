import UserRegister from "./UserRegister";

class LoginControl {
  private userRegister;

  constructor(userRegister: UserRegister) {
    this.userRegister = userRegister;
  }

  public login(username: string, password: string) {
    this.userRegister.exist(username, password);
  }

  // Lack the user parameter
  public registerSession() {
    return null;
  }
}

export default LoginControl;
