import React, { Component } from 'react'
import { FaTruck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { RiPinDistanceFill } from "react-icons/ri";

export default class Advanteges extends Component {
    render() {
        return (
            <>
                <h2 className="adv-header">Наши преимущества</h2>
                <div className="advanteges-block">
                    <div className="single-advantage">
                        <div className="icon"><FaTruck /></div>
                        <div className="adv-text">Быстрая доставка</div>
                    </div>
                    <div className="single-advantage">
                        <div className="icon"><FaCoins /></div>
                        <div className="adv-text">Лучшие цены</div>
                    </div>
                    <div className="single-advantage">
                        <div className="icon"><Ri24HoursLine /></div>
                        <div className="adv-text">Круглосуточная работа</div>
                    </div>
                    <div className="single-advantage">
                        <div className="icon"><RiPinDistanceFill /></div>
                        <div className="adv-text">Филиалы по всей России</div>
                    </div>
                </div>
            </>

        )
    }
}
