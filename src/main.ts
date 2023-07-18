import { Func2 } from "./lib/delegate";
import LinkedList from "./lib/linkedList";

main();
function main(): void {
  linkedList();
  delegates();
}

function linkedList(): void {
  console.log("linkedList : start");
  const linkedList = new LinkedList<number>();
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
    console.log(linkedList.dequeue(), linkedList.count());
    stop = !linkedList.hasNext();
  }
  linkedList.clear();
  console.log("linkedList : end");
}

function delegates(): void {
  console.log("delegates : start");
  let delegate: Func2<string, number, boolean> = (name: string, age: number) => {
    console.log(`name: ${name}, age: ${age}`);
    return age >= 18;
  };

  console.log(delegate("Paul", 36));
  console.log("delegates : end");
}
