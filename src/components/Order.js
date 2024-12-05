import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"../img/bukety/" + this.props.item.img} alt=" " />
        <h2>{this.props.item.name}</h2>
        <div className="item-quantity-in-cart">
          <button onClick={() => this.props.onAdd(this.props.item)}>+</button>
          {this.props.item.quantity} шт.
          <button onClick={() => this.props.onDelete(this.props.item.id)}>-</button>
        </div>
        <div className="flower-price"> Цена: {this.props.item.price} ₽</div>
        <div className="delete-from-cart" onClick={() => this.props.onRemoveSingle(this.props.item.id)}>Удалить из корзины</div>
      </div>
    )
  }
}

export default Order