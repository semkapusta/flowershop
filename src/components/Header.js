import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import FeedbackModal from './OrderForm'; 

const calculateTotal = (props) => {
  let summ = 0
  props.orders.forEach(flow => summ += Number.parseFloat(flow.price) * flow.quantity)
  return summ
}

const showOrders = (props) => {
  let summ = 0
  
  props.orders.forEach(flow => summ += Number.parseFloat(flow.price) * flow.quantity)
  return (<div>
    {props.orders.map(flow => (
        <Order onDelete={props.onDelete} onAdd={props.onAdd} key={flow.id} item={flow} onRemoveSingle={props.onRemoveSingle} />
    ))}
    <div className="summCart">Общая стоимость заказа: {new Intl.NumberFormat().format(summ)} ₽</div>
    <div className="delete-block-shop-cart"> 
      <button className="clear-cart clear" onClick={props.clearCart}>Очистить корзину</button>
      <button className="clear-cart fast" onClick={props.onOpenModal}>Оформить быстрый заказ</button>
      <button className="clear-cart cart">Перейти в корзину</button>
    </div>
  </div>)
}


const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setCartOpen(false) // Закрываем корзину при открытии модального окна
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header>
        <div className="navbar">
            <a href="/" className='logo'><span className="big-letter">F</span>lower<span className="big-letter">S</span>hop</a>
            <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-with-price ${cartOpen && 'active'}`}>
              <FaShoppingCart className="cart-ico"/>
              {calculateTotal(props)} ₽
            </div>
            <ul className="nav">
              <li><a href="/roses/">Розы</a></li>
              <li><a href="/gipsofila/">Гипсофилы</a></li>
              <li><a href="/piony/">Пионы</a></li>
              <li><a href="/gvozdiki/">Гвоздики</a></li>
            </ul>

            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ?
                  showOrders({...props, onOpenModal: handleOpenModal}) : showNothing()}
              </div>
            )}

            <FeedbackModal 
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              orderData={props.orders}
            />
        </div>
    </header>
  )
}

