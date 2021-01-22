import promotionalRuleBasketTotalDiscount from '../promotionalRuleBasketTotalDiscount';

describe('promotionalRuleBasketTotalDiscount', () => {
  it('takes a percentage off when the total is over the minimum', () => {
    const result = promotionalRuleBasketTotalDiscount(10, 20, 150);

    expect(result).toEqual(120);
  });

  it('does not take a percentage off when the total is under the minimum', () => {
    const result = promotionalRuleBasketTotalDiscount(140, 20, 130);

    expect(result).toEqual(130);
  });

  it('takes a percentage off when the total is equal to the minimum', () => {
    const result = promotionalRuleBasketTotalDiscount(140, 20, 140);

    expect(result).toEqual(112);
  });
});
