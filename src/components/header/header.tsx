import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercent(Math.min(100, Math.max(0, scrolled)));
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const opacity = 1 - scrollPercent / 100;

    return (<header className="header" style={{ opacity }}
    > <div className="header-logo" >
            <img src="/assets/feed/avatar.png" alt="" aria-hidden="true" />
            <span className="header-text" >Лента</span>
        </div>
    </header>);
};

export default Header;