import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Get from "./Get";
import Post from "./Post";

const App = () => {

    return (
        <Router>

            <div>
                <h1><Link to="/">Get</Link></h1>
                <h1><Link to="/post">Post</Link></h1>
            </div>

            <Routes>
                
                <Route path="/" element={<Get />} />

                <Route path="/post" element={<Post />} />

            </Routes>
        </Router>
    )
}

export default App;
