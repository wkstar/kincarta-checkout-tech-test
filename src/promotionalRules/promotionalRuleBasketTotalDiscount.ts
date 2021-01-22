const promotionalRuleBasketTotalDiscount = (
  minimumTotal: number,
  percentageDiscount: number,
  total: number
): number => {
  if (total < minimumTotal) {
    return total;
  }

  const percentageMultiple = (100 - percentageDiscount) / 100;
  return percentageMultiple * total;
};

export default promotionalRuleBasketTotalDiscount;
