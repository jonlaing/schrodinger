'use strict'

import { unimplemented } from './utils'

const functor = () => ({
    fmap: () => unimplemented('functor#fmap')
})

export default functor
