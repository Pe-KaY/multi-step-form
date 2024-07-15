export interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  selectedPlan?: string;
  billingPeriod?: string;
  planPrice?: number | null;
  addons?: {
    name: string;
    description: string;
    checked: boolean;
    price: { monthly: number; yearly: number };
  }[];
}
