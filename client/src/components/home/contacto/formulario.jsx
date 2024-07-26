import React, { useState } from 'react'

export default function Formulario({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [tipo, setTipo] = useState('')
    const [correo, setCorreo] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')
    
    const [enombres, setENombres] = useState(false)
    const [etipo, setETipo] = useState(false)
    const [ecorreo, setECorreo] = useState(false)
    const [enro_telefono, setENroTelefono] = useState(false)
    const [emensaje, setEMensaje] = useState(false)

    const [boton_mensaje, setBotonMensaje] = useState(false)

    const enviar_mensaje = () => {
        if (nombres === '' || tipo === '' || correo === '' || nro_telefono === '' || mensaje === ''){
            setENombres(nombres === '' ? true : false)
            setETipo(tipo === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEMensaje(mensaje === '' ? true : false)
        }else {
            setENombres(false)
            setETipo(false)
            setECorreo(false)
            setENroTelefono(false)
            setEMensaje(false)
            
            const data_mensaje = {
                nombres: nombres,
                tipo: tipo,
                correo: correo,
                nro_telefono: nro_telefono,
                mensaje: mensaje
            }

            console.log (data_mensaje)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 30 / proporcional}}>
                <select
                    id='tipo'
                    className='form-select rounded'
                    value={tipo}
                    onChange={(event) => event.target.value !== '0' ? setTipo(event.target.value) : null}
                    style={{width: '48%', height: 50 / proporcional, background: 'white', fontSize: 18 / proporcional, lineHeight: `${36 / proporcional}px`,
                            color: 'black', fontFamily: 'Montserrat', border: etipo ? '2px solid red' : 'none'}}>
                    <option value='0'>Seleccionar</option>
                    <option value='Negocio'>Negocio</option>
                    <option value='Natural'>Natural</option>
                </select>
                <input
                    id='nombres'
                    type='default'
                    className='form-control rounded'
                    value={nombres}
                    onChange={(event) => setNombres(event.target.value)}
                    style={{width: '48%', height: 50 / proporcional, background: 'white', fontSize: 18 / proporcional, lineHeight: `${36 / proporcional}px`,
                            color: 'black', fontFamily: 'Montserrat', border: enombres ? '2px solid red' : 'none'}}
                    placeholder='Nombres'/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 30 / proporcional}}>
                <input
                    id='e-mail'
                    className='form-control rounded'
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)}
                    style={{width: '48%', height: 50 / proporcional, background: 'white', fontSize: 18 / proporcional, lineHeight: `${36 / proporcional}px`,
                            color: 'black', fontFamily: 'Montserrat', border: enro_telefono ? '2px solid red' : 'none'}}
                    placeholder='Correo electrónico'/>
                <input
                    id='number'
                    className='form-control rounded'
                    value={nro_telefono}
                    onChange={(event) => setNroTelefono(event.target.value)}
                    style={{width: '48%', height: 50 / proporcional, background: 'white', fontSize: 18 / proporcional, lineHeight: `${36 / proporcional}px`,
                            color: 'black', fontFamily: 'Montserrat', border: ecorreo ? '2px solid red' : 'none'}}
                    placeholder='Número de contacto'/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 150 / proporcional, marginBottom: 30 / proporcional}}>
                <textarea
                    id='mensaje'
                    className='form-control rounded'
                    value={mensaje}
                    rows={4}
                    onChange={(event) => setMensaje(event.target.value)}
                    style={{width: '100%', height: 150 / proporcional, background: 'white', fontSize: 18 / proporcional, lineHeight: `${36 / proporcional}px`,
                            color: 'black', fontFamily: 'Montserrat', border: emensaje ? '2px solid red' : 'none'}}
                    placeholder='Deje su mensaje'/>
            </div>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 150 / proporcional, marginBottom: 30 / proporcional}}>
                <div className='rounded' 
                    style={{width: 200 / proporcional, height: 50 / proporcional, background: boton_mensaje ? 'rgba(213, 18, 30, 0.8)' : 'rgb(213, 18, 30)',
                        cursor: 'pointer'}} onMouseOver={() => setBotonMensaje(true)} onMouseLeave={() => setBotonMensaje(false)}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, fontFamily: 'Open Sans', fontWeight: 600,
                        color: 'white', textAlign: 'center'}}>
                        Enviar mensaje
                    </p>                
                </div>
            </div>
        </div>
    )
}
