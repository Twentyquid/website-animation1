import React from "react";
import { useEffect } from "react";
import img1 from "../images/curology.png";
import img2 from "../images/yourspace.png";
import img3 from "../images/lumin.png";

function Header() {
  useEffect(() => {
    let desc = document.querySelectorAll(".desc");
    let imgAnime = document.querySelectorAll(".img-anime");
    let imgAnimation = [{ width: "0" }, { width: "100%" }];
    let imgtiming = { duration: 700 };
    imgAnime[0].animate(imgAnimation, { ...imgtiming, duration: 300 });
    imgAnime[1].animate(imgAnimation, { ...imgtiming, duration: 500 });
    imgAnime[2].animate(imgAnimation, { ...imgtiming, duration: 700 });
    let bar1 = document.querySelector("#bar1");
    let bar2 = document.querySelector("#bar2");
    let bar3 = document.querySelector("#bar3");
    let animation = [{ height: "0" }, { height: "100%" }];
    let colorChange = [{ color: "white" }, { color: "black" }];
    let timing = { duration: 1000 };
    let timing2 = { duration: 800 };
    let timing3 = { duration: 600 };
    bar1.animate(animation, timing);
    bar2.animate(animation, timing2);
    bar3.animate(animation, timing3);
    desc[0].animate(colorChange, { duration: 1000 });
    desc[1].animate(colorChange, { duration: 1000 });
  }, []);
  return (
    <>
      <div className="h-hs flex relative bg-black">
        <div id="bar1" className="bg-white basis-1/3"></div>
        <div id="bar2" className="bg-white  basis-1/3"></div>
        <div id="bar3" className="bg-white  basis-1/3"></div>
        <div>
          <div className="absolute flex justify-between top-7 left-0 w-full p-7">
            <p>AGENCY</p>
            <button>
              <div className="h-1 bg-slate-700 w-6 "></div>
              <div className="h-1 bg-slate-700 w-6 mt-2"></div>
            </button>
          </div>

          <div className="absolute text-3xl top-24 left-0 w-full p-7 font-semibold font-sans">
            <p className="text-black desc">Creating unique brands is</p>
            <p className="text-black desc">what we do.</p>
            <p className="text-sm mt-6">More about us</p>
          </div>
        </div>
      </div>
      <div className="h-hs flex bg-black">
        <div className="h-full basis-1/3 w-full">
          <div
            style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
            className="img-anime w-full h-full"
          ></div>
        </div>
        <div className="basis-1/3">
          <div
            style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
            className="img-anime w-full h-full"
          ></div>
        </div>
        <div className="basis-1/3">
          <div
            style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}
            className="img-anime w-full h-full"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Header;
