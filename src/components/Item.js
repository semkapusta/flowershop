import React, { Component, useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const InCart = ({ item, onAdd, orders }) => {
  const [inCart, changeText] = useState('В корзину')
  const [isDisabled, setDisabled] = useState(false)

  useEffect(() => {
    const itemInCart = orders.some(order => order.id === item.id);
    if (!itemInCart) {
      changeText('В корзину');
      setDisabled(false);
    }
  }, [orders, item.id]);

    const addToCart = () => {
      onAdd(item);
      toast.success(`Товар ${item.name} добавлен в корзину!`, { autoClose: 2000 });
        changeText('Добавлено!')
        setDisabled(true)
  }

  return (
    <div>
      <button className="add-to-cart" onClick={addToCart} disabled={isDisabled}>
        {inCart}
      </button>
      <span className="tooltip">Количетво товаров можно посмотреть и изменить в корзине</span>
    </div>
  )
}

export class Item extends Component {
  render() {
    const { item, onAdd, orders } = this.props;

    return (
      <div className="item">
        <img
          src={"../img/bukety/" + item.img}
          alt=" "
          onClick={() => this.props.onFastLook(item)}
        />
        <div className="item-head-name">{item.name}</div>
        <p className={`avail-${item.available}`}>
          {item.available ? 'В наличии' : 'Не в наличии'}
        </p>
        <p>{item.description}</p>
        <div className="footer-card">
          <div className="flower-price">Цена: {item.price} ₽</div>
          {item.available && (
            <InCart
              item={item}
              onAdd={onAdd}
              orders={orders}
            />
          )}
        </div>
      </div>

    )
  }
}

export default Item