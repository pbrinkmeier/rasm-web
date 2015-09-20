'use strict'

var assemble = require('rasm-asm')
var prettyByte = require('./pretty-byte.js')
var Vm = require('rasm-vm')

var Ui = require('./ui.js')

var runtime = new Vm()
window.runtime = runtime

runtime.events.on('updateInstructionPointer', function (value) {
  Ui.ip.innerHTML = prettyByte(value)
})

runtime.events.on('updateStackPointer', function (value) {
  Ui.sp.innerHTML = prettyByte(value)
})

runtime.events.on('updateCBit', function (value) {
  Ui.cBit.innerHTML = String(value)
})

runtime.events.on('updateZBit', function (value) {
  Ui.zBit.innerHTML = String(value)
})

for (var i = 0; i < 4; i++) {
  runtime.events.on('updateRegister:' + String(i), function (register, value) {
    Ui.registers[register].innerHTML = prettyByte(value)
  })
}

for (var i = 0; i < 256; i++) {
  runtime.events.on('updateRam:' + String(i), function (address, value) {
    Ui.ramCells[address].innerHTML = prettyByte(value)
  })
}

runtime.reset()

Ui.assemble.addEventListener('click', function () {
  runtime.reset()

  assemble(Ui.code.value)
  .forEach(function (value, address) {
    runtime.writeRam(address, value)
  })
})

Ui.step.addEventListener('click', function () {
  runtime.step()
})
