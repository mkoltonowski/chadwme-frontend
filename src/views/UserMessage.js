import MessageBox from '../components/MessageBox/MessageBox';
import MessageInput from '../components/MessageInput/MessageInput';
import { useEffect, useState,useRef } from 'react';
import myWebSocket from '../hooks/useWebsocket';
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

    const socket = useRef(null);

    /**
     * Websocket Handler
     */
    useEffect(()=>{

        socket.current = new myWebSocket("ws://localhost:3001/websockets");
        socket.current.start();


        /**
         * Get new messages
         * @param {*} event 
         */
         socket.current.client.onmessage = (event)=>{
            
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
            socket.current.client.send(JSON.stringify(message))
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