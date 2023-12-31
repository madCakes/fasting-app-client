import { React } from "react";
import star from "../../assets/star.svg";
import fire from "../../assets/fire.svg";
import clock from "../../assets/clock.svg";

const Header = () => {
  return (
    <section className="flex justify-between p-1 pt-2 mx-4">
      {/* Left: total days fasted*/}

      <div className="flex">
        <img className="w-7" src={star} />
        <p className="m-1">10</p>
      </div>
      {/* Middle: consecutive days fasted */}
      <div className="flex">
        <img className="w-6" src={fire} />
        <p className="m-1">10</p>
      </div>
      {/* Right: lifetime total fasted hours */}
      <div className="flex">
        <img className="w-7 mt-1" src={clock} />
        <p className="m-1">10</p>
      </div>
    </section>
  );
};

export default Header;
