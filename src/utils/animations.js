// Framer Motion animation utilities

export const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const staggerChildren = {
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 }
};

export const tapScale = {
    scale: 0.95
};

// Page transition variants
export const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -20
    }
};

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};