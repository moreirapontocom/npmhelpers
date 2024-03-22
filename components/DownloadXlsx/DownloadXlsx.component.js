"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BuildXlsx_component_1 = __importDefault(require("./BuildXlsx.component"));
const DownloadXlsx = ({ payload, filename, btnLabel, btnClass }) => {
    const startDownload = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, BuildXlsx_component_1.default)(payload).then((buffer) => {
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch((error) => {
            console.error(error);
        });
    });
    return (0, jsx_runtime_1.jsx)("button", { className: btnClass, onClick: startDownload, children: btnLabel && "Download File" });
};
exports.default = DownloadXlsx;
