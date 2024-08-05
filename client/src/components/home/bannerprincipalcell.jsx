import React from 'react'

import background_00 from '../../assets/image/home/background_00_cell.png'
import background_01 from '../../assets/image/home/background_01_cell.png'
import background_02 from '../../assets/image/home/background_02_cell.png'
import background_03 from '../../assets/image/home/background_03_cell.png'

export default function BannerPrincipalCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 820 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 820 / proporcional}}>
                <div id='carouselbannercell' className='carousel slide' style={{width: '100%', height: 820 / proporcional}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselbannercell" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselbannercell" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselbannercell" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselbannercell" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    <div className='carousel-inner' style={{width: '100%', height: 820 / proporcional, paddingTop: 100 / proporcional}}>
                        <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 720 / proporcional, 
                                backgroundImage: `url(${background_00})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 60 / proporcional, top: 120 / proporcional}}>
                                <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL DISTRIBUIDORA <br/>SAC 
                                </h1>
                                <h3 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, <br/>Restaurantes y Catering.
                                </h3>
                            </div>
                        </div>
                        
                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 720 / proporcional, 
                                backgroundImage: `url(${background_01})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 60 / proporcional, top: 120 / proporcional}}>
                                <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL DISTRIBUIDORA <br/>SAC 
                                </h1>
                                <h3 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, <br/>Restaurantes y Catering.
                                </h3>
                            </div>
                        </div>
                        
                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 720 / proporcional, 
                                backgroundImage: `url(${background_02})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 60 / proporcional, top: 120 / proporcional}}>
                                <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL DISTRIBUIDORA <br/>SAC 
                                </h1>
                                <h3 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, <br/>Restaurantes y Catering.
                                </h3>
                            </div>
                        </div>

                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 720 / proporcional, 
                                backgroundImage: `url(${background_03})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 60 / proporcional, top: 120 / proporcional}}>
                                <h1 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL DISTRIBUIDORA <br/>SAC 
                                </h1>
                                <h3 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselbannercell" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselbannercell" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
