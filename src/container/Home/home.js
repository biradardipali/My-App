import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/NavigationBar';
import videoclip from '../../static/video/2.mp4';



export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Navigation />

                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    marginTop:'-14.6%'
                }}>
                    <video id="background-video" loop autoPlay
                        preload="auto" style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}>
                        <source src={videoclip} type="video/mp4" />

                    </video>
                    <div className="container">

                    </div>
                </div>
            </div>

        );
    }
}