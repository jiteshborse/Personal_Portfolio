import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiStar, FiTarget } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';

const achievement = {
    icon: FiAward,
    title: "HackMIT'25 IDEATHON",
    description: "Secured 3rd Place & Won 1st Appreciation Prize out of 90 teams at HackMIT'25 IDEATHON as Team Leader of TECH-MITians",
    date: "2025",
    category: "3rd Place Winner",
    teamMembers: ["Rutuja Jadhav", "Nitin Govardhane", "Viren Shende", "Atharv Kulkarni"],
    mentors: ["Dr. Jalindar Gandal Sir", "Swapnil Goje Sir"],
    highlights: ["Team Leadership", "Problem Solving", "Innovation", "Collaboration"]
};

const AchievementCard = ({ achievement }) => {
    const IconComponent = achievement.icon;
    
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-blue-200 dark:border-gray-700"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                        <IconComponent className="text-white" size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {achievement.date}
                        </p>
                    </div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-bold shadow-lg">
                    {achievement.category}
                </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {achievement.description}
                </p>
            </div>
            
            {/* Team & Mentors Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-6">
                {/* Team Members */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Team Members
                    </h4>
                    <div className="space-y-3">
                        {achievement.teamMembers.map((member, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {member.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-blue-800 dark:text-blue-300 font-medium">{member}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Mentors */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Mentors & Guides
                    </h4>
                    <div className="space-y-3 mb-6">
                        {achievement.mentors.map((mentor, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {mentor.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-purple-800 dark:text-purple-300 font-medium">{mentor}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Key Highlights */}
                    <h5 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h5>
                    <div className="flex flex-wrap gap-2">
                        {achievement.highlights.map((highlight, index) => (
                            <span key={index} className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm rounded-full font-medium shadow-sm">
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle
                    title="Achievements & Awards"
                    subtitle="Recognition and milestones in my journey"
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
                    className="max-w-4xl mx-auto"
                >
                    <AchievementCard achievement={achievement} />
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;