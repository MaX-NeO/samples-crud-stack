import React from 'react'
import { Footer } from '../../components/Footer'
import { UserAuth } from './Auth/UserAuth'
import { Navbar } from '../../components/Navbar'
import UserLeftbar from './LAyout/UserLeftbar'

const UserPanel = () => {
    return (
        <>
            <UserAuth />
            <Navbar />
            <UserLeftbar/>
            <div className='mainx'>
                UserPanel
            </div>
            <Footer />
        </>
    )
}

export default UserPanel