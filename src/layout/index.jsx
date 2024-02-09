import React from "react";
import bgImg1 from "../assets/images/background/chibi-bg-2024.png";
import phaoHoa from "../assets/gif/phaoHoa.gif";
import RutLiXi from "../components/RutLiXi";
const LayoutMain = () => {
    return (
        <>
            <div className="layout-main">
                <img src={bgImg1} alt="" />
            </div>
            <img src={phaoHoa} className="phao-hoa-left" alt="" />
            <img src={phaoHoa} className="phao-hoa-right" alt="" />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 100,
                }}
            >
                <RutLiXi />
            </div>
        </>
    );
};

export default LayoutMain;
