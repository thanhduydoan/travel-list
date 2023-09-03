import { useState } from "react";
import Stats from "./Stats";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  function deleleItem(id) {
    setItems(items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirm = window.confirm('Are you sure you want to clear the list')
    if (confirm) setItems([])
  }
  return <div className="app">
    <Logo />
    <Form onAddItem={handleAddItem} />
    <PackingList items={items} onDeleteItem={deleleItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
    <Stats items={items} />
  </div>
}


