"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var CustomProgressIndicator_1 = require("aod-dependencies/ProgressIndicator/CustomProgressIndicator");
icons_1.initializeIcons();
var intervalDelay = 100;
var intervalIncrement = 0.01;
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1["default"].useState(0), percentComplete = _b[0], setPercentComplete = _b[1];
    react_1["default"].useEffect(function () {
        var id = setInterval(function () {
            setPercentComplete((intervalIncrement + percentComplete) % 1);
        }, intervalDelay);
        return function () {
            clearInterval(id);
        };
    });
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode })),
            react_1["default"].createElement(CustomProgressIndicator_1["default"], { label: "Example title", description: "Example description", title: "Example", 
                // <ProgressIndicatorDarkMode>
                darkMode: darkMode, 
                // </ProgressIndicatorDarkMode>
                percentComplete: percentComplete }))));
}
exports["default"] = App;
