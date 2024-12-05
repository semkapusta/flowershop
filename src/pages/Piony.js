import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Piony extends Component {
    render() {
        return (
            <div className="full-page">
                <Helmet>
                    <title>Букеты из пионов — Изысканные цветочные композиции</title>
                    <meta name="description" content="Создайте незабываемую атмосферу с букетами из пионов. Идеальны для свадьбы, юбилея или другого важного события. Закажите букет из пионов у наших флористов."/>
                    <link rel="canonical" href="" />
                </Helmet>
                <div className="page-text">
                    <section>
                        <h2>Что такое пион?</h2>
                        <p>Пионы — это одни из самых популярных и красивых цветов в мире флористики. С их крупными, насыщенными цветами и нежным ароматом они создают в букете атмосферу утонченности и элегантности. Пионы бывают различных оттенков — от белых и розовых до насыщенных бордовых и фиолетовых.</p>
                    </section>

                    <section>
                        <h2>Преимущества букетов из пионов</h2>
                        <ul>
                            <li>Изысканная красота и разнообразие цветов.</li>
                            <li>Уникальный аромат, который придает букету особое очарование.</li>
                            <li>Идеальны для свадебных, юбилейных и торжественных букетов.</li>
                            <li>Долговечность — пионы могут оставаться свежими несколько дней, при этом они красиво распускаются.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Как использовать пионы в букете?</h2>
                        <p>Пионы отлично сочетаются с другими цветами, такими как розы, лилии, гортензии и фрезии. Они могут быть как основным элементом букета, так и в комбинации с другими цветами для создания гармоничной композиции. Благодаря своей крупной форме и ярким оттенкам, пионы всегда привлекают внимание и становятся центром композиции.</p>
                    </section>

                    <section>
                        <h2>Наши букеты из пионов</h2>
                        <p>Мы создаем уникальные букеты из пионов, которые подходят для любых торжеств — от романтических свиданий до масштабных свадебных церемоний. Наши флористы с радостью помогут вам выбрать идеальную композицию, которая подчеркнет вашу индивидуальность и создаст незабываемую атмосферу.</p>
                        <p>Ознакомьтесь с нашими работами в галерее и выберите идеальный букет!</p>
                    </section>
                </div>
            </div>
        )
    }
}
