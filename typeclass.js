'use strict'

export const required = '__SCHRODINGER_REQUIRED'

export const typeclass = (name, ...interfaces) => 
    Object.assign(
        {},
        ...interfaces,
        { name }
    )

export const implement = (...interfaces) => {
    interfaces.map(i =>
        i.keys().map(k => {
            if(i[k] === required) {
                throw `${k} not implemented for ${i.name}`
            } 
        }))

    return Object.assign({}, ...interfaces)
}
