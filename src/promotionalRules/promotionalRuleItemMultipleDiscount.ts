import Item from '../Item.interface';

const promotionalRuleItemMultipleDiscount = (
  id: string,
  quantityRequired: number,
  discountPrice: number,
  items: Item[]
): Item[] => {
  const matchingItems = items.filter((item) => id === item.id);
  if (matchingItems.length < quantityRequired) {
    return items;
  }

  return items.map((item) => {
    const price = item.id === id ? discountPrice : item.price;

    return {
      ...item,
      price,
    };
  });
};

export default promotionalRuleItemMultipleDiscount;
