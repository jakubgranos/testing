import type { FC } from "react";
import { Button } from "../../components";
import { Slider } from "../Slider";
import "./styles.scss";

type HeroCTAProps = {
    title: string;
    img: string;
};

export const HeroCTA: FC<HeroCTAProps> = ({ title, img }) => {
    return (
        <section className="hero hero--default">
            <figure className="hero__background">
                <img src={img} alt={title} />
            </figure>
            <div className="container">
                <div className="hero__wrapper">
                    <h1>{title}</h1>
                    <Button>Start browsing</Button>
                </div>
            </div>
        </section>
    );
};
