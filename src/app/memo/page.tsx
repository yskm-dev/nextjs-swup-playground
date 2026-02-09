'use client';
import { useState } from 'react';
import styles from './page.module.scss';

type Item = {
  id: number;
  name: string;
  price: number;
};
const items: Item[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  price: i * 100,
}));

export default function MemoPage() {
  console.log('Page rendered');

  return (
    <ItemView>
      <ItemList items={items} />
    </ItemView>
  );
}

const ItemView = function ({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  console.log('ItemView rendered');
  return (
    <div>
      <h1 className={styles.title}>Memo Page</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {children}
    </div>
  );
};

const ItemList = function ({ items }: { items: Item[] }) {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}: ${item.price}
        </li>
      ))}
    </ul>
  );
};
