import React, { Component } from 'react'
import {Link} from 'react-router-dom';


import './Home.css';

import Mobile from './mobile/Mobile';
import Headphones from './headphones/Headphones';
import Wearable from './wearables-devices/Wearable';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Best Phones</h2>
               <Link to="/mobile-phones"> <button className="view-all">View All</button></Link>
                <div className="cards">             
                    <div className="mobile-phones"> 
                        <Mobile />
                    </div>
                </div>

                <h2>Headphones and Speakers</h2>
                <button className="view-all">View All</button>
                <div className="cards">             
                    <div className="mobile-phones"> 
                        <Headphones />
                    </div>
                </div>

                <h2>Wearables and Home Devices</h2>
                <button className="view-all">View All</button>
                <div className="cards">             
                    <div className="mobile-phones"> 
                        <Wearable />
                    </div>
                </div>

            </div>
        )
    }
}
