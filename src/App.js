import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

function App() {

  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')))
    } else {
      return [];
    }
  }

  const [name, setname] = useState('')
  const [list, setlist] = useState(getLocalStorage())
  const [isEditing, setisEditing] = useState(false);
  const [editId, seteditId] = useState(null)
console.log(list);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('enter name plzz')
    } else if (name && isEditing) {
      setlist(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      })
      );
      setname('');
      seteditId(null);
      setisEditing(false)
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setlist([...list, newItem]);
      setname('')
    }

  };
console.log(list);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);


  const removeItem = (id) => {
    setlist(list.filter((item) => item.id !== id));
  }
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    seteditId(id);
    setisEditing(true)
    setname(editItem.title)
  }
  return (
    <>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <button type='submit'>{isEditing ? 'Submit' : 'Enter'}</button>
      </form>
      <List items={list} removeItem={removeItem} editItem={editItem} />
    </>
  );
}

export default App;
