import React from "react";
import bgImg1 from "../assets/images/background/chibi-bg-2024.png";
import phaoHoa from "../assets/gif/phaoHoa.gif";
import bgTroChoi from "../assets/images/games/bg-trochoi.png";
import { Modal } from "antd";
import { useState } from "react";
import RutLiXi from "../components/RutLiXi";
const LayoutMain = () => {
    const [openWheel, setOpenWheel] = useState(true);
    const closeWheel = () => {
        setOpenWheel(!openWheel);
    };
    return (
        <>
            <div className="layout-main">
                <img src={bgImg1} alt="" />
            </div>
            <div className="phao-hoa-left"></div>
            <div className="phao-hoa-right"></div>

            {openWheel && (
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
            )}
            {/* <Modal
                title={null}
                open={openWheel}
                footer={null}
                onCancel={closeWheel}
                className="custom-modal"
                zIndex={1}
            >
                <img src={bgTroChoi} alt="" />
            </Modal>

            {openWheel && (
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
            )} */}
        </>
    );
};

export default LayoutMain;
