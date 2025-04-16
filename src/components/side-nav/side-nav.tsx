import "./side-nav.css"
import { navItemsMock } from "../../mock/naw-mock";
import NavItemComponent from "./nav-item/nav-item";

const SideNavComponent = () => {
    return (
        <aside >
            <header className="aside-header"  >
                <img src="/assets/icons/logo-sign.svg" alt="Логотип MT.RU" />
                <span>МТ.РУ</span>
            </header>
            <nav role="navigation">
                <ul className="nav-list">
                    {navItemsMock.map((item) => (
                        <NavItemComponent key={item.title} navData={item} />
                    ))}
                </ul>
            </nav>
            <footer>
                <a href="/">
                    <img src={"/assets/icons/Union.svg"} alt="" aria-hidden="true" />
                    <span>О компании</span>
                </a>

            </footer>
        </aside>
    );
};


export default SideNavComponent



