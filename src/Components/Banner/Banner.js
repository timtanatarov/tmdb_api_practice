import React from 'react';

export const Banner = (props) => {
    return (
        <div className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/3lwf8ps2MKa4ECBihjE91W6pjUd.jpg')`, backgroundPosition:'center', backgroundSize:'cover'}}>
            <div className='banner__content'>
                <h1 className='banner__title'>
                    Movie Name
                </h1>
                <div className='banner__buttons'>
                    <button>Play</button>
                    <button>My list</button>
                </div>
                <div className='banner__description'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab accusantium dolorum et, eveniet explicabo nobis veniam veritatis!
                        A aspernatur at consequatur, corporis cum, debitis dolor eos ex facilis
                        itaque minus nam nostrum officia perferendis qui reiciendis, sapiente
                        temporibus. Assumenda beatae culpa doloribus ducimus fugit modi nostrum
                        nulla numquam perferendis ratione.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;