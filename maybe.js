'use strict'

import monad from './monad'
import functor from './functor'

const MaybeClass = val =>
    Object.assign(
        {},
        monad(val),
        functor(val)
    )

export const just = val => Object.assign({}, MaybeClass(val), {
    fmap: f => just(f(val)),
    fail: () => just(val)
})

export const nothing = () => Object.assign({}, MaybeClass(null), {
    bind: nothing,
    shift: nothing,
    fmap: nothing,
    fail: s => { throw s }
})

export const maybe = val => val != null ? just(val) : nothing()
