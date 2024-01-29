// Streams

const { Readable, Writable } = require('stream')

// Readable
const input = new Readable({
    read() {
        this.push('Hello')
        this.push('World')
        this.push(null)
    }
})

// Writable
const output = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    }
})

input.pipe(output)