"use client";

import { Navigation, Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "./swiper.css";
import Struct from "./Home/index";

const SliderHome = () => {
  const carouselItems = [
    {
      img: "/images/setupWizard.svg",
      claim:
        "Ensure compliance, save time and effort, improve consistency and reduce risk",
    },
    {
      img: "/images/recommendationLetter.svg",
      claim: "Implement effective GDPR-compliance in less than 10 minutes",
    },
    {
      img: "/images/addToFooter.svg",
      claim: "Get all the documents you need and add them to your platforms",
    },
  ];
  return (
    <div className={"flex items-center p-10"}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Virtual]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "progressbar" }}
        virtual
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Struct item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHome;
