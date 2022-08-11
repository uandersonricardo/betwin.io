import User from "../entities/User";

interface ISubsystemPaymentApiCommunication {
  generatePayment(value: number, user: User): Promise<any>;
}
export default ISubsystemPaymentApiCommunication;
