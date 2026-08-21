'use client';

interface EntityListProps<T> {
  items: T[];
  selectedIndex: number | null;
  onSelect: (index: number | null) => void;
  getLabel: (item: T) => string;
}

export default function EntityList<T>({
  items,
  selectedIndex,
  onSelect,
  getLabel,
}: EntityListProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`border-border border px-3 py-2 text-left text-sm ${
          selectedIndex === null ? 'bg-list-active' : 'bg-sidebar'
        }`}
      >
        + Add
      </button>
      {items.map((item, index) => (
        <button
          type="button"
          key={index}
          onClick={() => onSelect(index)}
          className={`border-border border px-3 py-2 text-left text-sm ${
            selectedIndex === index ? 'bg-list-active' : 'bg-sidebar'
          }`}
        >
          {getLabel(item) || 'Untitled'}
        </button>
      ))}
    </div>
  );
}
