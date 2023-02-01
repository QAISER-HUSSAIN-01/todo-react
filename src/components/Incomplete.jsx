import React from 'react'
import { MdSend, MdDelete, MdUpdate, MdEdit } from 'react-icons/md'

function Incomplete({item,index,btns}) {
    const [check, setCheck] = React.useState(false);
    const {id,title} = item;

    const handleChange = () => {
        setCheck(prev => !prev);
        btns.handleCheckBox(id)
        console.log(check)
    }
    return (
        <div className="task">
            {title}
            {check}
            <div className='icons'>
                <input type="checkbox" checked={check} onChange={handleChange} />
                <span className='icon' onClick={() => { btns.handleEdit(id) }}><MdEdit /></span>
                {/* <span className='icon' onClick={() => { btns.handleUpdate(id) }}><MdUpdate /></span> */}
                <span className='icon' onClick={() => { btns.handleDelete(id) }}><MdDelete /></span>
            </div>
        </div>
    )
}

export default Incomplete;