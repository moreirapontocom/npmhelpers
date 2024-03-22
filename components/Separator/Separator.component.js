"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Separator = (props) => {
    const { size } = props;
    return (0, jsx_runtime_1.jsx)("div", { style: { width: '100%', height: `${size || 1}px` } });
};
exports.default = Separator;
