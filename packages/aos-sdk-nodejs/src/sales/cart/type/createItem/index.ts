export type CreateItemDto = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
};
