'use strict'

import { typeclass } from './typeclass'

const applicative = f =>
    typeclass('Applicative', {
        pure: val => f(val),
        apply: val => val.fmap(f)
    })

export default applicative
