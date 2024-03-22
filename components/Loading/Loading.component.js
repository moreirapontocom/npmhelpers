"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Loading = (props) => {
    if (props.loading && props.parent === 'inline') {
        const color = props.color ? props.color : "text-primary";
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: `spinner-border spinner-border-sm me-2 ${color}`, role: "status", children: (0, jsx_runtime_1.jsx)("span", { className: "visually-hidden", children: "Loading..." }) }) });
    }
    else {
        return props.loading && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { style: { clear: 'both', width: '100%', textAlign: 'center' }, children: (0, jsx_runtime_1.jsx)("div", { className: "spinner-border text-primary", role: "status", children: (0, jsx_runtime_1.jsx)("span", { className: "visually-hidden", children: "Loading..." }) }) }) });
    }
};
exports.Loading = Loading;
exports.default = exports.Loading;
