import { LogOut } from 'lucide-react'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserAuthContext } from '../../provider/UserAuthProvider';

export default function UserDashboard() {
    const { logOut } = useContext(UserAuthContext);
    const location = useLocation(); // Get current path

    // Function to determine active class
    const getLinkClass = (path) => {
        return location.pathname === path
            ? "block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium" // active
            : "block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium"; // inactive
    }

    return (
        <aside className="w-64 bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-blue-600 mb-8">My Account</h1>
            <nav className="space-y-3">
                <Link to="/account/user" className={getLinkClass("/account/user")}>Account</Link>
                <Link to="/admin/categories" className={getLinkClass("/admin/categories")}>Orders</Link>
                <Link to="/admin/brands" className={getLinkClass("/admin/brands")}>Change Password</Link>


                <button 
                    className="w-48 flex items-center justify-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" 
                    onClick={logOut}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </nav>
        </aside>
    )
}
