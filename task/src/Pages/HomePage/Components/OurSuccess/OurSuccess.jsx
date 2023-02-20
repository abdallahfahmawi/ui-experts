import React from "react";
import SuccessCard from "./SuccessCard";
import HomeData from "../../../../store/data/HomeData";
import "./OurSuccess.scss"


const OurSuccess = () => {
    return (
        <div className=" container our-success-holder">
            <div className="success-title text-center">
                <h3>Our Success</h3>
                <p>View our portfolio in catagoris</p>
            </div>
            <div className="row p-0">
                {HomeData.successData.map(data => <div className="col-lg-4 col-md-4 col-sm-4 col-4" key={data.id}>
                    <SuccessCard className={data.CardColor} cardTitle = {data.title}  end={data.number}/>
                </div>)}
            </div>
        </div>
    );
};

export default OurSuccess