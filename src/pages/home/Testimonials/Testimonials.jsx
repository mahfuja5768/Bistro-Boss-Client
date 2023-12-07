import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const { details, name, rating, _id } = reviews;
  // console.log(reviews);
  const url = "https://bistro-boss-server-swart-sigma.vercel.app/reviews";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <section>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-12 flex justify-center items-center flex-col space-y-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readonly
              />
              <p className="py-6">{review.details}</p>
              <h2 className="text-[#CD9003] text-center text-3xl">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
