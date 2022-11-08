import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserAuthContextProvider';
import logo from '../../images/favicon.ico'

const Header = () => {
    const { user, logout} = useContext(AuthContext);
    // if (loading) {
    //     return <div> Loading . . . . </div>
    // }
    const handlelogout = () => {
        logout()
        .then(()=>{})
        .then(()=>{})
    }
    const menuItems = <>
        <li> <Link to='/services'>Services</Link></li>
        {
            user?.uid ?
                <>
                    <li> <Link to='/addServices'>Add Services</Link></li>
                    <li> <Link to='/myReviews'>My reviews</Link></li>
                    <li> <Link to='/blogs'>Blogs</Link></li>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} className='mask mask-hexagon-2' alt='avater' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/'>Profile</Link></li>
                            <li> <Link to='/'>Settings</Link></li>
                            <li> <button onClick={handlelogout}>Logout</button></li>
                        </ul>
                    </div>
                    <li className=''> Hi, {user.displayName}</li>
                    <li> <button onClick={handlelogout}>Logout</button></li>
                </>
                :
                <>
                    <li> <Link to='/blogs'>Blogs</Link></li>
                    <li> <Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="flex justify-between items-center bg-base-100 mx-8 my-4">
            <div className="">
                <div className='flex align-center gap-1'>
                    <div><img src={logo} alt="logo" /></div>
                    <div> <Link to='/' className="btn btn-ghost normal-case text-3xl p-0">BakerY</Link></div>
                </div>
            </div>
            <div className="">
                <ul className="hidden md:flex flex-wrap gap-3 items-center p-0" >
                    {menuItems}
                </ul>
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/'>Homepage</Link></li>
                        <li> <Link to='/services'>Services</Link></li>
                        <li> <Link to='/blogs'>Blog</Link></li>
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='avater' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/'>Profile</Link></li>
                            <li> <Link to='/'>Settings</Link></li>
                            <li> <Link to='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div> */}
        </div>
    );
};

export default Header;