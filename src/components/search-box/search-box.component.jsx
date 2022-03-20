import React from 'react';
import './search-box.component.scss'
import TextField from '@material-ui/core/TextField'

export const Search = ({placeholder, handleEvent}) => {
    return (
    <TextField className="search" id="outlined-search" label={placeholder} type="search" variant="outlined" onChange={handleEvent} />
    )
}