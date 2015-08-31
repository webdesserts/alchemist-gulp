module.exports = {
  warn: function warn (err) {
    console.warn(err.message)
    this.emit('end')
  }
}
