'use strict'

import { typeclass, required } from './typeclass'

const monad = (val) =>
    typeclass('Monad', {
        bind: f => f(val),
        shift: m => m,
        fail: () => required,
        lift: () => val
    })

export default monad
