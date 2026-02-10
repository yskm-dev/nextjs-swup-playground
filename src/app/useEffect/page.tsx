'use client';
import { memo, useState } from 'react';

const Items = [
  { id: 1, name: 'Apple', price: 300 },
  { id: 2, name: 'Orange', price: 250 },
  { id: 3, name: 'Banana', price: 100 },
];

export default function Page() {
  console.log('Page rendered');

  const [selectItem, setSelectItem] = useState('');

  return (
    <div>
      <div>{selectItem ? `Selected: ${selectItem}` : 'No item selected'}</div>
      <ItemList
        items={Items}
        onSelect={(name) => setSelectItem(name)}
      ></ItemList>
    </div>
  );
}

const ItemList = memo(function ({
  items,
  onSelect,
}: {
  items: typeof Items;
  onSelect: (name: string) => void;
}) {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={() => onSelect(item.name)}>
            {item.name}: ${item.price}
          </button>
        </li>
      ))}
    </ul>
  );
});

ItemList.displayName = 'ItemList';
