import React from 'react'
import { FaVk } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className='logo'><span className="big-letter">F</span>lower<span className="big-letter">S</span>hop</a>
        </div>

        <div className="footer-contacts">
          <div className="footer-head">Контакты</div>
          <p>Адрес: г. Москва, ул. Цветочная, д. 5</p>
          <p>Телефон: <a href="tel:+78001234567">+7 (800) 123-45-67</a></p>
          <p>Email: <a href="mailto:info@flowershop.ru">info@flowershop.ru</a></p>
        </div>

        <div className="footer-navigation">
          <div className="footer-head">Разделы</div>
          <ul>
            <li><a href="/roses/">Розы</a></li>
            <li><a href="/gipsofila/">Гипсофилы</a></li>
            <li><a href="/piony/">Пионы</a></li>
            <li><a href="/gvozdiki/">Гвоздики</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <div className="footer-head">Мы в соцсетях</div>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaSquareFacebook/></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><RiInstagramFill/></a></li>
            <li><a href="https://vk.com" target="_blank" rel="noreferrer"><FaVk/></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 FlowerShop. Все права защищены.</p>
      </div>
    </footer>

  )
}
