import React from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Banner = () => {
    return (
        <section className='main'>
            <div className='container'>
                <div className='row'>
                    <h2>
                        <div className='line'>
                            <span>
                                Creating dynamic brands is
                            </span>
                        </div>

                        <div className='line'>
                            <span>
                                what I live for.
                            </span>
                        </div>
                    </h2>

                    <div className='btn-row'>
                        <a href='/'>
                            Learn more about me <RightArrow />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
