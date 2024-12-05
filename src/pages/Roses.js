import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Roses extends Component {
    render() {
        return (
            <div className="full-page">
                <Helmet>
                    <title>Букеты из роз — Элегантные композиции для особых событий</title>
                    <meta name="description" content="Букеты из роз — это символ любви и элегантности. Идеальные композиции для свадеб, юбилеев и подарков. Закажите букет из роз у наших флористов."/>
                    <link rel="canonical" href="" />
                </Helmet>
                <div className="page-text">
                    <p>В <b>Flowershop</b> мы знаем, как важно подарить не просто цветы, а эмоции. Наши букеты из роз — это символ любви, элегантности и утонченности, который способен украсить любой момент вашей жизни.</p>
                    <h2>Почему выбирают нас?</h2>
                    <ul>
                        <li><b>Свежесть и качество:</b> Мы работаем только с лучшими поставщиками и гарантируем, что каждый букет будет составлен из свежайших роз, которые сохранят свою красоту и аромат как минимум 7 дней.</li>
                        <li><b>Уникальные композиции:</b> Наши флористы создают эксклюзивные букеты с учетом всех пожеланий клиента. Мы подбираем не только сорта и оттенки роз, но и идеально комбинируем их с другими цветами, зеленью и аксессуарами.</li>
                        <li><b>Оперативная доставка:</b> Мы ценим ваше время, поэтому обеспечиваем быструю и надежную доставку на удобное для вас время. Весь процесс — от оформления заказа до вручения букета — будет выполнен без задержек.</li>
                        <li><b>Персонализированные услуги:</b> Вы можете заказать не только букет, но и дополнительные услуги: открытки с поздравлениями, упаковку на любой вкус, а также услуги по доставке в определенные дни и часы.</li>
                    </ul>
                    <h2>Как заказать?</h2>
                    <ol>
                        <li><b>Выберите букет:</b> Ознакомьтесь с нашим каталогом и выберите идеальный букет из роз. У нас есть варианты для любых поводов — от романтических подарков до торжественных мероприятий.</li>
                        <li><b>Укажите адрес доставки:</b> Введите адрес и выберите дату, когда вам удобнее всего получить или отправить букет.</li>
                        <li><b>Оплатите заказ:</b> Вы можете выбрать удобный способ оплаты: онлайн-оплата, наличный расчет при получении или через банковский перевод.</li>
                        <li><b>Дождитесь подтверждения:</b> После оформления заказа мы обязательно подтвердим все детали и уточним предпочтения, чтобы ваше оформление было идеально.</li>
                    </ol>
                    <h2>Доставка по всему городу и области</h2>
                    <p>Мы осуществляем доставку по всему городу и в ближайшие районы. Наши курьеры доставят цветы в идеальном состоянии в любой уголок города.</p>
                    <p>Подарите своим близким момент счастья с букетом из роз от Flowershop — потому что каждый день заслуживает быть особенным!</p>
                </div>
            </div>
        )
    }
}
