import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { SvgSelector } from '../assets/images/SvgSelector';
import s from '../Managment.module.scss'



export const ProgramManagment = (props) => {
    const [toggleActiveLeft, setToggleActiveLeft] = useState(true);
    const [toggleActiveRight, setToggleActiveRight] = useState(true);
    const [contentHeightLeft, setContentHeightLeft] = useState('');
    const [contentHeightRight, setContentHeightRight] = useState('');
    const content = useRef();
    const isMobile = useMediaQuery({
        query: `(max-width: 460px)`
    })

    useEffect(() => {
        if (isMobile) {
            setToggleActiveLeft(false)
            setContentHeightLeft('0px')
            setToggleActiveRight(false)
            setContentHeightRight('0px')
        }
    }, [isMobile])

    const toggleAccordion = (e) => {
        if (e.target.innerHTML === '1 модуль') {
            setToggleActiveLeft(!toggleActiveLeft);
            setContentHeightLeft(toggleActiveLeft ? '0px' : `${content.current.scrollHeight + 50}px`)
        } else {
            setToggleActiveRight(!toggleActiveRight);
            setContentHeightRight(toggleActiveRight ? '0px' : `${content.current.scrollHeight + 50}px`)
        }
    }

    return (<>
        <h3 className={s.header}>{props.title}</h3>
        <section className={s.managment}>
            <div className={s.moduleStyle}>
                <div className={s.toggleSymbol}>
                    {toggleActiveLeft ? <SvgSelector id='minus' /> : <SvgSelector id='plus' />}
                </div>
                <div onClick={toggleAccordion} className={`${s.moduleStep} ${toggleActiveLeft && s.active}`}>1 модуль</div>
                <ul ref={content} style={{ maxHeight: `${contentHeightLeft}` }}>
                    {props.subjects.map((el, i) => { return (i < 5) && <li key={i}>{el}</li> })}
                </ul>
            </div>
            {props.subjects.length > 5 && <div className={s.moduleStyle}>
                <div className={s.toggleSymbol}>
                    {toggleActiveRight ? <SvgSelector id='minus' /> : <SvgSelector id='plus' />}
                </div>
                <div onClick={toggleAccordion} className={`${s.moduleStep} ${toggleActiveRight && s.active}`}>2 модуль</div>
                <ul ref={content} style={{ maxHeight: `${contentHeightRight}` }}>
                    {props.subjects.map((el, i) => { return (i > 4) && <li key={i}>{el}</li> })}
                </ul>
            </div>}
        </section>
    </>
    )
}
