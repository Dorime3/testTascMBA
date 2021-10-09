import React, { useState, useRef } from 'react'
import { SvgSelector } from '../assets/images/SvgSelector';
import s from '../Managment.module.scss'



export const ProgramManagment = (props) => {
    const [toggleActiveLeft, setToggleActiveLeft] = useState('active');
    const [toggleActiveRight, setToggleActiveRight] = useState('active');
    const [contentHeightLeft, setContentHeightLeft] = useState('');
    const [contentHeightRight, setContentHeightRight] = useState('');
    const content = useRef();

    const toggleAccordion = (e) => {
        if (e.target.innerHTML === '1 модуль') {
            setToggleActiveLeft(toggleActiveLeft === '' ? 'active' : '');
            setContentHeightLeft(toggleActiveLeft === 'active' ? '0px' : `${content.current.scrollHeight + 50}px`)
        } else {
            setToggleActiveRight(toggleActiveRight === '' ? 'active' : '');
            setContentHeightRight(toggleActiveRight === 'active' ? '0px' : `${content.current.scrollHeight + 50}px`)
        }
    }

    return (<>
        <h3 className={s.header}>{props.title}</h3>
        <section className={s.managment}>
            <div className={s.moduleStyle}>
                <div className={s.toggleSymbol}>
                    {toggleActiveLeft === 'active' ? <SvgSelector id='minus' /> : <SvgSelector id='plus' />}
                </div>
                <div onClick={toggleAccordion} className={`${s.moduleStep} ${toggleActiveLeft}`}>1 модуль</div>
                <ul ref={content} style={{ maxHeight: `${contentHeightLeft}` }}>
                    {props.subjects.map((el, i) => { return (i < 5) && <li key={i}>{el}</li> })}
                </ul>
            </div>
            {props.subjects.length > 5 && <div className={s.moduleStyle}>
                <div className={s.toggleSymbol}>
                    {toggleActiveRight === 'active' ? <SvgSelector id='minus' /> : <SvgSelector id='plus' />}
                </div>
                <div onClick={toggleAccordion} className={`${s.moduleStep} ${toggleActiveRight}`}>2 модуль</div>
                <ul ref={content} style={{ maxHeight: `${contentHeightRight}` }}>
                    {props.subjects.map((el, i) => { return (i > 4) && <li key={i}>{el}</li> })}
                </ul>
            </div>}
        </section>
    </>
    )
}
