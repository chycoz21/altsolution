import Slider from "react-slick";
import { project } from "../../../data/dami-data";


function SampleNextArrow(props) {
    const { style, onClick, getWitdh } = props;
    const ternariTop = getWitdh > 700 ? '193px' : '84px'
    const ternariRight = getWitdh > 700 ? '-1px' : '-12px'
    const handleCircle = getWitdh > 700 ? '46' : '26'
    return (
        <div
            className={'custom-next-arrow'}
            style={{
                ...style,
                position: 'absolute',
                right: ternariRight,
                top: ternariTop,
                cursor: 'pointer'
            }}
            onClick={onClick}
        >
            <svg width={handleCircle} height={handleCircle} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_7_140)">
                    <circle cx="23" cy="19" r="19" fill="white" />
                    <path d="M20.0351 12L26.7252 19L20.0351 26" stroke="#100303" strokeWidth="2" />
                </g>
                <defs>
                    <filter id="filter0_d_7_140" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_140" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_140" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick, getWitdh } = props;
    const ternariTop = getWitdh > 700 ? '193px' : '84px'
    const handleCircle = getWitdh > 700 ? '46' : '26'
    return (
        <div
            className={'custom-prev-arrow'}
            style={{
                ...style,
                zIndex: '1',
                top: ternariTop,
                position: 'absolute',
                cursor: 'pointer',
                left: getWitdh > 700 ? '-22px' : '-12px'
            }}
            onClick={onClick}
        >
            <svg width={handleCircle} height={handleCircle} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_7_141)">
                    <circle cx="23" cy="19" r="19" fill="white" />
                    <path d="M26.7252 26L20.0351 19L26.7252 12" stroke="#100303" strokeWidth="2" />
                </g>
                <defs>
                    <filter id="filter0_d_7_141" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_141" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_141" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>

    );
}

export const SlickProject = ({ getWitdh }) => {
    const slideToShow = getWitdh > 700 ? 3 : 1
    const variableWidth = getWitdh > 700 ? false : true
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        variableWidth: variableWidth,
        nextArrow: <SampleNextArrow getWitdh={getWitdh} />,
        prevArrow: <SamplePrevArrow getWitdh={getWitdh} />
    };
    return (
        <div className="slider-container">

            <Slider {...settings}>
                {project.map((item, index) => {
                    const img = item?.img
                    const nameProduct = item?.nameProduct
                    return (
                        <div className="slick-img" key={index}>
                            <img src={img} onClick={() => { console.log(index, 'sss') }} />
                            <span>{nameProduct}</span>
                            {console.log(index, 's')}
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

