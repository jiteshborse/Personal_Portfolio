import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            className="group relative"
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                        <div className="px-3 py-1 bg-gradient-to-r from-amber-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                            <FiStar className="fill-current" size={12} />
                            Featured
                        </div>
                    </div>
                )}
                
                {/* Image Section */}
                <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative group-hover:scale-105 transition-transform duration-500">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3Q8L3RleHQ+PC9zdmc+';
                            }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {project.title}
                        </h3>
                        <div className="ml-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {index + 1}
                            </div>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3 text-sm">
                        {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <motion.span
                                    key={techIndex}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-2 py-1 bg-gradient-to-r from-amber-100 to-red-100 dark:from-amber-900/30 dark:to-red-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full font-medium border border-amber-200 dark:border-amber-700 hover:shadow-md transition-all"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-900 to-red-700 dark:from-amber-700 dark:to-red-900 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium group/btn"
                            >
                                <FiGithub size={18} className="group-hover/btn:rotate-12 transition-transform" />
                                View Code
                            </a>
                        ) : (
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl font-medium opacity-50 cursor-not-allowed">
                                <FiGithub size={18} />
                                Private Repo
                            </div>
                        )}
                        
                        {/* Project Status */}
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">Completed</span>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
        </motion.div>
    );
};

const Projects = ({ data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-red-900/20">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A showcase of my development journey"
                />
                
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {data.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-amber-600 to-red-600 p-1 rounded-2xl shadow-2xl inline-block">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl px-8 py-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Want to see more?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Check out my GitHub for more projects and contributions
                            </p>
                            <a
                                href="https://github.com/jiteshborse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-900 to-red-700 dark:from-amber-700 dark:to-red-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
                            >
                                <FiGithub size={24} className="group-hover:rotate-12 transition-transform" />
                                Explore GitHub Profile
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;