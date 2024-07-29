import React from 'react'

import '../../styles.css'
import vinos from '../../assets/image/home/vino.png'

export default function BannerPrincipal({proporcional}) {

    return (
        <div style={{width: '100%', height: 920 / proporcional, backgroundImage: `url(${vinos})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 920 / proporcional}}>
                <div id='carouselbanner' className='carousel slide' style={{width: '100%', height: 920 / proporcional}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className='carousel-inner' style={{width: '100%', height: 920 / proporcional}}>
                        <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 920 / proporcional}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 250 / proporcional, top: '50%'}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL <br/>DISTRIBUIDORA SAC 
                                </h1>
                                <h3 style={{fontSize: 30 / proporcional, fontWeight: 500, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, Restaurantes<br/> y Catering.
                                </h3>
                            </div>

                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselbanner" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselbanner" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
