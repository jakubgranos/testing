import { Icon } from "../../components";
import "./styles.scss";

export const IconsGrid = () => {
    const itemsArray = [
        {
            href: "#",
            iconSrc: "news",
            title: "News & media",
        },
        {
            href: "#",
            iconSrc: "guides-tools",
            title: "Guides, tools & research",
        },
        {
            href: "#",
            iconSrc: "webinars-training",
            title: "Webinars & training",
        },
        {
            href: "#",
            iconSrc: "events",
            title: "Pro bono Events",
        },
        {
            href: "#",
            iconSrc: "jobs",
            title: "Pro bono Jobs",
        },
    ];

    return (
        <section className="icons-grid">
            <div className="container">
                <p>
                    The Global Pro Bono Hub is a global platform for pro bono
                    resources, enabling access to best practice guidance and an
                    exchange of knowledge, expertise and news across the global
                    pro bono sector.
                </p>
                <div className="icons-grid__wrapper">
                    {itemsArray.map((item, index) => {
                        return <Icon key={index} icon={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};
