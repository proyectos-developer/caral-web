import React from 'react'

import negocio from '../../assets/image/home/clientes_negocio.png'
import familia from '../../assets/image/home/clientes_familia.png'

export default function NuestrosClientesCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div id='clientes' className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <h2 style={{fontSize: 48 / proporcional, fontWeight: 700, lineHeight: `${60 / proporcional}px`, color: '#FFD700', fontFamily: 'Playfair Display',
                        marginBottom: 30 / proporcional, cursor: 'default'}}>
                        Nuestros clientes
                    </h2>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <img className='shadow-lg' src={negocio} style={{width: 400 / proporcional, height: 267 / proporcional}}/>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Open Sans', fontWeight: 400,
                                    color: 'white', textAlign: 'center'}}>
                                    En CARAL DISTRIBUIDORA SAC, entendemos las exigencias.  Sabemos que la calidad, la exclusividad y la eficiencia son clave para el éxito de su negocio. Por eso, nos hemos convertido en el aliado estratégico de restaurantes, hoteles y empresas de catering que buscan ofrecer experiencias gastronómicas únicas e inolvidables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <img className='shadow-lg' src={familia} style={{width: 400 / proporcional, height: 267 / proporcional}}/>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Open Sans', fontWeight: 400,
                                    color: 'white', textAlign: 'center'}}>
                                    En CARAL DISTRIBUIDORA SAC, sabemos que la alimentación de su familia es lo más importante. Por eso, nos esforzamos por llevar hasta su hogar los productos más frescos, saludables y deliciosos, seleccionados con el mismo cuidado que usted pondría al elegirlos para los suyos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
