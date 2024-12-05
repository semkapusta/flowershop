import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {

  render() {
    return (
      <main>
        {this.props.items.map(flow => (
            <Item onFastLook={this.props.onFastLook} key={flow.id} item={flow} onAdd={this.props.onAdd} onRemove={this.props.onRemove} orders={this.props.orders}/>
        ))}
      </main>
    )
  }
}

export default Items