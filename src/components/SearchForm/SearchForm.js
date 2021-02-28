import React, { useState, useEffect } from 'react'
import './SearchForm.css'

function SearchForm(props) {
   

    
    
    return (
        <form className='search'>
            <div className='form-group'>
                
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='term'
                type='text'
                className='form-control'
                placeholder='type in a search term to begin'
                id='term'
            />

            </div>
        </form>
    )
}

export default SearchForm
