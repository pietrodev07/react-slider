import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const starsCreator = (num) => {

  return Array.from({ length: 5 }, (_, index) => {

    if (num >= index + 1) {

      return <BsStarFill key={index} fill="#fca903" />;

    } else if (num >= index + 0.5) {

      return <BsStarHalf key={index} fill="#fca903" />;

    } else {

      return <BsStar key={index} fill="#fca903" />;

    }

  });

};

export default starsCreator