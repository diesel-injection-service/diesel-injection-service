import React, { useState } from 'react';
import { Phone, Mail, Clock, Menu, X, MapPin } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* TOP BAR - Non-sticky */}
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-700">
                        {/* Left Side */}
                        <div className="flex items-center space-x-6">
                            {/* Phone Container */}
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span>(909)-885-0590</span>
                            </div>
                            {/* Email Container */}
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                <span>amarshall@disinjection.com</span>
                            </div>
                            {/* Address Container */}
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span>8482 Cherry Ave, Fontana, CA 92335</span>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-400" />
                            <span>Mon-Fri 7AM-5PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN NAV - Sticky */}
            <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Left Container */}
                        <a href="#top" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            {/* Logo IMG*/}
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img 
                                    src="/diesel-logo.png" 
                                    alt="Diesel Injection Service Logo" 
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            {/* Logo Text */}
                            <div>
                                <h1 className="text-2xl font-bold">Diesel Injection Service</h1>
                                <p className="text-sm text-gray-400">Excellence Since 1951</p>
                            </div>
                        </a>

                        {/* Desktop Navigation | Right Container*/}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                            <a href="#location" className="hover:text-blue-400 transition-colors">Location</a>
                            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                            {/* Shop Button */}
                            <a href="https://diesel-injection-service.myshopify.com" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">Shop Parts</a>
                        </nav>

                        {/* Hamburger Menu */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Hamburger Links */}
                    {isMenuOpen && (
                        <nav className="md:hidden py-4 border-t border-gray-700">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                                <a href="#location" className="hover:text-blue-400 transition-colors">Location</a>
                                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                                <a href="https://diesel-injection-service.myshopify.com" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors inline-block">Shop Parts</a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;