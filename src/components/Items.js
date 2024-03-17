import React from "react";

export default function Items({ item, onDeleteItem, onToggleItem }) {

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.selectNum} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
