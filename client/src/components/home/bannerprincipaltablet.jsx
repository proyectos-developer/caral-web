import React from 'react'

export default function BannerPrincipalTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 820 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 820 / proporcional}}>
                <div id='carouselbanner' className='carousel slide' style={{width: '100%', height: 820 / proporcional}}>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className='carousel-inner' style={{width: '100%', height: 820 / proporcional}}>
                        <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 820 / proporcional}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 100 / proporcional, top: '40%'}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#FFD700', fontFamily: 'Playfair Display',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL <br/>DISTRIBUIDORA SAC 
                                </h1>
                                <h1 style={{fontSize: 30 / proporcional, fontWeight: 500, lineHeight: `${40 / proporcional}px`, color: 'white', fontFamily: 'Open Sans',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, Restaurantes<br/> y Catering.
                                </h1>
                            </div>

                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselbanner" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselbanner" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
