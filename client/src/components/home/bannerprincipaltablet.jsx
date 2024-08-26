import React, { useState } from 'react'

import background_00 from '../../assets/image/home/background_00_tablet.png'
import background_01 from '../../assets/image/home/background_01_tablet.png'
import background_02 from '../../assets/image/home/background_02_tablet.png'
import background_03 from '../../assets/image/home/background_03_tablet.png'

export default function BannerPrincipalTablet({proporcional}) {

    const [boton_slide_3, setBotonSlide3] = useState(false)

    return (
        <div style={{width: '100%', height: 920 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 920 / proporcional}}>
                <div id='carouselbanner' className='carousel slide' style={{width: '100%', height: 920 / proporcional}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    <div className='carousel-inner' style={{width: '100%', height: 920 / proporcional, paddingTop: 100 / proporcional}}>
                        <div className='carousel-item active' data-bs-interval='3000' style={{width: '100%', height: 820 / proporcional, 
                                backgroundImage: `url(${background_00})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: '40%', top: '30%'}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos Gourmet
                                </h1>
                                {/**<h3 style={{fontSize: 30 / proporcional, fontWeight: 500, lineHeight: `${40 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Productos exclusivos para Hoteles, Restaurantes<br/> y Catering.
                                </h3>**/}
                            </div>

                        </div>
                        
                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 820 / proporcional, 
                                backgroundImage: `url(${background_01})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', top: '35%', left: 100 / proporcional}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Vamos a todo el Perú
                                </h1>
                                <h3 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${25 / proporcional}px`, color: '#20294e', fontFamily: 'Banschrift',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                        (Frases opcionales se pueden reemplazar)<br/>
                                    "Llegamos a cada rincón del Perú", <br/> "Conectamos el Perú, entregamos confianza." <br/>
                                    "Tu socio confiable para distribuir en todo el Perú." <br/> "El Perú en tus manos, seguro y a tiempo."
                                </h3>
                            </div>

                        </div>
                        
                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 820 / proporcional,
                                /**backgroundImage: `url(${background_02})`,**/ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 100 / proporcional, top: '35%'}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    CARAL HOME 
                                </h1>
                                <div className={boton_slide_3 ? 'shadow-lg rounded-pill' : 'shadow rounded-pill'} style={{width: 300 / proporcional, height: 60 / proporcional, background: '#20294e',
                                    cursor: 'pointer'
                                }} onMouseOver={() => setBotonSlide3(true)} onMouseLeave={() => setBotonSlide3(false)}>
                                    <p style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${60 / proporcional}px`, color: 'white', fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0 / proporcional, cursor: 'default', textAlign: 'center'}}>
                                        VER PRODUCTOS
                                    </p>
                                </div>
                            </div>

                        </div>
                        
                        <div className='carousel-item' data-bs-interval='3000' style={{width: '100%', height: 820 / proporcional, /**backgroundImage: `url(${background_03})`,**/
                            backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 100 / proporcional, top: '35%'}}>
                                <h1 style={{fontSize: 64 / proporcional, fontWeight: 700, lineHeight: `${80 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                    marginBottom: 30 / proporcional, cursor: 'default'}}>
                                    Merchandising para empresas
                                </h1>
                                <div className={boton_slide_3 ? 'shadow-lg rounded-pill' : 'shadow rounded-pill'} style={{width: 300 / proporcional, height: 60 / proporcional, background: '#20294e',
                                    cursor: 'pointer'
                                }} onMouseOver={() => setBotonSlide3(true)} onMouseLeave={() => setBotonSlide3(false)}>
                                    <p style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${60 / proporcional}px`, color: 'white', fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0 / proporcional, cursor: 'default', textAlign: 'center'}}>
                                        VER PRODUCTOS
                                    </p>
                                </div>
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
