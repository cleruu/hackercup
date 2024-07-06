import React from 'react'
import Sidebar from './Sidebar'

const Layout = (props) => {
    if (props.newTestament) {
        return (
            <div className='h-screen flex flex-row justify-start'>
                <Sidebar newTestament={props.newTestament}/>
                <div className='bg-[#C8EBFF] flex-1 p-4 text-white'>
                    water Description
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='h-screen flex flex-row justify-start'>
                <Sidebar newTestament={props.newTestament}/>
                <div className='bg-[#C8EBFF] flex-1 p-4 text-white'>
                    Image Description
                </div>
            </div>
        )
    }
}

export default Layout