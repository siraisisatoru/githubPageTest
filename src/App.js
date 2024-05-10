import "./App.css";
import img from "./logo.svg";

function App() {
    return (
        <div className="App">
            {/* 方法1 */}
            {/* 圖片放 /public */}
            <img src={process.env.PUBLIC_URL + "/IMG_2147.JPG"} />
            {/* 方法2 */}
            {/* 圖片放 /src */}
            <img src={img} />
        </div>
    );
}

export default App;
