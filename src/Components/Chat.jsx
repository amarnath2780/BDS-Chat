import React from 'react';
import Messages from './Messages'
import Input from './Input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <div className="pro">
                <img src="https://images.pexels.com/photos/10669816/pexels-photo-10669816.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                <span>Rio</span>
                </div>
                <div className="chatIcons">

                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;
