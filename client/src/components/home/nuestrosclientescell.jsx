import React from 'react'

import negocio from '../../assets/image/home/clientes_negocio.png'
import familia from '../../assets/image/home/clientes_familia.png'

export default function NuestrosClientesCell({proporcional}) {

    return (
        <div id='clientes' className='' style={{width: '100%', height: 'auto', paddingTop: 200 / proporcional, paddingBottom: 200 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <h2 style={{fontSize: 40 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#d5121e', fontFamily: 'Mont',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros clientes
                    </h2>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div className='d-flex justify-content-center shadow-sm rounded-pill' style={{width: '90%', height: 'auto'}}>
                            <img className='' src={negocio} style={{width: 400 / proporcional, height: 267 / proporcional}}/>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banschrift', fontWeight: 400,
                                    color: '#20294e', textAlign: 'center'}}>
                                    En CARAL DISTRIBUIDORA SAC, entendemos las exigencias. Sabemos que la calidad, el servicio y la eficiencia son claves para el éxito de su negocio. Por eso, nos hemos convertido en el aliado estratégico de restaurantes, hoteles y empresas de catering que buscan ofrecer experiencias gastronómicas únicas e inolvidables. Por eso gracias en su confianza por nuestro servicio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div className='d-flex justify-content-center shadow-sm rounded' style={{width: '90%', height: 'auto'}}>
                            <img className='' src={familia} style={{width: 400 / proporcional, height: 267 / proporcional}}/>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Banschrift', fontWeight: 400,
                                    color: '#20294e', textAlign: 'center'}}>
                                    En CARAL DISTRIBUIDORA SAC, sabemos que la alimentación de su familia es lo más importante. Por eso, nos esforzamos por llevar hasta su hogar productos saludables, deliciosos y de alta calidad, seleccionados con el mismo cuidado que usted pondría al elegirlos para los suyos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
