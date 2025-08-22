
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserAuthContext } from '../../../provider/UserAuthProvider';

export default function UserSidebar() {
    const { logOut } = useContext(UserAuthContext);
    const location = useLocation(); // Get current path

    // Function to determine active class
    const getLinkClass = (path) => {
        return location.pathname === path
            ? "block px-4 py-2 text-black bg-blue-600 text-white font-medium" // active
            : "block px-4 py-2 text-black bg-blue-100 text-blue-700 font-medium"; // inactive
    }

    return (
        <aside className="w-64 bg-white p-6 shadow-lg">
            <nav className="space-y-3">
                <Link to="account/user/dashboard" className={getLinkClass("/account/user/dashboard")}>Account</Link>
                <Link to="account/user/dashboard" className={getLinkClass("/account/user/dashboard")}>Orders</Link>

            </nav>
        </aside>
    )
}
