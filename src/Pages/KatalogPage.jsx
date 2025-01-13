import React from 'react'
import Katalog from '../Component/Katalog'
import { Outlet } from 'react-router-dom'

const KatalogPage = () => {
    return (
        <div className='bg-white font-poppins overflow-hidden pb-10 '>
            <Katalog />
            <div >
                <Outlet />
            </div>
        </div>
    )
}

export default KatalogPage