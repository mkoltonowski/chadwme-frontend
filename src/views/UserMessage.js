import MessageBox from '../components/MessageBox/MessageBox';
import MessageInput from '../components/MessageInput/MessageInput';
import { useEffect, useState,useRef } from 'react';
import './UserMessage.css';

/**
 * User Message View:
 * 
 * Used for receiving and sending
 * messages between users,
 * 
 * @author mKolt
 * @param {*} prop 
 * @returns 
 */
const  UserMessage = (prop)=>{

    /**
     * Chat State
     */
    const [chat, setChat] = useState({
        messages: [],
        quantity: 0
    });

    /**
     * Websocket Handler
     */

    const ws = useRef(null);
    useEffect(()=>{
        ws.current = new WebSocket("ws://localhost:3001/websockets");
    
        ws.current.onopen = (event) => {
            console.log(`::Connected to WebSocket::`);
        };

        /**
         * Get new messages
         * @param {*} event 
         */
        ws.current.onmessage = (event)=>{
            
            const newMessage = JSON.parse(event.data)
            setChat(prevState=>({
                messages: [...prevState.messages,newMessage.messageContent] ,
                quantity: prevState.quantity +1
            }));

        } 
    },[])

    /**
     * Sending Message to Backend
     * @param {string} message 
     */
    const __sendHandler = (event) =>{

        const message = {
            messageContent: event.target.value,
        }
        

        if(event.key === 'Enter' && message !== ""){
            ws.current.send(JSON.stringify(message))
            event.target.value = '';
        }
    }

    return(
        <div id="UserMessage-page">
            {
                chat.messages.map((elem, index)=>{
                    return(
                        <MessageBox key={index} message={elem}/>
                    );
                })
            }


           <MessageInput sendHandler={__sendHandler}/>
        </div>
    )
}

export default UserMessage;