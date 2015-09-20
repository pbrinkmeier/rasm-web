'use strict'

module.exports = function prettyByte (value) {
  return ('0' + value.toString(16)).slice(-2)
}
