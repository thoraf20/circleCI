"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var MY_PORT = process.env.PORT || 4000;
index_1.default.listen(MY_PORT);
console.log("\uD83D\uDE80 Server ready at " + MY_PORT);
