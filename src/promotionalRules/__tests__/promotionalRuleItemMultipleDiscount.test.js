import promotionalRuleItemMultipleDiscount from '../promotionalRuleItemMultipleDiscount';

describe('promotionalRuleItemMultipleDiscount', () => {
  it('should return the same set of items if there are not enough to apply the discount', () => {
    const items = [
      { id: 'cat', name: 'Cat', price: 111 },
      { id: 'dog', name: 'Dog', price: 222 },
      { id: 'dog', name: 'Dog', price: 222 },
    ];
    const result = promotionalRuleItemMultipleDiscount('aaaa', 2, 123, items);

    expect(result).toEqual(items);
  });

  it('should change the price of the dog item when there are enough to apply the discount', () => {
    const items = [
      { id: 'cat', name: 'Cat', price: 111 },
      { id: 'dog', name: 'Dog', price: 123 },
      { id: 'dog', name: 'Dog', price: 123 },
      { id: 'dog', name: 'Dog', price: 123 },
    ];
    const result = promotionalRuleItemMultipleDiscount('dog', 2, 123, items);

    expect(result).toEqual(items);
  });
});
