import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super (props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все цветы'
                },
                {
                    key: 'roses',
                    name: 'Розы'
                },
                {
                    key: 'gipsofila',
                    name: 'Гипсофилы'
                },
                {
                    key: 'piony',
                    name: 'Пионы'
                },
                {
                    key: 'gvozdiki',
                    name: 'Гвоздики'
                },
            ]
        }
    }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map(flow => (
            <div key={flow.key} onClick={() => this.props.chooseCategory(flow.key)}>{flow.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories