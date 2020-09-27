import { Documento } from './documento.model';
export class Fundo {
  constructor(){}
  benchmark: {
      id: number,
      name: string
  };
  closed_to_capture_explanation: string;
  closing_date: Date;
  cnpj: string;
  description: {
    movie_url: string,
    objective: string,
    strategy: string,
    strengths: string,
    target_audience: string
  };
  description_seo: string;
  documents: Documento[];
  fees: {
    maximum_administration_fee: string,
    anticipated_retrieval_fee_value: string,
    administration_fee: string,
    anticipated_retrieval_fee: string,
    performance_fee: string
  };
  full_name: string;
  fund_manager: {
    description: string,
    id: number,
    full_name: string,
    logo: string,
    slug: string
  };
  fund_situation: {
    code: string,
    name: string
  };
  id: number;
  initial_date: string;
  insurance_company_code: null;
  is_active: boolean;
  is_closed: boolean;
  is_closed_to_capture: boolean;
  is_simple: boolean;
  net_patrimony_12m: string;
  opening_date: null;
  operability: {
    anticipate_retrieval_liquidation_days: number,
    anticipate_retrieval_liquidation_days_str: string,
    anticipate_retrieval_liquidation_days_type: string,
    anticipated_retrieval_quotation_days: number,
    anticipated_retrieval_quotation_days_str: string,
    anticipated_retrieval_quotation_days_type: string,
    application_quotation_days: number,
    application_quotation_days_str: string,
    application_quotation_days_type: string,
    application_time_limit: string,
    grace_period_in_days: number,
    grace_period_in_days_str: any,
    has_grace_period: boolean,
    has_operations_on_fridays: boolean,
    has_operations_on_mondays: boolean,
    has_operations_on_thursdays: boolean,
    has_operations_on_tuesdays: boolean,
    has_operations_on_wednesdays: boolean,
    max_balance_permanence: string,
    maximum_initial_application_amount: string,
    minimum_balance_permanence: string,
    minimum_initial_application_amount: string,
    minimum_subsequent_application_amount: string,
    minimum_subsequent_retrieval_amount: string,
    retrieval_direct: boolean,
    retrieval_liquidation_days: number,
    retrieval_liquidation_days_str: string,
    retrieval_liquidation_days_type: string,
    retrieval_quotation_days: number,
    retrieval_quotation_days_str: string,
    retrieval_quotation_days_type: string,
    retrieval_special_type: string,
    retrieval_time_limit: string,
  };
  orama_standard: boolean;
  performance_audios: any[];
  performance_videos: any[];
  profitabilities: {
    m60: any,
    m48: any,
    m24: any,
    m36: any,
    month: string
  };
  quota_date: string;
  simple_name: string;
  slug: string;
  specification: {
    fund_suitability_profile: {
      name: string,
      score_range_order: number
    },
    fund_risk_profile: {
      name: string,
      score_range_order: number
    };
    is_qualified: boolean,
    fund_type: string,
    fund_class: string
  };
  strategy_video: any;
  target_fund: any;
  tax_classification: string;
  volatility_12m: string;
}
