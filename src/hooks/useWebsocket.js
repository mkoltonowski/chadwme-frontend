export default class myWebSocket{

    constructor(url){
        this._url = url;
        this.client = null;
        this.isConnected = false;
        this.reconnect = true;
    }

    Connect(){
        if(this.isConnected){
            return;
        }
        this.client = new WebSocket(this._url);
    }

    Disconnect(){
        this.client.close();
        this.reconnect = false;
    }

    start(){
        
        try{ 
            this.Connect(); 
            this.isConnected = true;
        }
        catch(e){ 
            console.error('::could not connect to WS::');
            console.error(`::error: ${e}`) ;

            return;
        }

        

        this.client.onclose = () =>{
            
            this.isConnected = false;
            
            if(!this.reconnect){
                console.log('disconnected by user')
                return;
            }

            console.log('Server disconnected - reconnecting');

            setTimeout(this.Connect(), 500);
        }

    }

}