import './App.css';
import { MdSend, MdDelete, MdUpdate, MdEdit } from 'react-icons/md'
import { useEffect, useState } from 'react';
function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState(['asd']);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, task])
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
  return (
    <div className="app">
      <div className="todo__container">
        <h1 className='todo__heading'>Todo App</h1>
        <form className="input__container" onSubmit={handleSubmit}>
          <input type="text" placeholder='add todo...' className='todo__input' value={task} onChange={(e) => setTask(e.target.value)} />
          <input className='search__btn' type="submit" value={"submit"} />
        </form>
        <div className="tasks">
          {!items[0] ?
            <h2>currently no task..</h2>
            :
            items.map((item, index) => (
              <div className="task" key={index}>
                {item}
                <div className='icons'>
                 <span onClick={()=>{handleEdit(index)}}><MdEdit /></span>
                 <span onClick={()=>{handleUpdate(index)}}><MdUpdate /></span>
                 <span onClick={()=>{handleDelete(index)}}><MdDelete /></span>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
