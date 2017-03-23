'use strict'

import { typeclass, implement } from './typeclass'
import monad from './monad'
import functor from './functor'
import applicative from './applicative'

const ValidationClass = (name, val) =>
    typeclass(
        name,
        monad(val),
        functor(val),
        applicative(val))

export const success = val =>
    implement(
        ValidationClass('Success', val), {
            fmap: f => {
                try {
                    return success(f(val))
                } catch(e) {
                    return failure(e)
                }
            },
            fail: () => success(val)
        })

export const failure = err => 
    implement(
        ValidationClass('Failure', err), {
            fmap: () => failure(err),
            fail: f => {
                try {
                    return failure(f(err))
                } catch (e) {
                    return failure(e)
                }
            },
            lift: () => { throw err }
        })

export const validate = (err, val) =>
    val == null ? failure(err) : success(val)
