import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import img1 from '../../../../img/slide1.jpg';
import img2 from '../../../../img/slide2.jpg';
import img3 from '../../../../img/slide3.jpg';
import img4 from '../../../../img/slide4.jpg';
import img5 from '../../../../img/slide5.jpg';

export default function Slider() {
    const imgList = [img1, img2, img3, img4];
    let currIdx = 1;
    const slideRef = useRef();
    useEffect(() => {
        setInterval(() => {
            // slideRef.current.style.left = `-${currIdx * slideRef.current.clientWidth / 5}px`;
            // slideRef.current.style.transition = 'left 2s';
            // // currIdx += 1;
            // currIdx += 1;
            // if (currIdx > 5) {
            //     slideRef.current.style.transition = 'none';
            //     slideRef.current.style.left = 0;
            //     currIdx = 1;
            // }
        }, 2000)
    });
    return (
        <div className="slider_box">
            <div className="slide_wrapper" ref={slideRef}>
                {
                    imgList.map((item, idx) => {
                        return <img
                            src={item}
                            id={`img${idx+1}`}
                            alt=""
                            key={item}
                        />;
                    })
                }
            </div>
        </div>

    );
};