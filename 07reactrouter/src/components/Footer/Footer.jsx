import React from 'react'
import {Link,NavLink} from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
