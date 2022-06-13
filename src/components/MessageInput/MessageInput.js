import MessageButton from '../MessageButton/MessageButton';
import './MessageInput.css'
const MessageInput = (prop) =>{
    return(
        <div className="message-input-box">
            <input type="text" id='message-input-text' onKeyUp={prop.sendHandler}/>
        </div>
    );
}

export default MessageInput;