import Item from './Item.interface';

import {
  PromotionRule,
  PromotionRuleItem,
  PromotionRuleBasket,
} from './promotionalRules/PromotionalRules';

const TOTAL_DECIMAL_PLACES = 2;

class Checkout {
  basketRules = [];
  itemRules = [];
  items: Item[] = [];

  constructor(promotionalRules: PromotionRule[]) {
    this.itemRules = promotionalRules.filter(
      (promotionalRule) => promotionalRule instanceof PromotionRuleItem
    );

    this.basketRules = promotionalRules.filter(
      (promotionalRule) => promotionalRule instanceof PromotionRuleBasket
    );
  }

  scan(items: Item[]): void {
    this.items = this.itemRules.reduce(
      (accumulator, rule) => rule.process(accumulator),
      items
    );
  }

  total(): string {
    const startingTotal = this.items.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );

    const processedTotal = this.basketRules.reduce(
      (accumulator, rule) => rule.process(accumulator),
      startingTotal
    );

    return `£${processedTotal.toFixed(TOTAL_DECIMAL_PLACES)}`;
  }
}

export default Checkout;
