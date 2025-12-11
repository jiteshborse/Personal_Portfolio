import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = ({ data }) => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">JB</span>
                            </div>
                            <h3 className="text-xl font-bold">{data.name}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Full Stack Developer & Software Engineer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                        <div className="flex justify-center gap-6">
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
                            <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm">Skills</a>
                            <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-3">Connect</h4>
                        <div className="flex justify-center md:justify-end gap-3">
                            <a
                                href={data.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href={data.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href={data.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                            >
                                <FiTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            © {currentYear} {data.name}. Made with <FiHeart className="text-red-400" size={14} /> and lots of ☕
                        </p>
                        <p className="text-gray-400 text-sm">
                            Built with React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;