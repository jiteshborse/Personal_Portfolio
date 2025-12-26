import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
            <div className="text-center">
                {/* Main Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 border-4 border-transparent border-t-amber-500 border-r-orange-500 border-b-red-500 rounded-full mx-auto"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="w-12 h-12 bg-gradient-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-lg">JB</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-2"
                >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                        Jitesh Borse
                    </h2>
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        Loading Portfolio...
                    </motion.p>
                </motion.div>

                {/* Progress Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex justify-center gap-2 mt-6"
                >
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            animate={{
                                scale: [1, 1.2, 1],
                                backgroundColor: [
                                    '#f59e0b', // amber-500
                                    '#ea580c', // orange-600
                                    '#dc2626', // red-600
                                    '#f59e0b'
                                ]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2
                            }}
                            className="w-3 h-3 rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Loader;