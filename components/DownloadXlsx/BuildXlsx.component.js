"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_xlsx_1 = __importDefault(require("node-xlsx"));
// This function is used to build a generic xlsx file from the data
// received from the API. The data is an array of objects.
// The object should be a single level object
const buildXlsx = (payload) => {
    let headerRow = [];
    function getSheets(data) {
        const sheets = [];
        const newSheet = [];
        headerRow = [...headerRow, ...Object.keys(payload[0])];
        newSheet.push(headerRow);
        payload.forEach((row) => {
            const newRow = [];
            headerRow.forEach((header) => {
                newRow.push(row[header]);
            });
            newSheet.push(newRow);
        });
        sheets.push({ name: "", data: newSheet, options: {} });
        return sheets;
    }
    try {
        return new Promise((resolve, _) => {
            const buffer = node_xlsx_1.default.build(getSheets(payload));
            resolve(buffer);
        });
    }
    catch (error) {
        throw new Error("Error building xlsx file");
    }
};
exports.default = buildXlsx;
