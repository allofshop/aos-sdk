import { Period } from './_period';

export type Plan = {
  period: Period;
  iterationCount?: number;
  prepaid: boolean;
};
