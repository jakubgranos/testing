import type { PeopleCardsProps } from "../../blocks";
import "./styles.scss";

type PeopleCardProps = {
    people: PeopleCardsProps;
};

export const PeopleCard = ({ people }: PeopleCardProps) => {
    const { birth_year, hair_color, height, name } = people;

    return (
        <div className="people-card">
            <div className="people-card__details">
                <a href={"/people/" + name}>
                    <h3 className="people-card__title">name: {name}</h3>
                    <h3 className="people-card__title">Birth: {birth_year}</h3>
                    <h3 className="people-card__title">
                        Hair Color: {hair_color}
                    </h3>
                    <h3 className="people-card__title">height: {height}</h3>
                </a>
            </div>
        </div>
    );
};
