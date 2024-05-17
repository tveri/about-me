import React from 'react';
import Header from '../../components/Header/Header';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import cl from './LandingPage.module.css'


const LandingPage = () => {
    return (
        <>
            <Header />
            <div className={cl.page}>
                <div className={cl.text_container}>
                    <AnimatedText />
                </div>
                <div className={cl.photo_container}>
                    <img src={process.env.PUBLIC_URL + '/photo.jpg'} />
                </div>

            </div>
        </>
    );
}

export default LandingPage;
