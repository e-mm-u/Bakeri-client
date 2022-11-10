import React from 'react';

const MyStory = () => {
    return (
        <div>
            <h1 className='divider text-bold text'> "   _   " </h1>
            <div className="hero min-h-80 bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img src="https://img.freepik.com/free-photo/portrait-asian-adult-female-woman-wear-apron-standing-entrance-her-workshop-pottery-studio-incasual-cloth-relax-smiling-confident-warm-welcomeasian-woman-with-her-home-studio-workshop_609648-2686.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='me'/>
                    <div>
                        <h1 className="text-4xl font-semibold">My journey</h1>
                        <p className="py-6 text-md">My journey as <code className='font-bold text-xl'> Backer<span className='text-red-400 text-2xl'>i </span></code> started at 2017.I was still a college student back then. I used to gift cakes, baked by me, on friends birthday. They all loved my baked cakes. I used to make Pizza for my cousins and relatives. And I experimented all baked things in home. So at the end I became a professional and hope to have you by my side!  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyStory;