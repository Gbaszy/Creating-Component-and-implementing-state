import { useEffect, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(new Date());


    useEffect(() =>{
        const interval = setInterval(() => {
            setTimer(new Date())
    }, 1000)
    return () => {
        console.log("Cleanup Function");
        clearInterval(interval);
    }
}, [])

return(
    <div>
        <h5>Time: {timer.toLocaleTimeString()}</h5>
    </div>
    )
}
export default Timer;