const Card = ({ children, className = '', hover = true, ...props }) => {
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700';
    const hoverClasses = hover ? 'hover:shadow-xl transition-shadow' : '';
    
    return (
        <div
            className={`${baseClasses} ${hoverClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;