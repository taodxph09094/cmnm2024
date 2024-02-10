import React, { useState, useEffect } from "react";
import lixi from "../assets/images/lixi/lixi-cute-dong.png";
import lixi_mo from "../assets/images/lixi/lixi-cute-mo.png";
export const li_xi = [
    {
        price: "10k",
        tiLe: "20%",
    },
    {
        price: "20k",
        tiLe: "20%",
    },
    {
        price: "50k",
        tiLe: "20%",
    },
    {
        price: "100k",
        tiLe: "20%",
    },
    {
        price: "20k",
        tiLe: "10%",
    },
    {
        price: "20k",
        tiLe: "10%",
    },
];

const RutLiXi = () => {
    const [shuffledList, setShuffledList] = useState([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [displayPrice, setDisplayPrice] = useState(null);
    useEffect(() => {
        const shuffledArray = [...li_xi].sort(() => Math.random() - 0.5);
        setShuffledList(shuffledArray);
    }, []);

    const handleOpen = (item, index) => {
        setSelectedItemIndex(index);
        setDisplayPrice(null);

        setTimeout(() => {
            setDisplayPrice(item.price);
        }, 1000);
    };
    return (
        <div className="rut-li-xi-container">
            {shuffledList.map((item, index) => (
                <div key={index} className="rut-li-xi-item">
                    <img
                        src={`${selectedItemIndex === index && displayPrice ? lixi_mo : lixi}`}
                        alt=""
                        className={`anh-li-xi  ${selectedItemIndex === index ? "mo" : "dong"
                            }`}
                        onClick={() => handleOpen(item, index)}
                    />
                    {selectedItemIndex === index && displayPrice && (
                        <p className="tien-ne">{displayPrice}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RutLiXi;
