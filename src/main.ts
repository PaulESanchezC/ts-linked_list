import { BinaryTree, TreeComparer } from "./lib/binaryTree";
import { Func2 } from "./lib/delegate";
import LinkedList from "./lib/linkedList";

main();
function main(): void {
  linkedList();
  delegates();
  binaryTree();
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

type Person = {
  id: string;
  name: string;
  age: number;
};
function binaryTree(): void {
  console.log("binaryTree : start");
  const comparer: TreeComparer<Person> = (obj: Person) => {
    return obj.age;
  };

  const populationTree = new BinaryTree<Person>(comparer);
  populationTree.add({ id: "19178199", name: "Paul", age: 10 });
  populationTree.add({ id: "19178200", name: "Voldemort", age: 7 });
  populationTree.add({ id: "19178201", name: "Prince", age: 8 });
  populationTree.add({ id: "19178202", name: "Michelle", age: 9 });
  populationTree.add({ id: "19178203", name: "Veronique", age: 12 });
  populationTree.add({ id: "19178203", name: "Ninja", age: 11 });

  console.log(JSON.stringify(populationTree, null, 4));
  console.log("binaryTree : end");
}
