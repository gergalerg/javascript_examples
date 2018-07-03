
const Queue = () => {
	let array = [],
	head = 0,tail = -1;

	return {
		pushTail: (val) => array[++tail] = val,
		print: () => console.log(array),
		pullHead: () => {
			if (tail >= head) {
			const value = array[head];

			array[head] = undefined;
			++head;
			return value;
			}
		},
		isEmpty: () => tail < head
	}
}

const queue = Queue();

console.log(queue.isEmpty());
queue.pushTail('hello');
queue.pushTail('nice');
queue.pushTail('Allonge');
queue.print();
queue.pullHead();
console.log(queue.isEmpty());
queue.print();