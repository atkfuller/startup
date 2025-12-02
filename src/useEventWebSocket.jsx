import { useEffect} from 'react';

export default function useEventWebSocket(){
    useEffect(()=>{
        const ws= new WebSocket("ws://ultimatecalendar.click:4000");
        ws.onopen=()=>{
            ws.send(JSON.stringify({
                type:"AUTH", 
                token:localStorage.getItem("authToken")
            }));
        };
        ws.onmessage = (msg) => {
            const data = JSON.parse(msg.data);
            if (data.type === "EVENT_REMINDER") {
                alert(`Reminder: ${data.event.title} at ${data.event.time}`);
            }
            };
        return()=>ws.close();
    },[]);
}