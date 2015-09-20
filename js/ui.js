'use strict'

var $ = document.querySelector.bind(document)

var Ui = {
  assemble: $('.js-assemble'),
  runStop: $('.js-run-stop'),
  step: $('.js-step'),
  reset: $('.js-reset'),
  code: $('.js-code'),
  registers: [
    $('.js-r0'),
    $('.js-r1'),
    $('.js-r2'),
    $('.js-r3')
  ],
  ip: $('.js-ip'),
  sp: $('.js-sp'),
  cBit: $('.js-c-bit'),
  zBit: $('.js-z-bit'),
  ramCells: document.querySelectorAll('.js-ram-cells td')
}

module.exports = Ui
