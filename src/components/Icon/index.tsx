import "./styles.scss";

type iconProps = {
    icon: {
        href?: string;
        iconSrc?: any;
        title?: string;
    };
};

export const Icon = ({ icon }: iconProps) => {
    const { href, iconSrc, title } = icon;

    return (
        <a href={href} className="icon icon--default">
            <figure className="icon__svg">
                <img src={`assets/icons/${iconSrc}.svg`} alt={title} />
            </figure>
            <div className="icon__title">{title}</div>
        </a>
    );
};
