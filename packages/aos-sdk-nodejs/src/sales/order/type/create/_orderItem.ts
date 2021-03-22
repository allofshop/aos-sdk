export type OrderItem = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
  carrier?: string;
};
