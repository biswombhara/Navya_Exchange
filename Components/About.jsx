import React from "react";

const About = () => {
  return <section id="about" className="about pos-rel pb-140">
    <div className="container">
      <div className="row align-items-center mt-none-30">
        <div className="col-lg-6 mt-30">
          <div className="about__img pos-rel wow fadeInLeft">
            <img src="assets/img/about/about_img.png" alt="" />            
            <div className="about_shape">
              <img src="assets/img/shape/about_shape" alt=""/>
            </div>
          </div>
        </div>
      
      <div className="col-lg-6 mt-30">
        <div className="about__content wow fadeInRight" data-wow-delay="100ms">
          <div className="sec-title mb-35">
            <h5
            className="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
            <h2 className="sec-title__title mb-25">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident alias, sequi amet officia libero consectetur nam! Incidunt, adipisci repellat?
            </p>
          </div>

          <ul className="about__list ul_li">
            <li>
              <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Decentralized platform
            </li>
            <li>
            <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Rewards Mechanism
            </li>
            <li>
            <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Crowd Wisdom
            </li>
            <li>
            <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Investor protection
            </li>
            <li>
            <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Token Sale phases
            </li>
            <li>
            <img src="assets/img/icon/a_arrow.svg" alt=""/>
              Exchange Listing
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <div className="about_sec-shape">
      <img src="assets/img/shape/s_shape_2.pn"
      alt=""/>
    </div>
  </section>;
};

export default About;