import "./App.css";
import memories from "../src/memories";

import Home from "./Components/Home";

function App() {
  <Home />;
  return memories.map((memo) => {
    return (
      <div>
        <h3>{memo.memoryDate}</h3>
        <ul className="timeline">
          <li>
            <div className="timelineimage">
              <img
                className="rounded-circle img-fluclassName"
                src="assets/1.jpg"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    );
  });
}

export default App;
