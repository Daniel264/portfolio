export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: any) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.5,
            delay: 0.5 + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
            opacity: { duration: 0.35 },
        },
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "linear",
            ease: [0.75, 0, 0.24, 1],
        },
    },
};
