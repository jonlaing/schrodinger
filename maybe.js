'use strict'

import { typeclass, implement } from './typeclass'
import monad from './monad'
import functor from './functor'
import applicative from './applicative'

const MaybeClass = (name, val) =>
    typeclass(
        name,
        monad(val),
        functor(val),
        applicative(val))

export const just = val =>
    implement(
        MaybeClass('Just', val), {
            fmap: f => just(f(val)),
            fail: () => just(val)
        })

export const nothing = () =>
    implement(
        MaybeClass('Nothing', null), {
            bind: nothing,
            shift: nothing,
            fmap: nothing,
            apply: nothing,
            fail: s => { throw s }
        })

export const maybe = val => val != null ? just(val) : nothing()
