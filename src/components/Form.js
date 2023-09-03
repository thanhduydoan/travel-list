import { useState } from "react";

export default function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(5);
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { quantity, description, id: Date.now(), packed: false };
        onAddItem(newItem);
        setQuantity(1);
        setDescription('');
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip ?</h3>
            <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    );
}