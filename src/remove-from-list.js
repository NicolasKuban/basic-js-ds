const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */





function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = null
  let i = 0
  let last
  while (l) {
    i += 1
    console.log("Step", i, "-", l.value)
    if (i > 10) {break}
    
    if (l.value === k) {
      console.log("need delete")
      console.log("===До", l, l.next)
      if (l.next === null) {
        console.log(result)
        console.log(last)
        last.next = null
        console.log(last)
        break
      }
      l = l.next
      if (l !== null) {
        console.log("===После", l, l.next )
      } 
      // else {
      //   last = null
      //   break
      // }
      continue
    }
    // console.log(result.next)
    if (result === null) {
      result = l
      console.log("first element", result)
    //   console.log("first", result)
      last = l
      console.log("last", last)
    } else {
      console.log("last===До", last, last.next)
      last.next = l
      last = last.next
      console.log("last===После", last, last.next)
      console.log("----------------")
    }
    console.log("===До", l, l.next)
    l = l.next
    if (l !== null) {
      console.log("===После", l, l.next )
    }
    
    console.log("==========")
      

  //   else {
  //     console.log("===Last до", last, l)
  //     last.next = l
  //     last = last.next
  //     console.log("===Last после", last, l)
  //     console.log("===До", l, l.next)
  //     l = l.next
  //     if (l !== null) {
  //       console.log("===После", l, l.next )
  //     }
  //     console.log("decrease", l)
  //     console.log("----------")
  //   //   last = last.next
  //   //   console.log("last", last)
  //   //   console.log("===До", l, l.next)
  //   //   l = l.next
  //   //   console.log("===После", l, l.next)
  //   //   console.log("decrease", l)
  //   //   console.log("----------")
  // }
    

  }
  return result
}


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}




function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

a = convertArrayToList([3, 1, 2, 3])
b = removeKFromList(a, 3)
// console.log(b)

console.log("=========")
i = 0
while (b) {
  console.log("Step", i, "-", b.value)
  b = b.next
  i++
  if (i>10) {break}
}
console.log("=========")

module.exports = {
  removeKFromList
};
