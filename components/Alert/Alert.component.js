"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Alert.component.scss");
function Alert(props) {
    const [, setAlert] = (0, react_1.useState)({ type: '', message: '' });
    (0, react_1.useEffect)(() => {
        setAlert(props.alert);
        setTimeout(() => {
            setAlert({ type: '', message: '' });
            props.alert.type = '';
        }, 5000);
    }, [props.alert, props.alert.type, props.alert.message]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.alert.type && props.alert.type !== "" && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `echem-alert alert alert-dismissible shadow-sm fade show alert-float alert-${props.alert.type}`, role: "alert", children: [(0, jsx_runtime_1.jsxs)("strong", { children: ["OI 2", (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: props.alert.message } })] }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "btn-close", onClick: () => {
                            setAlert({ type: '', message: '' });
                            props.alert.type = '';
                        } })] }) }) });
}
exports.default = Alert;
