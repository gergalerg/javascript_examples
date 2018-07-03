
const fibIter = () => {
	let previous  = 0, current = 1;

	return () => {
		const value = current;


		console.log([previous, current] = [current, current+previous]);
		return {done: false, value};
	};
};

const fib = fibIter();

/*
let i=0;
while (i++ < 10) {
	console.log(fib().value);
}
*/
const NumberIterator = (number=0) => 
	()=> ({done: false, value: number++})

const mapIteratorWith = (fn) => 
	() => {
		const {done,value} = iter();

		return ( {done, value: done ? undefined :fn(value)});
	}

const iter = NumberIterator(1);
const squares = mapIteratorWith( (x)=> x*x,iter);

console.log(squares().value);
console.log(squares().value);
console.log(squares().value);

