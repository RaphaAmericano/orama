import { Fundo } from './../core/models/fundo.model';
import { DatabaseService } from './../core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-fundos',
  templateUrl: './lista-fundos.component.html',
  styleUrls: ['./lista-fundos.component.scss']
})
export class ListaFundosComponent implements OnInit {

  fundos: Fundo[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.data$.subscribe(
      res => this.fundos = res
    );

  //   this.fundos = [{
  //     benchmark: {
  //       id: 2,
  //       name: "CDI"
  //     },
  //     closed_to_capture_explanation: "",
  //     closing_date: null,
  //     cnpj: "32.225.478/0001-06",
  //     description: {
  //         movie_url: null,
  //         objective: "A política de investimento do FUNDO consiste em aplicar, no mínimo, 95% (noventa e cinco por cento de seu patrimônio líquido em cotas do PIMCO INCOME DÓLAR FUNDO DE INVESTIMENTO MULTIMERCADO INVESTIMENTO NO EXTERIOR, inscrito no CNPJ nº 32.225.606/0001-11 (“Fundo Master”), administrado pelo",
  //         strategy: "Fundo classificado como Renda Fixa Global - Investimento no Exterior, com objetivo de retorno de CDI+3% ao ano no médio/longo prazo. O Fundo investe no mercado de renda fixa global, com exposição cambial, com base em análise macroeconômica e fundamentalista. Possui uma gestão internacional que busca das melhores oportunidades de renda fixa ao redor do mundo, com o objetivo de captar as grandes tendências.",
  //         strengths: "A PIMCO foi fundada em 1971, presente em 12 países e no Brasil desde 2012. Recebeu vários prêmios da Morningstar como Gestor de Renda Fixa. Indicado para diversificação global.",
  //         target_audience: "Investidores Qualificados"
  //     },
  //     description_seo: "Investir em fundos pela Órama é a melhor forma de acessar todos os investimentos sem preocupação, afinal, tem sempre um especialista cuidando disso para você.",
  //     documents: [
  //         {
  //             document_type: "Regulamento",
  //             document_url: "app_img/fund_document/R_-__PIMCO_Income_Dólar_FIC_FIM_IE_-_20190208.pdf",
  //             name: "Regulamento",
  //             position: 1,
  //         }
  //     ],
  //     fees: {
  //         maximum_administration_fee: "Não há",
  //         anticipated_retrieval_fee_value: "0.00",
  //         administration_fee: "0,93%",
  //         anticipated_retrieval_fee: "Não há",
  //         performance_fee: "Não há"
  //     },
  //     full_name: "PIMCO Income Dólar FIC FIM IE",
  //     fund_manager: {
  //       description: "Fundada em 1971, a PIMCO é formada por mais de 2.0…O possuía USD 1,51 trilhões de ativos sob gestão.",
  //       id: 41,
  //       full_name: "PIMCO Latin America Administradora de Carteiras LTDA.",
  //       logo: "app_img/manager/logo_small/pimco.jpg", slug: "PIMCO"
  //     },
  //     fund_situation: {
  //       code: "1", name: "Fundo aberto"
  //     },
  //     id: 1013,
  //     initial_date: "2019-02-27",
  //     insurance_company_code: null,
  //     is_active: true,
  //     is_closed: false,
  //     is_closed_to_capture: false,
  //     is_simple: false,
  //     net_patrimony_12m: "0.00",
  //     opening_date: null,
  //     operability: {
  //       has_operations_on_thursdays: false,
  //       retrieval_liquidation_days_type: "úteis",
  //       application_quotation_days_type: "úteis",
  //       retrieval_quotation_days: 1,
  //       anticipated_retrieval_quotation_days_type: "corridos"
  //     },
  //     orama_standard: true,
  //     performance_audios: [],
  //     performance_videos: [],
  //     profitabilities: {
  //       m60: null,
  //       m48: null,
  //       m24: null,
  //       m36: null,
  //       month: "-0.000808"
  //     },
  //     quota_date: "2020-09-24",
  //     simple_name: "PIMCO Income Dólar FIC FIM IE",
  //     slug: "PIMCO-Income-Dolar-FIC-FIM-IE",
  //     specification: {
  //       fund_suitability_profile: {
  //         name: "Conservador",
  //         score_range_order: 1
  //       },
  //       fund_risk_profile: {
  //         name: "Régua de risco 4",
  //         score_range_order: 4
  //       },
  //       is_qualified: true,
  //       fund_type: "Multimercado",
  //       fund_class: "Multimercado Investimento no Exterior"
  //     },
  //     strategy_video: null,
  //     target_fund: null,
  //     tax_classification: "Longo prazo",
  //     volatility_12m: "0.169434"
  // }];

  }

}
