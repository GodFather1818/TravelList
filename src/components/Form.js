import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [selectNum, setSelectNum] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, selectNum, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);
    if (!description) return;

    setDescription("");
    setSelectNum(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip? </h3>
      <select
        name=""
        id=""
        value={selectNum}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectNum(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Item</button>
    </form>
  );
}
