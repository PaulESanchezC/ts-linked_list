import LinkedList from "./lib/linkedList";
main();
function main(): void {
  linkedList();
}

function linkedList(): void {
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
    console.log(linkedList.dequeue(), linkedList.count(), linkedList.hasNext());
    stop = !linkedList.hasNext();
  }
  linkedList.clear();
}

export {};
