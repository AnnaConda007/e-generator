import "./nav-item.css"
import { INavItemsMock } from "../../../mock/naw-mock";

interface NavItemComponentProps {
    navData: INavItemsMock;
}

const NavItemComponent: React.FC<NavItemComponentProps> = ({ navData }) => {
    const { title, icon, notifications, link } = navData

    return (
        <li >
            <a className="nav-item-link" href={link}>
                <img src={icon} alt={title} />
                {title}
                {notifications > 0 && (
                    <span className="notifications">{notifications}</span>
                )}</a>
        </li>
    );
};

export default NavItemComponent


