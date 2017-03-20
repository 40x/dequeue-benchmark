"use strict";

class CircularDequeue {
    constructor() {
	    // pseudo realistic 2^x value
		this._size = 1024;
		this._length = 0;
		this._front = 0;
		this._data = [];
	}

	push (item) {
		var length = this._length;
		var i = (this._front + length) & (this._size - 1);
		this._data[i] = item;
		this._length = length + 1;

		return length + 1;
	};

	pop () {
		var length = this._length;
		var i = (this._front + length - 1) & (this._size - 1);
		var ret = this._data[i];
		this._data[i] = undefined;
		this._length = length - 1;

		return ret;
	};

	shift () {
		var front = this._front;
		var ret = this._data[front];
		this._data[front] = undefined;
		this._front = (front + 1) & (this._size - 1);
		this._length = this._length - 1;

		return ret;
	};

	unshift (item) {
		var size = this._size;
		var i = (((( this._front - 1 ) & ( size - 1) ) ^ size ) - size );
		this._data[i] = item;
		this._length = this._length + 1;
		this._front = i;

		return this._length;
	};
}

module.exports = CircularDequeue;
