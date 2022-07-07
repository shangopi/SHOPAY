import React from 'react'

const PageNotFound = () => {
    return (
        <div id="wrapper" className='text-center p-0'>
            <img width="75%" fluid src={`${process.env.PUBLIC_URL}/images/assests/notfound.jpg`} />
        </div >
    )
}

export default PageNotFound;