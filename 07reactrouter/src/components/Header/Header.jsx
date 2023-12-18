import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

