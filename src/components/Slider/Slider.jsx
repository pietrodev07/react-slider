import { useEffect, useState } from "react";
import Slide from "../Slide/Slide";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import data from "../../data/data";
import './Slider.css';

const Slider = () => {

  const [reviews, setReviews] = useState(data);
  const [active, setActive] = useState(0);

  const nextSlide = () => {

    setActive((prevValue) => {

      if (prevValue + 1 > reviews.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }

    });

  };

  const prevSlide = () => {

    setActive((prevValue) => {

      if (prevValue - 1 < 0) {
        return reviews.length - 1;
      } else {
        return prevValue - 1;
      }

    });


  }

  const setClass = (index) => {

    let slideClass = "";

    if (index === active) {

      slideClass = "active";

    } else if (active === index + 1 || (active === 0 && index === reviews.length - 1)) {

      slideClass = "prev";

    } else {

      slideClass = "next";

    }

    return slideClass;

  }

  useEffect(() => {

    const timer = setTimeout(() => {

      nextSlide();

    }, 4000);

    return () => clearTimeout(timer);

  }, [active]);

  return (

    <main className="main">

      <div className="slider">

        {reviews && reviews.map((review, index) => {

          return <Slide key={review.id} {...review} slideClass={setClass(index)} />

        })}

      </div>

      <div className="buttons-container">

        <button className="btn" onClick={prevSlide}><GrFormPrevious className="icon" /></button>
        <button className="btn" onClick={nextSlide}><GrFormNext className="icon" /></button>

      </div>

    </main>

  )

}

export default Slider