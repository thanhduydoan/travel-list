export default function Stats({ items }) {
    if (items.length === 0) return (
        <p className="stats">
            <em>Start adding some item to your package list 🚀</em>
        </p>
    );
    const numItems = items.length;
    const packed = items.filter(item => item.packed).length;
    const percentage = Math.round(packed / numItems * 100);
    return (
        <footer className="stats">
            <em>{percentage === 100 ? "You got every thing! Ready to go ✈️" : `🧳 You have ${numItems} items on your list, and you already packed ${packed} (${percentage}%)`}
            </em>
        </footer>
    );
}
