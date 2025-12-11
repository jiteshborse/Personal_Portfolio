const Badge = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    ...props 
}) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full';
    
    const variants = {
        primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    
    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
    };
    
    return (
        <span
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;