import axios from "axios";
import { useEffect, useState } from "react";
import { PeopleCard } from "../../components";
import "./styles.scss";

export type PeopleCardsProps = {
    birth_year: string;
    name: string;
    hair_color: string;
    height: number;
};

export const PeopleCards = () => {
    const [peopleArray, setPeopleArray] = useState<PeopleCardsProps[]>();
    const [loader, setLoader] = useState(false);
    // Test fetch in react to see how astro will response

    useEffect(() => {
        setLoader(true);
        axios.get("https://swapi.dev/api/people").then((res) => {
            setPeopleArray(res.data.results);
            setLoader(false);
        });
    }, []);

    return (
        <section className="people-cards">
            <div className="container">
                <h1 style={{ textAlign: "center" }}>People fetch data astro</h1>
                <div className="people-cards__wrapper">
                    {loader ? (
                        <div>loading</div>
                    ) : (
                        peopleArray?.map((item, index) => {
                            return <PeopleCard key={index} people={item} />;
                        })
                    )}
                </div>
            </div>
        </section>
    );
};
