import './MessageBox.css'
const MessageBox = (prop) =>{
    return(
        <div className="message-box">
            <label>
                {prop.message}
            </label>
            
        </div>
    );
}

export default MessageBox;