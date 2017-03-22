'use strict'

import { unimplemented } from './utils'

const monad = (val) => ({
    bind: f => f(val),
    shift: m => m,
    fail: () => unimplemented('monad#fail'),
    lift: () => val
})

export default monad
