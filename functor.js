'use strict'

import { typeclass, required } from './typeclass'

const functor = () => 
    typeclass('Functor', {
        fmap: required
    })

export default functor
