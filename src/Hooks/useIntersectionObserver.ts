import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = <T>(options: IntersectionObserverInit): [boolean, React.RefObject<T>] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsIntersecting(entry.isIntersecting);
            });
        }, options);

        const { current } = targetRef;


        if (current) {
            observer.observe(current);
        }


        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [options]);

    return [isIntersecting, targetRef];
};

export default useIntersectionObserver;
