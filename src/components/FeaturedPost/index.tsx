import "./styles.scss";

type FeaturedPost = {
    post: {
        href?: string;
        imageSrc?: string;
        title?: string;
        organization?: string;
        date?: string;
    };
};
export const FeaturedPost = ({ post }: FeaturedPost) => {
    const { date, href, imageSrc, organization, title } = post;

    return (
        <div className="featured-post featured-post--default">
            <a className="featured-post__link" href={href}>
                <figure className="featured-post__image">
                    <img src={`assets/images/${imageSrc}`} alt={title} />
                </figure>
            </a>
            <div className="featured-post__details">
                {organization}
                <span data-spacer="">|</span>
                {date}
            </div>
            <a className="featured-post__link" href={href}>
                <div className="featured-post__title">{title}</div>
            </a>
        </div>
    );
};
