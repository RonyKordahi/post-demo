import React, {useEffect, useState} from "react";

function App() {
    const [state, setState] = useState("");

    useEffect(() => {
        fetch("/home")
            .then(res => res.json())
            .then(data => setState(data))
    }, [])

    // useEffect(() => {
    //     fetch("/home", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Accept': 'application/json',
    //         },
    //         body: JSON.stringify({name: "Rony", coolDemo: true}) // double quotes here are NECESSARY
    //     })
    //         .then(res => res.json())
    //         .then(data => setState(data))
    // }, [])

    return (
        <>
            <h1>The server responded with:</h1>
            <h2 style={{fontWeight: "normal"}}>"{state.message}"</h2>
            {/* <form onSubmit={submitForm}>
                <input type="text" name="firstName" />
            </form> */}
        </>
    );
}

export default App;
