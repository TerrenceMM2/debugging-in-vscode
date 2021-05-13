import { useState } from "react";

function App() {
    let [count, setCount] = useState(0);
    const [name, setName] = useState("{Name not set}");
    const [showImage, setImage] = useState(false);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleFormChange = (e) => {
        setName(e.target.value);
    };

    const handleImageToggle = () => {
        setImage(!showImage);
    };

    return (
        <div className="container">
            <h1 className="my-5 text-center">Debugging a React App</h1>
            <div className="row justify-content-center my-5">
                <div className="col-3">
                    <div className="input-group mb-3">
                        <input
                            onChange={handleFormChange}
                            type="text"
                            className="form-control"
                            placeholder="Name"></input>
                    </div>
                </div>
                <div className="col-3">{name}</div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-2">
                    <button
                        type="button"
                        onClick={handleDecrement}
                        className="btn btn-danger">
                        Decrement
                    </button>
                </div>
                <div className="col-2">
                    <button
                        type="button"
                        onClick={handleIncrement}
                        className="btn btn-primary">
                        Increment
                    </button>
                </div>
                <div className="col-3">{count}</div>
            </div>
            <div className="row my-5">
                <div className="col-3"></div>
                <div className="col-3">
                    <button
                        type="button"
                        onClick={handleImageToggle}
                        className="btn btn-info">
                        {showImage ? "Hide Image" : "Show Image"}
                    </button>
                </div>
                {showImage ? (
                    <div className="col-6">
                        <img
                            src="https://picsum.photos/300/300"
                            alt="random"></img>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default App;
