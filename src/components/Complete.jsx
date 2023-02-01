import React from 'react'
import { MdKeyboardReturn } from 'react-icons/md'

function Complete({item,index,btns}) {
    return (
        <div className="task" key={index}>
            <span className='complete__status'>Completed</span>
            {item.title}
            <div className='icons'>
                <MdKeyboardReturn onClick={() => btns.handleReturn(item.id)} style={{ cursor: 'pointer', color: 'orange', fontSize: '20px' }} />
            </div>
        </div>
    )
}

export default Complete