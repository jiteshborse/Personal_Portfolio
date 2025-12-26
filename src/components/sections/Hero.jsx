import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Hero = ({ data }) => {
    const socialLinks = [
        { icon: FiGithub, href: data.social.github, label: 'GitHub' },
        { icon: FiLinkedin, href: data.social.linkedin, label: 'LinkedIn' },
        { icon: FiTwitter, href: data.social.twitter, label: 'Twitter' },
        { icon: FiMail, href: `mailto:${data.email}`, label: 'Email' },
    ];

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden
               bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
               dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/10 to-red-500/10 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-800 mb-4">
                                Welcome to my portfolio
                            </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                                {data.name}
                            </span>
                            <span className="wave ml-2">👋</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
                            {data.tagline}
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
                            {data.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 text-white rounded-xl hover:from-amber-600 hover:to-red-700 transition-all duration-300 font-medium shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
                            >
                                Get in Touch
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 font-medium backdrop-blur-sm"
                            >
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:scale-110 border border-gray-200 dark:border-gray-700"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
        </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center relative"
                    >
                        <div className="relative">
                            {/* Gradient Ring */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full p-1 animate-spin-slow">
                                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full"></div>
                            </div>
                            
                            {/* Profile Image */}
                            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                                <img
                                    src={data.profileImage}
                                    alt={data.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="eager"
                                />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce delay-100"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full animate-bounce delay-500"></div>
                        </div>
                    </motion.div>
        </div >
      </div >
    </section >
  );
};

export default Hero;