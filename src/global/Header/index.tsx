import "./styles.scss";

import { Navigation } from "./components";

export const Header = () => {
    return (
        <header className="page-header page-header--shadow">
            <div className="container">
                <div className="page-header__wrapper">
                    <figure className="page-logo">
                        <a href="/" className="logo-link">
                            {/* logo */}
                            <img
                                src="assets/images/each-logo.jpg"
                                alt="logo of the project"
                            />
                        </a>
                    </figure>
                    <button className="hamburger-menu" data-mobile-menu-opener>
                        hamburger
                    </button>

                    <Navigation />
                </div>
            </div>
        </header>
    );
};
