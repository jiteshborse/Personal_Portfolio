import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';

const Skills = ({ data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categoryIcons = {
        "Programming Languages": "💻",
        "Web Technologies": "🌐",
        "Backend & Databases": "🗄️",
        "Tools & Platforms": "🛠️",
        "Core Concepts": "🧠"
    };

    const categoryColors = {
        "Programming Languages": "from-blue-500 to-blue-600",
        "Web Technologies": "from-green-500 to-green-600",
        "Backend & Databases": "from-purple-500 to-purple-600",
        "Tools & Platforms": "from-orange-500 to-orange-600",
        "Core Concepts": "from-indigo-500 to-indigo-600"
    };

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    title="Skills & Technologies"
                    subtitle="Technologies I work with"
                />
                
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Technical Skills Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {data.categories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[category.name]} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                                        {categoryIcons[category.name]}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {category.name}
                                    </h3>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-xl shadow-xl"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Soft Skills
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Personal qualities that drive success
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {data.softSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <span className="text-white font-bold text-xs">
                                                {skill.split(' ').map(word => word[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;