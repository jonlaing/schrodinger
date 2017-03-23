'use strict'

import { typeclass, required } from './typeclass'

const monoid = () =>
    typeclass('Monoid', {
        mempty: required,
        mappend: required,
        mconcat: required,
    })

export default monoid
