'use strict'

import monad from './monad'
import functor from './functor'

const EitherClass = val =>
    Object.assign(
        {},
        monad(val),
        functor(val)
    )

export const left = fallback => Object.assign({}, EitherClass(fallback), {
    fmap: f => left(f(fallback)),
    fail: s => left(s)
})

export const right = val => Object.assign({}, EitherClass(val), {
    fmap: f => right(f(val)),
    fail: () => right(val)
})

export const either =
    (fallback, val) => val == null
    ? left(fallback)
    : right(val)
