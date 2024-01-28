import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <div className='mt-4 bg-white rounded-xl text-center'>
        {isAuthenticated && (
            <button onClick={() => logout()} className='font-bold'>
                SIGN OUT
            </button>
        )}
        </div>
    )
}

export default LogoutButton