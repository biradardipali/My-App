import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/NavigationBar';
import videoclip from '../../static/video/1.mp4';

import {card} from 'react-bootstrap'
import img1 from '../../images/2.png';

import { Slide } from 'react-slideshow-image';

const slideImages = [
    {img1},
    {img1},
    {img1}
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Navigation />

                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                }}>
                    <video id="background-video"  autoPlay
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '625px',
                        }}>
                        <source src={videoclip} type="video/mp4" />

                    </video>


                    <div className="contanier" id="welcome">
                        <div class="col-sm-12" id="welcome_div">
                            <div className="cards cards_div" >
                                {/* <h3>Hello..!!!</h3> */}
                                <Slide {...properties}>
                                    <div className="each-slide">
                                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                        
                                        <card style={{'text-align' : 'left'}}>
                                            <h3 style={{'text-align' : 'center','background': '#80808047'}}>Welcome</h3><br></br>
                                            <p>Life isn't about finding yourself. Life is about creating yourself.</p>
                                            <p>The most important thing is to enjoy your life - to be happy - it's all that matters.</p>
                                            <p>I have found that if you love life, life will love you back.</p>
                                            
                                        </card>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                        <card style={{'text-align' : 'left'}}>
                                            <h3 style={{'text-align' : 'center', 'background': '#80808047'}}>Welcome</h3><br></br>
                                            <p>Life isn't about finding yourself. Life is about creating yourself.</p>
                                            <p>The most important thing is to enjoy your life - to be happy - it's all that matters.</p>
                                            <p>I have found that if you love life, life will love you back.</p>
                                           
                                        </card>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                        <card style={{'text-align' : 'left'}}>
                                            <h3 style={{'text-align' : 'center','background': '#80808047'}}>Welcome</h3><br></br>
                                            <p>Life isn't about finding yourself. Life is about creating yourself.</p>
                                            <p>The most important thing is to enjoy your life - to be happy - it's all that matters.</p>
                                            <p>I have found that if you love life, life will love you back.</p>
                                           
                                        </card>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className="contanier" id="overlap">
                        <Carousel1>
                            <img src={img1} />
                            <img src={img1} />
                            <img src={img1} />
                            <img src={img1} />
                            <img src={img1} />
                            <img src={img1} />
                        </Carousel1>
                    </div>      */}

            </div>

        );
    }
}