import React from 'react'

import image_nosotros from '../../assets/image/home/imagen_nosotros.png'
import mision from '../../assets/iconos/home/mision_dorado.png'
import vision from '../../assets/iconos/home/vision_dorado.png'

export default function SobreNosotrosTablet({proporcional}) {

    return (
        <div id='nosotros' className='' style={{width: '100%', height: 'auto', paddingTop: 200 / proporcional, paddingBottom: 200 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='' style={{width: '100%', height: 676 / proporcional, marginBottom: 32 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                        <div className='d-flex justify-content-center rounded-pill' style={{width: '100%', height: 650 / proporcional, 
                                marginTop: 13 / proporcional, marginBottom: 13 / proporcional}}>
                            <img className='rounded-pill shadow-lg'  src={image_nosotros} style={{width: 500 / proporcional, height: 650 / proporcional}}/>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                        <div className='' style={{width: '100%', height: 'auto', padding: 25 / proporcional}}>
                            <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                                marginBottom: 30 / proporcional, cursor: 'default'}}>
                                MAS QUE UN DISTRIBUIDOR
                            </h2>
                            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banshrif', fontWeight: 400,
                                    color: '#20294e'}}>
                                    En CARAL DISTRIBUIDORA SAC, somos más que un distribuidor de productos, somos su socio estratégico para el éxito en la industria gastronómica. Permítanos compartir con usted, la pasión y el compromiso que impulsan nuestro negocio y cómo podemos contribuir al éxito de su empresa.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '48%', height: 'auto'}}>
                                    <div className='d-flex' style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                                        <img src={mision} style={{width: 64 / proporcional, height: 64 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional,
                                            paddingLeft: 0, paddingRight: 16 / proporcional}}/>
                                        <h3 style={{fontSize: 40 / proporcional, fontWeight: 600 / proporcional, color: '#d5121e', fonntFamily: 'Mont',
                                            cursor: 'default', marginBottom: 0, lineHeight: `${64 / proporcional}px`}}>Misión</h3>
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banshrif', fontWeight: 400,
                                            color: '#20294e'}}>
                                             "Nuestra misión es proveer a nuestros clientes con productos exclusivos y de alta calidad que mejoren su oferta gastronómica y satisfagan a sus clientes más exigentes."
                                        </p>
                                    </div>
                                </div>

                                <div style={{width: '48%', height: 'auto'}}>
                                    <div className='d-flex' style={{width: '100%', height: 64 / proporcional, marginBottom: 20 / proporcional}}>
                                        <img src={vision} style={{width: 64 / proporcional, height: 64 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional,
                                            paddingLeft: 0, paddingRight: 16 / proporcional}}/>
                                        <h3 style={{fontSize: 40 / proporcional, fontWeight: 600 / proporcional, color: '#d5121e', fonntFamily: 'Mont',
                                            cursor: 'default', marginBottom: 0, lineHeight: `${64 / proporcional}px`}}>Visión</h3>
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banshrif', fontWeight: 400,
                                            color: '#20294e'}}>
                                            "Ser reconocidos como una distribuidora que brinda soluciones integrales y personalizadas que impulsan el crecimiento y éxito de nuestros clientes."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
