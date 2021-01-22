import Item from './Item.interface';

const db: Item[] = [
  { id: '0001', name: 'Water Bottle', price: 24.95 },
  { id: '0002', name: 'Hoodie', price: 65 },
  { id: '0003', name: 'Sticker Set', price: 3.99 },
];

export const getItemById = (searchItemId: string): Item =>
  db.find((item) => item.id === searchItemId);
