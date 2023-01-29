import { useState } from "react";
import "./styles.scss";

export const Navigation = () => {
    const navigationArray = [
        { href: "/news-landing", label: "News", haveChildren: false },
        {
            href: "/resources-landing",
            label: "Resources",
            haveChildren: true,
        },
        { href: "/events-landing", label: "Events", haveChildren: false },
        { href: "/jobs-landing", label: "Jobs", haveChildren: false },
        { href: "/about", label: "About", haveChildren: false },
        { href: "/submissions", label: "Submissions", haveChildren: false },
    ];

    return (
        <div className="page-nav">
            <nav className="page-nav__menu">
                <ul className="menu">
                    {navigationArray.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`menu-item${
                                    item.haveChildren ? " has-mega-menu" : ""
                                }`}
                            >
                                <a href={item.href} className="menu-link">
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
