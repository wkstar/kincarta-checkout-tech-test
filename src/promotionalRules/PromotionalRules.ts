import Item from '../Item.interface';

type PromotionRuleItemProcess = (items: Item[]) => Item[];
type PromotionRuleBasketProcess = (total: number) => number;
type PromotionRuleProcess =
  | PromotionRuleItemProcess
  | PromotionRuleBasketProcess;

export class PromotionRule {
  process: PromotionRuleProcess;

  constructor(processFunction: PromotionRuleProcess) {
    this.process = processFunction;
  }
}

export class PromotionRuleItem extends PromotionRule {
  process: PromotionRuleItemProcess;
}
export class PromotionRuleBasket extends PromotionRule {
  process: PromotionRuleBasketProcess;
}
