import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import styled from 'styled-components'

const Wrapper = styled.div`
    transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
    background-color: #${(props) => props.color};
`;

const Slider = () => {

    const [sliderIndex, setsliderIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction == "left") {
            setsliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setsliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    };

    return (
        <section className="slider-section">
            <div className="slider-arrow-left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <Wrapper className="slider-wrapper" sliderIndex={sliderIndex}>
                {sliderItems.map(item=>(
                    <Slide className="slider-slide" color={item.color}>
                        <div className="slider-img-container">
                            <img className="slider-img" src={item.img} />
                        </div>
                        <div className="slider-info-container">
                            <h1 className="slider-title">{item.title}</h1>
                            <p className="slider-desc">{item.desc}</p>
                            <button className="slider-btn">SHOP NOW</button>
                        </div>
                    </Slide>
                ))}
            </Wrapper>
            <div className="slider-arrow-right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </section>
	);
}

export default Slider;