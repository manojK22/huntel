import React from 'react'

function DisplayErrorMessage({ touched, error }) {
    return (
        <>
            {(touched && error) ? <div style={{
                color: '#dd4e42',
                fontSize: '10px',
            }} > {error}</div> : null
            }
        </>
    )
}

export default DisplayErrorMessage