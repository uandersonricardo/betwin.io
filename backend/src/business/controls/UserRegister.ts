import UserFields from "../entities/UserFields";

class UserRegister {
  private userRepository: IUserRepository;

  public insert(user: UserFields) {
    this.userRepository.insert(user);
  }

  public exist(username: string, password: string) {
    this.userRepository.exist(username, password);
  }
}

export default UserRegister;
