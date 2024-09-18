import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import logo from '../../assets/logo/logo_menu_superior.png'
import menu from '../../assets/iconos/menu/menu.png'

import {set_open_menu_main} from '../../redux/actions/data.js'

export default function MenuSuperiorTablet({proporcional}) {

    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='' style={{width: '100%', height: 120 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional,
                background: 'rgba(192, 225, 215, 0.8)'
        }}>
            <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='d-flex jusfity-content-between' style={{width: '100%', height: 80 / proporcional}}>
                    <div style={{width: '50%', height: 80 / proporcional}}>
                        <a href='/#' style={{width: 'auto', height: 'auto', textDecoration: 'none'}}>
                            <img src={logo} style={{width: 354 / proporcional, height: 80 / proporcional, cursor: 'pointer'}}/>
                        </a>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 80 / proporcional}}>
                        <div style={{width: 'auto', height: 80 / proporcional, padding: 20 / proporcional, paddingRight: 0, paddingLeft: 40 / proporcional,
                                cursor: 'pointer'}}>
                            <img src={menu} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 5 / proporcional, cursor: 'pointer'}}
                                onClick={() => dispatch(set_open_menu_main(!open_menu_main))}/>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
