import {useState} from "react";

const Post = () => {

    const [state, setState] = useState("");
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/home", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify({userInput}) 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(data.message);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    value={userInput} 
                    type="test" 
                    onChange={(e) => {
                        setUserInput(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>

            <h1>The server responded with:</h1>
            <h2>{state}</h2>
        </>
    )
}

export default Post;
