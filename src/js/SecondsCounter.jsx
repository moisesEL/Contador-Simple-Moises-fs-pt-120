import React from "react";

const SecondsCounter = ({ segundos }) => {

    const digitSix = Math.floor(segundos / 100000);
    const digitFive = Math.floor(segundos / 10000);
    const digitFour = Math.floor(segundos / 1000);
    const digitThree = Math.floor(segundos / 100);
    const digitTwo = Math.floor(segundos / 10);
    const digitOne = segundos;

    return (
        <div className="d-inline-block">
            <div className="bg-dark text-white d-flex justify-content-center p-3 fs-1 rounded">

                < div className="mx-3" >
                    <i className="fa-regular fa-clock"></i>

                </div >

                <div className="mx-2 bg-secondary rounded px-3">{digitSix % 10}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digitFive % 10}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digitFour % 10}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digitThree % 10}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digitTwo % 10}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digitOne % 10}</div>
            </div >
        </div >
    );
};

export default SecondsCounter;
