interface ISubsystemPaymentApiCommunication {
  generatePayment(value: number, transactionId: string): Promise<string>;
}

export default ISubsystemPaymentApiCommunication;
