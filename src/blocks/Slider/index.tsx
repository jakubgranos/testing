import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FeaturedPost } from "../../components";
import { Autoplay } from "swiper";

export const Slider = () => {
    const itemsArray = [
        {
            href: "#",
            imageSrc: "pro-bono-page.png",
            title: "Pro bono guide: Establishing a pro bono program at your law firm",
            organization: "Pilnet",
            date: "22 OCT 2022",
        },
        {
            href: "#",
            imageSrc: "pro-bono-page.png",
            title: "Pro bono guide: Establishing a pro bono program at your law firm",
            organization: "Pilnet",
            date: "22 OCT 2022",
        },
        {
            href: "#",
            imageSrc: "pro-bono-page.png",
            title: "Pro bono guide: Establishing a pro bono program at your law firm",
            organization: "Pilnet",
            date: "22 OCT 2022",
        },
        {
            href: "#",
            imageSrc: "pro-bono-page.png",
            title: "Pro bono guide: Establishing a pro bono program at your law firm",
            organization: "Pilnet",
            date: "22 OCT 2022",
        },
        {
            href: "#",
            imageSrc: "pro-bono-page.png",
            title: "Pro bono guide: Establishing a pro bono program at your law firm",
            organization: "Pilnet",
            date: "22 OCT 2022",
        },
    ];
    return (
        <div className="container">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {itemsArray.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <FeaturedPost post={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
