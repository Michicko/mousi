import React from "react";
import Slider from "./Slider";

interface SocialProps {
  id: number;
  image: string;
  name: string;
  position: string;
}

export default function Socials() {
  const socials = [
    {
      id: 1,
      image: "/images/1.jpg",
      name: "ocean blue",
      position: "center",
    },
    {
      id: 2,
      image: "/images/2.jpg",
      name: "ocean blue",
      position: "right",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      name: "ocean blue",
      position: "left",
    },
    {
      id: 4,
      image: "/images/4.jpg",
      name: "ocean blue",
      position: "center",
    },
    {
      id: 5,
      image: "/images/5.jpg",
      name: "ocean blue",
      position: "right",
    },
    {
      id: 6,
      image: "/images/6.jpg",
      name: "ocean blue",
      position: "left",
    },
    {
      id: 7,
      image: "/images/7.jpg",
      name: "ocean blue",
      position: "center",
    },
  ];

  return (
    <div className="socials container">
      <h2 className="heading heading__secondary mb-2">
        <span>Follow me</span>
        <span>on instgram</span>
      </h2>
      <div className="socials__slider">
        <Slider>
          <div className="socials__slides">
            {socials.map((social: SocialProps) => {
              return (
                <div
                  className={`socials__slide socials__slide--${social.position}`}
                  key={social.id}
                >
                  <img
                    src={social.image}
                    alt={social.name}
                    className={`socials__slide-img`}
                  />
                </div>
              );
            })}
          </div>
        </Slider>
      </div>
    </div>
  );
}
