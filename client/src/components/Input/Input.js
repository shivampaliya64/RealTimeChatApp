import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './Input.css';

const Input = ({room}) =>(
    <form className="form">
        <input
            className="input" 
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(event)=>setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter'? sendMessage(event):null}
        />
        <button>

        </button>
    </form>
)

export default Input;