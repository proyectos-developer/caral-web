import React from 'react'

export default function BannerPrincipalCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 720 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 720 / proporcional}}>
                <div id='carouselbanner' className='carousel slide' style={{width: '100%', height: 720 / proporcional}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className='carousel-inner' style={{width: '100%', height: 720 / proporcional}}>
                        <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 720 / proporcional}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 60 / proporcional, top: '35%'}}>
                                <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#FFD700', fontFamily: 'Playfair Display',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL DISTRIBUIDORA <br/>SAC 
                                </h1>
                                <h1 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, <br/> Restaurantes y Catering.
                                </h1>
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
