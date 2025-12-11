import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/20 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="group"
                        onClick={(e) => scrollToSection(e, '#hero')}
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg">JB</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all font-medium relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                                </a>
                            </li>
                        ))}
                </ul>

                {/* Right side buttons */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <FiSun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                    </button>

                    {/* Resume Download Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="hidden md:inline-flex px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Resume
                    </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */ }
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl border border-white/20 mx-4"
            >
                <ul className="flex flex-col space-y-2 p-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all font-medium"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex w-full justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg"
                        >
                            Download Resume
                        </a>
                    </li>
              </ul>
            </motion.div >
          )}
        </AnimatePresence >
      </nav >
    </header >
  );
};

export default Header;