import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96 bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/portrait-asian-adult-female-woman-wear-apron-standing-entrance-her-workshop-pottery-studio-incasual-cloth-relax-smiling-confident-warm-welcomeasian-woman-with-her-home-studio-workshop_609648-2686.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-xl">Would you love some baked food right now? <br /> I am here, just ready to bake for you!</p>
                    <small>Always at your service</small>
                </div>
            </div>
        </div>
    );
};

export default Banner;