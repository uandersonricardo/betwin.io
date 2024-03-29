interface ISubsystemPaymentApi {
  generatePayment(value: number, transactionId: string): Promise<string>;
  getPaymentInfo(paymentId: string): Promise<any>;
}

export default ISubsystemPaymentApi;
