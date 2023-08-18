import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 ml-4">
                    <h1 className="text-2xl font-bold text-blue-300">Dropbox Integration</h1>
                    <p className="mt-2">Excellence in Software Engineering</p>
                </div>

                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold text-blue-300">Quick Links</h2>
                    <ul className="mt-2">
                        <li className="mt-2 ml-8"><Link href="/home" className="hover:text-blue-300">Home</Link></li>
                        <li className="mt-2 ml-8"><Link href="/about" className="hover:text-blue-300">About</Link></li>

                    </ul>
                </div>

                <div className="mb-6 md:mb-0 mr-4">
                    <h2 className="text-lg font-semibold text-blue-300">Contact</h2>
                    <ul className="mt-2">
                        <li className="mt-2">North Carolina Eth</li>
                        <li className="mt-2">+1 (123) 456-7890</li>
                        <li className="mt-2">info@vultracorp.com</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-blue-700 pt-5 text-center">
                <p className="text-gray-400">© 2023 Dropbox Integration. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
