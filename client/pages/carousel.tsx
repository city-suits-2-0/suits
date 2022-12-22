import React from 'react'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://img.freepik.com/free-photo/young-african-businessman-classy-suit_1303-18430.jpg?w=996&t=st=1671733006~exp=1671733606~hmac=9130befb14c278e125b82e82d877b20fac606539bccb6c7867b050ff62b028af"
  },
  {
    url:
      "https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,h_1500,q_100/v1671027251/tenue-classe-pour-homme_qvxxka.jpg"
  },
  {
    url:
      "https://res.cloudinary.com/drd0uckic/image/upload/v1671065453/if0iapqnba1a46atxsif.jpg"
  },
  { url: "https://res.cloudinary.com/dn9qfvg2p/image/upload/q_100/v1671039200/5-idees-looks-et-conseils-pour-une-tenue-classe-pour-homme_t58yxq.jpg" }
];
const carousel = () => {

  return (
    <div className="Appp">

      <SimpleImageSlider
        width={1519}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
      />
      <br></br>
      <div className="container">
        {/* Gallery */}
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_1024/suitsupply/campaigns/fw22/drago-mill/drago-d-02.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_500/v1671101369/w2_vnxviv.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_500/v1671101434/w3_l3kfbn.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_1920/suitsupply/campaigns/fw22/drago-mill/drago-d-10.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_1300/suitsupply/campaigns/fw21/mills/thomas-mason/thomas-mason-D-3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="https://res.cloudinary.com/dn9qfvg2p/image/upload/v1671101900/mens-fashion_d7crd6.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
        {/* Gallery */}
      </div>

    </div>

  )
}

export default carousel
