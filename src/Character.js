import React from 'react'

export const Character = ({name, side}) => {
    return (
        <li>
            {name} - <strong>{side}</strong>
        </li>
    )
}
