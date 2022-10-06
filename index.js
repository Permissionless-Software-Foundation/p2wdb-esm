/*
  An npm JavaScript library for front end web apps. Implements a minimal
  Bitcoin Cash wallet.
*/

/* eslint-disable no-async-promise-executor */

'use strict'

import Read from './lib/read.js'
import Write from './lib/write.js'
import Pin from './lib/pin.js'

export default { Read, Write, Pin }
