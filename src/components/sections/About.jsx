import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';

const About = ({ data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know me better"
                />
                
                {/* About Content */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    <div className="bg-gradient-to-r from-amber-500 to-red-600 p-8 rounded-2xl shadow-xl text-white">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-lg leading-relaxed opacity-95">
                                    I am a driven MCA student (Batch 2024-26) at MIT World Peace University, working towards a career in Software Engineering. 
                                    My technical foundation is built on Java, C++, and SQL, alongside hands-on experience in MERN Stack development. 
                                    I enjoy the logic behind database management just as much as creating user-friendly interfaces.
                                </p>
                                <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <p className="text-white/90">
                                        Recently, I secured 3rd place among 90 teams at HackMIT'25 IDEATHON and won the 1st Appreciation Prize, 
                                        which was a great learning experience in teamwork and problem-solving.
                                    </p>
                                </div>
                                <p className="mt-4 text-amber-100 font-medium">
                                    Let's connect if you're looking for a motivated fresher who is ready to take on challenges and contribute to meaningful projects!
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Education */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-gradient-to-r from-amber-500 to-red-600 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Education Journey
                                    </h3>
                                </div>
                                <div className="space-y-6">
                                    {data.education.map((edu, index) => (
                                        <div key={index} className="relative">
                                            {index < data.education.length - 1 && (
                                                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
                                            )}
                                            <div className="flex gap-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                                                    edu.status === 'Current' 
                                                        ? 'bg-gradient-to-r from-amber-500 to-red-600'
                                                        : 'bg-gradient-to-r from-orange-500 to-amber-600'
                                                }`}>
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                                            {edu.degree}
                                                        </h4>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                            edu.status === 'Current' 
                                                                ? 'bg-amber-500 text-white'
                                                                : 'bg-orange-500 text-white'
                                                        }`}>
                                                            {edu.status}
                                                        </span>
                                                    </div>
                                                    {edu.university && (
                                                        <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">
                                                            {edu.university}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center gap-2">
                                                        <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg font-semibold">
                                                            {edu.cgpa.includes('%') ? `${edu.cgpa}` : `CGPA: ${edu.cgpa}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Languages */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 h-fit">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 12.236 11.618 14z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Languages
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {data.languages.map((language, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {language[0]}
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {language}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;