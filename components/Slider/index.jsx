import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 100000
    };
    return (
      <div className="mx-40 text-white">
        <h2 className="text-center text-slate-100">Үйлчлүүлэгч нарын сэтгэгдэл</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="mx-2">
            <div className="bg-[#08205D] flex justify-center">
                <img className="h-20" src='/../../icon/woman.png'/>
            </div>
          </div>
          <div className="mx-4">
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}