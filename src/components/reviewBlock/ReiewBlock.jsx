import React from 'react'
import s from './ReviewBlock.module.scss'



export const ReiewBlock = (props) => {
    return (
        <section className={s.review}>
            <div className={s.practiceModule + ' ' + s.footerBlock}>
                <h2>Практические модули</h2>
                <div>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</div>
            </div>
            <div className={s.finishAttestation + ' ' + s.footerBlock}>
                <h2>Итоговая аттестация</h2>
                <ul>
                    <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
                    <li>Защита итоговой аттестационной работы</li>
                </ul>
            </div>
        </section>
    )
}
