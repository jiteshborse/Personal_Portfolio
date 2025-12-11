import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children, darkMode, toggleTheme, portfolioData }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.main>
            <Footer data={portfolioData} />
            <ScrollToTop />
        </div>
    );
};

export default Layout;