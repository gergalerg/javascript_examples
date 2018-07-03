const EMPTY = null;

const length = (node ,acc=0) => 
  node === EMPTY
  ? acc
  : length(node.rest, acc+1)


const copy = (node, head = null, tail = null) => {
  if (node === EMPTY) {
    return head;
  }
  else if (tail === null) {
    const { first, rest } = node;
    const newNode = { first, rest };
    return copy(rest, newNode, newNode);
  }
  else {
    const { first, rest } = node;
    const newNode = { first, rest };
    tail.rest = newNode;
    return copy(node.rest, head, newNode);
  }
}

const first = ({first, rest}) => first;
const rest = ({first, rest}) => rest;

const reverse = (node, delayed = EMPTY) =>
  node === EMPTY
    ? delayed
    : reverse(rest(node), { first: first(node), rest: delayed });

const mapWith = (fn, node, delayed = EMPTY) =>
  node === EMPTY
    ? reverse(delayed)
    : mapWith(fn, rest(node), { first: fn(first(node)), rest: delayed });

const at = (index, list) =>
  index === 0
    ? first(list)
    : at(index - 1, rest(list));
    
const set = (index, value, list, originalList = list) =>
  index === 0
    ? (list.first = value, originalList)
    : set(index - 1, value, rest(list), originalList)
    
const parentList = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY }}};
const childList = rest(parentList);

set(2, "three", parentList);
set(0, "two", childList);

module.exports = {
  mapWith,
  at,
  set,
  parentList,
  childList,
  copy,
  first,
  rest,
  length

}