const Node = require('./node');

class LinkedList {

  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    if (this._head == null) {
      this._head = new Node(data, null, null);
      this._tail = this._head;
    } else {
      var currentNode = null;
      currentNode = new Node(data, this._tail, null);
      this._tail.next = currentNode;
      this._tail = currentNode;
    }
    this.length = this.length + 1;
    return this;
  }

  head() {
    if (this.length == 0) {
      return null;
    }

    return this._head.data;
  }

  tail() {
    if (this.length == 0) {
      return null;
    }

    return this._tail.data;
  }

  at(index) {
    if (index >= this.length) {
      return null;
    }
    var result = this._head;

    for (var count = 0; count < +index; count++) {
      result = result.next;
    }
    return result.data;
  }

  insertAt(index, data) {
    if (index > this.length) {
      return this;
    }
    if (index == this.length) {
      this.append(data);
    }
    var o1 = this._head;

    for (var count = 0; count < index - 1; count++) {
      o1 = o1.next;

    }
    var o2 = o1.next;
    var currentNode = null;
    currentNode = new Node(data, o1, o2);
    o1.next = currentNode;
    if (o2 != null) {
      o2.prev = currentNode;
    }
    this.length = this.length + 1;
    return this;
  }

  isEmpty() {
    return this.length == 0;

  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    if (index > this.length) {
      return this;
    }

    if (index == 0) {
      var o2 = this._head.next;
      if (o2 != null) {
        this._head = o2;
        this._head.prev = null;
      }

      this.length = this.length - 1;
      return this;
    }
    var o1 = this._head;

    for (var count = 0; count < index - 1; count++) {
      o1 = o1.next;

    }
    var o2 = o1.next;
    var o3 = o2.next;

    o1.next = o3;
    if (o3 != null) {
      o3.prev = o1;
    }
    this.length = this.length - 1;
    return this;
  }

  reverse() {
    var o1 = this._head;
    var oldHead = this._head;
    var oldTail = this._tail;

    while (o1 != null) {
      var pre = o1.prev;
      var next = o1.next;
      o1.prev = next;
      o1.next = pre;
      o1 = next;
    }
    this._head = oldTail;
    this._tail = oldHead;
    return this;
  }
  indexOf(data) {
    var index = 0;
    var o1 = this._head;
    while (o1 != null) {

      if (data === o1.data) {
        return index;
      }
      o1 = o1.next;
      index++;
    }
    return -1;
  }

}

module.exports = LinkedList;
