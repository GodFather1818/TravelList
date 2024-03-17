import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some Items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackedItems / numItems) * 100 * 10) / 10;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>💼 You got everything! Ready to go☁️🛩️ </em>
      ) : (
        <em>
          💼 You have {numItems} itmes in your List and you have already packed{" "}
          {numPackedItems} (
          {(numItems && numPackedItems) === 0 ? 0 : percentage} %)
        </em>
      )}
      {/* 💼 You have {numItems} itmes in your List and you have already packed { numPackedItems}  ({((numItems) && (numPackedItems)) === 0? 0 : percentage} %) */}
    </footer>
  );
}
