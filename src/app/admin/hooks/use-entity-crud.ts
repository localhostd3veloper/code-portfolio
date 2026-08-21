'use client';

import { useEffect, useState } from 'react';

export function useEntityCrud<T>(endpoint: string, blank: T) {
  const [items, setItems] = useState<T[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then(setItems);
  }, [endpoint]);

  async function persist(next: T[]) {
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error);
      return false;
    }
    setItems(data);
    setStatus('Saved');
    return true;
  }

  async function save(item: T) {
    if (!items) return;
    const next =
      selectedIndex === null
        ? [...items, item]
        : items.map((existing, index) => (index === selectedIndex ? item : existing));
    const ok = await persist(next);
    if (ok) setSelectedIndex(selectedIndex === null ? next.length - 1 : selectedIndex);
  }

  async function remove() {
    if (!items || selectedIndex === null) return;
    const next = items.filter((_, index) => index !== selectedIndex);
    const ok = await persist(next);
    if (ok) setSelectedIndex(null);
  }

  const selected = selectedIndex === null ? blank : (items?.[selectedIndex] ?? blank);

  return { items, selected, selectedIndex, setSelectedIndex, save, remove, status };
}
