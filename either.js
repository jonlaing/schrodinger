'use strict'

import { typeclass, implement } from './typeclass'
import monad from './monad'
import functor from './functor'
import applicative from './applicative'

const EitherClass = (name, val) =>
    typeclass(
        name,
        monad(val),
        functor(val),
        applicative(val))

export const left = fallback =>
    implement(
        EitherClass('Left', fallback), {
            fmap: f => left(f(fallback)),
            fail: s => left(s)
        })

export const right = val => 
    implement(
        EitherClass('Right', val), {
            prettyName: 'Right',
            fmap: f => right(f(val)),
            fail: () => right(val)
        })

export const either =
    (fallback, val) => val == null ? left(fallback) : right(val)
