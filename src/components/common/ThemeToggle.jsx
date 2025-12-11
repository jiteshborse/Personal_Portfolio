import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {darkMode ? (
                    <FiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <FiMoon className="w-5 h-5 text-gray-700" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;