export const translateStatus = (status: string) => {
  switch (status) {
    case "pending":
      return "Pendente";
    case "approved":
      return "Aprovado";
    case "rejected":
      return "Rejeitado";
    default:
      return "Não definido";
  }
};

export const translateType = (type: string) => {
  switch (type) {
    case "deposit":
      return "Depósito";
    case "withdraw":
      return "Saque";
    default:
      return "Não definido";
  }
};

export const translateMethod = (method: string) => {
  switch (method) {
    case "mercadopago":
      return "Mercado Pago";
    default:
      return "Não definido";
  }
};
