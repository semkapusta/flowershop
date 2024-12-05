import React, { Component } from 'react'

export class FastLook extends Component {
  render() {
    return (
      <div className="full-item">
        <div className="card-info">
            <img src={"./img/bukety/" + this.props.item.img} alt=" " onClick={() => this.props.onFastLook(this.props.item)}/>
            <h2>{this.props.item.name}</h2>
            <p>{this.props.item.description}</p>
            <div className="flower-price"> Цена: {this.props.item.price} ₽</div>
            <div className="add-to-cart"  onClick={() => this.props.onAdd(this.props.item)}>Добавить в корзину</div>
        </div>
      </div>
    )
  }
}

export default FastLook