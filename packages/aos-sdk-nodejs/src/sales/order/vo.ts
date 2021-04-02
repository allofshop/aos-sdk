export enum PaymentType {
  DEPOSIT = 'DEPOSIT',
  PG_VBANK = 'PG-VBANK',
  PG_DEPOSIT = 'PG-DEPOSIT',
  PG_CARD = 'PG-CARD',
}

export enum ReceiptType {
  INCOME_DEDUCTION = 'INCOME-DEDUCTION',
  PROOF_OF_EXPENDITURE = 'PROOF-OF-EXPENDITURE',
}

export enum PayMethod {
  CARD = 'CARD',
  VBANK = 'VBANK',
  BANK = 'BANK',
  CELLPHONE = 'CELLPHONE',
}

/**
 * 주문 항목 상태
 */
export enum OrderItemStatus {
  /**
   * 임시
   */
  DRAFT = 'DRAFT',

  /**
   * 결제 처리중
   */
  PAYMENT_PROCESSING = 'PAYMENT-PROCESSING',

  /**
   * 상품 처리중
   */
  PRODUCT_PROCESSING = 'PRODUCT-PROCESSING',

  /**
   * 배송 처리중
   */
  DELIVERY_PROCESSING = 'DELIVERY-PROCESSING',

  /**
   * 항목 처리 완료
   */
  COMPLETED = 'COMPLETED',

  /**
   * CS 처리중
   */
  CS_PROCESSING = 'CS-PROCESSING',

  /**
   * 주문 만료
   * [조건]
   * 1. 사용자 역할이나 주문에 사용된 상품, 쿠폰, 마일리지, 할인의 정보 변경이 있을 때
   * 2. 주문에 사용된 쿠폰, 마일리지, 할인의 사용 기간을 초과했을 때
   */
  EXPIRED = 'EXPIRED',
}
