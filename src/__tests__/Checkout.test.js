import Checkout from '../Checkout';
import { getItemById } from '../data';
import promotionalRuleBasketTotalDiscount from '../promotionalRules/promotionalRuleBasketTotalDiscount';
import promotionalRuleItemMultipleDiscount from '../promotionalRules/promotionalRuleItemMultipleDiscount';
import {
  PromotionRuleBasket,
  PromotionRuleItem,
} from '../promotionalRules/PromotionalRules';

const promotionalRules = [
  new PromotionRuleItem(
    promotionalRuleItemMultipleDiscount.bind(null, '0001', 2, 22.99)
  ),
  new PromotionRuleBasket(
    promotionalRuleBasketTotalDiscount.bind(null, 75, 10)
  ),
];

const checkout = new Checkout(promotionalRules);

describe('Checkout', () => {
  it.each([
    [['0001', '0001', '0002', '0003'], '£103.47'],
    [['0001', '0001', '0001'], '£68.97'],
    [['0002', '0002', '0003'], '£120.59'],
  ])('Item Ids %p makes a total of %s.', (itemIds, expected) => {
    const items = itemIds.map(getItemById);
    checkout.scan(items);

    expect(checkout.total()).toBe(expected);
  });
});
