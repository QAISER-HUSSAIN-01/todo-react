import './App.css';
import { useState } from 'react';
import Incomplete from './components/Incomplete';
import { MdKeyboardReturn } from 'react-icons/md';
function App() {
  const [task, setTask] = useState({ title: '', status: 'incomplete' });
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncomplete([...incomplete, { id: Math.random(), title: task.title, status: "incomplete" }]);
    setTask({ title: '' });
  }

  const handleEdit = (i) => {
    console.log(i);
  }

  const handleUpdate = (i) => {
    console.log(i);
  }
  
  const handleDelete = (i) => {
    console.log(i);
  }

  const handleCheckBox = (id) => {
    let temp = [...incomplete];

    const incompleteList = temp.filter((item) => item.id !== id)
    // const completedItem = temp.filter((item) => item.id === id)
    temp.filter((item) => {
      if (item.id === id) {
        return setComplete([...complete, { id: item.id, title: item.title, status: "Completed" }])
      }
    })
    setIncomplete(incompleteList);
    // setComplete([...complete, ...completedItem])
  }

  const handleReturn = (id) => {
    let temp = [...complete];
    const completeList = temp.filter((item) => item.id !== id);
    const result = temp.filter((item) => item.id === id);
    setComplete(completeList);
    setIncomplete([...incomplete, ...result])
  }

  return (
    <div className="app">
      <div className="todo__container">
        <h1 className='todo__heading'>Todo App</h1>
        <form className="input__container" onSubmit={handleSubmit}>
          <input type="text" placeholder='add todo...' className='todo__input' value={task.title} onChange={(e) => setTask({ title: e.target.value })} />
          <input className='search__btn' type="submit" value={"submit"} />
        </form>
        <div className="tasks">
          <div className="incomplete">
            {!incomplete[0] ?
              <p>currently no task available..</p>
              :
              incomplete.map((item, index) => (
                <Incomplete key={item.id} item={item} btns={{ handleCheckBox, handleEdit, handleDelete, handleUpdate }} />
              ))
            }
          </div>
          {complete[0] ?
            <div className='complete'>
              {
                complete.map((item, index) => (
                  <div className="task" key={index}>
                    {item.title}
                    <div className='icons'>
                      <MdKeyboardReturn onClick={() => handleReturn(item.id)} style={{ cursor: 'pointer', color: 'orange' }} />
                      <div className="status">{item.status}</div>
                    </div>
                  </div>
                ))
              }
            </div>
            :
            null
          }

        </div>
      </div>
    </div>
  );
}

export default App;
