import { useEffect } from 'react';

const IsMobileHook = (setIsMobile, pixels) => (
    useEffect(() => {
        if (window.innerWidth < pixels) setIsMobile(true);
        function handleResize() {
            if (window.innerWidth < pixels) setIsMobile(true);
            else setIsMobile(false);
        }
        window.addEventListener('resize', handleResize);
    })
)

export default IsMobileHook;