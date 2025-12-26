import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';

const Contact = ({ data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // EmailJS configuration - Replace with your actual service details
            await emailjs.send(
                'service_42pq7i1', // Replace with your EmailJS service ID
                'template_1s6iofi', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'jitesh.borse007@gmail.com'
                },
                '96-hkF-XIr8juzG9V' // Replace with your EmailJS public key
            );
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: FiGithub, href: data.social.github, label: 'GitHub' },
        { icon: FiLinkedin, href: data.social.linkedin, label: 'LinkedIn' },
        { icon: FiTwitter, href: data.social.twitter, label: 'Twitter' },
    ];

    return (
        <section id="contact" className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-red-900/20">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Let's work together on something amazing"
                />
                
                {/* Contact Cards */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid lg:grid-cols-3 gap-6 mb-12">
                        {/* Contact Info Card */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-gradient-to-br from-amber-600 to-red-700 rounded-xl shadow-xl p-6 text-white h-full">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                                        <FiMail className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Let's Connect
                                    </h3>
                                    <p className="text-amber-100 text-sm leading-relaxed">
                                        Ready to bring your ideas to life?
                                    </p>
                                </div>
                                
                                {/* Direct Contact */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <FiMail size={16} />
                                        </div>
                                        <div>
                                            <p className="text-amber-100 text-xs">Email me at</p>
                                            <a
                                                href={`mailto:${data.email}`}
                                                className="font-semibold text-sm hover:text-amber-200 transition-colors"
                                            >
                                                {data.email}
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Social Links */}
                                    <div>
                                        <p className="text-amber-100 text-xs mb-3">Follow me on social media</p>
                                        <div className="flex gap-2">
                                            {socialLinks.map((social) => (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 group backdrop-blur-sm"
                                                    aria-label={social.label}
                                                >
                                                    <social.icon 
                                                        className="text-white group-hover:scale-110 transition-transform" 
                                                        size={16} 
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form Card */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg">
                                        <FiSend className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            Send Message
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Fill out the form below
                                        </p>
                                    </div>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                    
                                    {submitStatus === 'success' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                                        </motion.div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">Failed to send message. Please try again or contact me directly.</span>
                                        </motion.div>
                                    )}
                                    
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-lg hover:from-amber-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                                    >
                                        <FiSend size={16} className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;