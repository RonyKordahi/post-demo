import {useState, useEffect} from "react";

const Get = () => {

    const [state, setState] = useState("");

    useEffect(() => {
        fetch("/home")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(data.message)
            })
    }, [])

    return (
        <>
            <h1>The server responded with:</h1>
            <h2>{state}</h2>
        </>
    )
}

export default Get;
