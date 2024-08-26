import React from 'react'

import negocio from '../../assets/image/home/clientes_negocio.png'
import familia from '../../assets/image/home/clientes_familia.png'


export default function NuestrosClientes({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
            <div id='clientes' className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional, paddingLeft: 250 / proporcional, 
                        paddingRight: 250 / proporcional}}>
                    <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros clientes
                    </h2>
                </div>
                <div style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div className='' style={{width: '48%', height: 'auto'}}>
                            <div className='position-relative' style={{width: '100%', height: 400 / proporcional}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banschrift', fontWeight: 400,
                                        color: '#20294e'}}>
                                        En CARAL DISTRIBUIDORA SAC, entendemos las exigencias. Sabemos que la calidad, el servicio y la eficiencia son claves para el éxito de su negocio. Por eso, nos hemos convertido en el aliado estratégico de restaurantes, hoteles y empresas de catering que buscan ofrecer experiencias gastronómicas únicas e inolvidables. Por eso gracias en su confianza por nuestro servicio.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center shadow-sm rounded-circle' style={{width: '48%', height: 'auto', background: 'transparent'}}>
                            <img className='rounded-circle' src={negocio} style={{width: 600 / proporcional, height: 400 / proporcional}}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center shadow-sm rounded' style={{width: '48%', height: 'auto', background: 'transparent'}}>
                            <img className='rounded' src={familia} style={{width: 600 / proporcional, height: 400 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '48%', height: 'auto'}}>
                            <div className='position-relative' style={{width: '100%', height: 400 / proporcional}}>
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banschrift', fontWeight: 400,
                                        color: '#20294e'}}>
                                            En CARAL DISTRIBUIDORA SAC, sabemos que la alimentación de su familia es lo más importante. Por eso, nos esforzamos por llevar hasta su hogar productos saludables, deliciosos y de alta calidad, seleccionados con el mismo cuidado que usted pondría al elegirlos para los suyos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
