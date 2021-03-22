export enum CustomerServiceType {
  CANCEL = 'CANCEL',
  EXCHANGE = 'EXCHANGE',
  RETURN = 'RETURN',
  REFUND = 'REFUND',
}

export enum CustomerServicePaymentWay {
  BANK = 'BANK',
  PG = 'PG',
  MILEAGE = 'MILEAGE',
}

export enum CustomerServiceStatus {
  RECEIVED = 'RECEIVED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  DEFERRED = 'DEFERRED',
}
