import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomProgressIndicator from "aod-dependencies/ProgressIndicator/CustomProgressIndicator";

initializeIcons();

const intervalDelay = 100;
const intervalIncrement = 0.01;

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [percentComplete, setPercentComplete] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setPercentComplete((intervalIncrement + percentComplete) % 1);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
        </div>
        <CustomProgressIndicator
          label="Example title"
          description="Example description"
          title="Example"
          // <ProgressIndicatorDarkMode>
          darkMode={darkMode}
          // </ProgressIndicatorDarkMode>
          percentComplete={percentComplete}
        />
        <CustomProgressIndicator
          label="Example title 2"
          description="Example description 2"
          title="Example"
          // <ProgressIndicatorDarkMode>
          darkMode={darkMode}
          // </ProgressIndicatorDarkMode>
          // percentComplete={percentComplete}
        />
      </Wrapper>
    </div>
  );
}

export default App;
