class LoginControl {
  private userRegister: UserRegister;

  public login(username: string, password: string) {
    this.userRegister.login(username, password);
  }

  public registerSession() {
    return null;
  }
}

export default LoginControl;
