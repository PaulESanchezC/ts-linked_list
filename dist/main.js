"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = __importDefault(require("./lib/linkedList"));
main();
function main() {
    linkedList();
}
function linkedList() {
    const linkedList = new linkedList_1.default();
    linkedList.enque(4);
    linkedList.enque(8);
    linkedList.enque(1);
    linkedList.enque(6);
    linkedList.enque(2);
    linkedList.enque(3);
    linkedList.enque(5);
    linkedList.enque(7);
    console.log("count of items in queueu: ", linkedList.count());
    let stop = false;
    while (!stop) {
        console.log(linkedList.dequeue(), linkedList.count(), linkedList.hasNext());
        stop = !linkedList.hasNext();
    }
    linkedList.clear();
}
