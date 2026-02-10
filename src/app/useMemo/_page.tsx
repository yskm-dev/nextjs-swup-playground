'use client';
import { memo, useMemo, useState } from 'react';

type Item = {
  id: number;
  name: string;
  price: number;
};

const ITEMS: Item[] = [
  { id: 1, name: 'Apple', price: 300 },
  { id: 2, name: 'Orange', price: 250 },
  // ...
];

export default function Page() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [useMemoEnabled, setUseMemoEnabled] = useState(true);

  const filteredItemsWithMemo = useMemo(() => {
    console.log('Filtering items... (with useMemo)');
    return ITEMS.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [keyword]);

  const filteredItems = useMemoEnabled
    ? filteredItemsWithMemo
    : (() => {
        console.log('Filtering items... (without useMemo)');
        return ITEMS.filter((item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase())
        );
      })();

  return (
    <div>
      <label htmlFor="useMemoEnabled">
        <input
          type="checkbox"
          id="useMemoEnabled"
          name="useMemoEnabled"
          checked={useMemoEnabled}
          onChange={(e) => setUseMemoEnabled(e.target.checked)}
        />
        useMemo を使う
      </label>

      <Counter setCount={setCount} />
      <div>Count: {count}</div>

      <h1>Items Filter</h1>
      <label>
        Filter by name:
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>

      <ItemList items={filteredItems} />
    </div>
  );
}

const Counter = ({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => <button onClick={() => setCount((c) => c + 1)}>Increment</button>;

const ItemList = memo(function ItemList({ items }: { items: Item[] }) {
  console.log('ItemList Rendered');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
});
ItemList.displayName = 'ItemList';
