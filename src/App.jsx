import './App.css';
import { useState } from 'react';
import Incomplete from './components/Incomplete';
import Complete from './components/Complete';

function App() {
  const [task, setTask] = useState({ id: '', title: '', status: 'incomplete' });
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncomplete([...incomplete, { id: Math.random(), title: task.title, status: "incomplete" }]);
    setTask({ title: '' });
  }

  const handleEdit = (id) => {
    console.log(id);
    incomplete.filter((item) => {
      if (item.id === id) {
        setTask(item)
      }
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    let temp = [...incomplete];
    let indexNumber = temp.findIndex((item) => item.id === task.id);
    temp[indexNumber] = task;
    setIncomplete([...temp]);
    setTask({id:'',title:'',status:''})
  }

  const handleDelete = (id) => {
    let temp = [...incomplete];
    const incompleteList = temp.filter((item) => item.id !== id)
    setIncomplete(incompleteList);
  }
  const handleDeleteComplete = (id) => {
    let temp = [...complete];
    const completeList = temp.filter((item) => item.id !== id)
    setComplete(completeList);
  }
  const handleCheckBox = (id) => {
    let temp = [...incomplete];
    const incompleteList = temp.filter((item) => item.id !== id)
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
        <div className="todo__head">
          <h1 className='todo__heading'>Todo App</h1>
          <form className="input__container" onSubmit={task.id ? handleUpdate : handleSubmit}>
            <input type="text" placeholder='add todo...' className='todo__input' value={task.title} onChange={(e) => setTask({ id: task.id, title: e.target.value, status: task.status })} />
            <input className='search__btn' type="submit" value={task.id ? "Update" : "Add"} />
          </form>
        </div>
        <div className="tasks" >
          <div className="incomplete">
            <h4>All Tasks: </h4>
            {!incomplete[0] ?
              <h6>Currently No Task Available..</h6>
              :
              incomplete.map((item, index) => (
                <Incomplete key={item.id} item={item} btns={{ handleCheckBox, handleEdit, handleDelete, handleUpdate }} />
              ))
            }
          </div>

          <div className='complete'>
            <h4>Completed Tasks: </h4>
            {complete[0] ?
              complete.map((item, index) => (
                <Complete item={item} index={index} btns={{ handleReturn, handleDeleteComplete }} />
              ))
              :
              <h6>No Completed Task Yet.</h6>
            }
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
