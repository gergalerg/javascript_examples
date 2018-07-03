const fs = require('fs');
const cache = {};
const FILE= 'alice.txt';

function consistentRead(filename) {
	if (cache[filename]) {
		return cache[filename];
	} else {
		cache[filename] = fs.readFileSync(filename, 'utf8');
		return cache[filename];
	}
}

function consistentReadAsync(filename, cb) {
	if (cache[filename]) {
		process.nextTick( ()=> cb(cache[filename]));
	} else {
		fs.readFile(filename, 'utf8', (err, data) => {
			cache[filename] = data;
			cb(data);
		});
	}
}

function createFileReader() {
	return {
		onDataReady (filename) { return consistentReadAsync(filename,(data)=> console.log('Async data: ' + data))}
	};
}

var reader1 = createFileReader();
var reader2 = createFileReader();
reader1.onDataReady(FILE);
reader2.onDataReady(FILE);
