"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertProvider = exports.AlertContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.AlertContext = (0, react_1.createContext)(null);
const AlertProvider = ({ children }) => {
    const alertDefaultData = {
        type: "",
        message: "",
    };
    const [alert, setAlert] = (0, react_1.useState)(alertDefaultData);
    return (0, jsx_runtime_1.jsx)(exports.AlertContext.Provider, { value: { alert, setAlert }, children: children });
};
exports.AlertProvider = AlertProvider;
