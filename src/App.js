import React from "react";
import { Helmet } from 'react-helmet'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import FastLook from "./components/FastLook";
import { ToastContainer, toast } from 'react-toastify';
import PageText from "./components/PageText";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roses from "./pages/Roses";
import Piony from "./pages/Piony";
import Gvozdiki from "./pages/Gvozdiki";
import Gipsofila from "./pages/Gipsofila";
import Advanteges from "./components/Advanteges";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          "id": 1,
          "category": "roses",
          "img": "buket1.jpg",
          "name": "Букет «Романтика»",
          "description": "Классический букет из 15 красных роз с ароматной зеленью.",
          "price": 2500,
          "available": true
        },
        {
          "id": 2,
          "category": "roses",
          "img": "buket2.jpeg",
          "name": "Букет «Снежная королева»",
          "description": "Букет из 21 белой розы в стильной упаковке.",
          "price": 3200,
          "available": true
        },
        {
          "id": 3,
          "category": "roses",
          "img": "buket3.jpeg",
          "name": "Букет «Розовая мечта»",
          "description": "Состав: 15 розовых роз, белая гипсофила и декоративная лента.",
          "price": 2800,
          "available": false
        },
        {
          "id": 4,
          "category": "gipsofila",
          "img": "buket4.jpeg",
          "name": "Букет «Воздушный шар»",
          "description": "Объемный букет из разноцветной гипсофилы.",
          "price": 1800,
          "available": false
        },
        {
          "id": 5,
          "category": "gipsofila",
          "img": "buket5.jpeg",
          "name": "Букет «Нежность»",
          "description": "Классическая белая гипсофила, аккуратно оформленная в бумагу пастельных тонов.",
          "price": 1500,
          "available": true
        },
        {
          "id": 6,
          "category": "gipsofila",
          "img": "buket6.jpg",
          "name": "Букет «Цветной фейерверк»",
          "description": "Микс из гипсофилы пастельных оттенков: розового, голубого и лавандового.",
          "price": 2000,
          "available": false
        },
        {
          "id": 7,
          "category": "piony",
          "img": "buket7.webp",
          "name": "Букет «Королевский»",
          "description": "10 крупных розовых пионов с зеленью для пышного эффекта.",
          "price": 4000,
          "available": true
        },
        {
          "id": 8,
          "category": "piony",
          "img": "buket8.jpg",
          "name": "Букет «Белоснежная элегантность»",
          "description": "15 белых пионов, оформленных в минималистичном стиле.",
          "price": 5500,
          "available": false
        },
        {
          "id": 9,
          "category": "piony",
          "img": "buket9.jpeg",
          "name": "Букет «Роскошь пионов»",
          "description": "Микс из бордовых и кремовых пионов, дополненный эвкалиптом.",
          "price": 6000,
          "available": true
        },
        {
          "id": 10,
          "category": "gvozdiki",
          "img": "buket10.jpeg",
          "name": "Букет «Теплые чувства»",
          "description": "15 оранжевых гвоздик с декоративной зеленью.",
          "price": 2200,
          "available": true
        },
        {
          "id": 11,
          "category": "gvozdiki",
          "img": "buket11.jpg",
          "name": "Букет «Классика жанра»",
          "description": "Состав: 20 красных гвоздик, оформленных в атласную ленту.",
          "price": 2500,
          "available": true
        },
        {
          "id": 12,
          "category": "gvozdiki",
          "img": "buket12.jpg",
          "name": "Букет «Пастельное настроение»",
          "description": "12 розовых и белых гвоздик в мягкой упаковке.",
          "price": 2000,
          "available": true
        }
      ],
      fastLook: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.AppContext = React.createContext();
    this.addToOrder = this.addToOrder.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onFastLook = this.onFastLook.bind(this)
    this.removeSingleOrder = this.removeSingleOrder.bind(this)
  }
  render() {
    var contextValue = {
      items: this.state.items
    }
    return (
      <Router>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onAdd={this.addToOrder} onRemoveSingle={this.removeSingleOrder} clearCart={this.clearCart} />
        <div className="fullpage">
          <ToastContainer stacked />
          {this.state.fastLook && <FastLook onAdd={this.addToOrder} item={this.state.fullItem} onFastLook={this.onFastLook} />}
          <Routes>
            <Route path="/"
              element={
                <>
                  <Helmet>
                    <title>Доставка букетов в городе по лучшим ценам</title>
                    <meta name="description" content="Интернет-магазин цветов в городе. Заказать и купить букет с доставкой. Быстрая и удобная доставка свежих цветов. Лучший выбор и качество." />
                    <link rel="canonical" href="" />
                  </Helmet>
                  <div className="presentation"></div>
                  <h1>Доставка цветов в городе</h1>
                  <div className="full-filter-block">
                    <span className="head-of-filter">Фильтр по параметрам</span>
                    <Categories chooseCategory={this.chooseCategory} />
                  </div>
                  <this.AppContext.Provider value={contextValue}>
                    <Items onFastLook={this.onFastLook} items={this.state.currentItems} onAdd={this.addToOrder} orders={this.state.orders} onRemove={this.state.onRemove} />
                  </this.AppContext.Provider>
                  <Advanteges />
                  <PageText />
                </>
              }
            />
            <Route path="/roses/"
              element={
                <>
                  <h1>Букеты из роз</h1>
                  <Items onFastLook={this.onFastLook} items={this.state.items.filter(flow => flow.category === 'roses')} onAdd={this.addToOrder} orders={this.state.orders} onRemove={this.state.onRemove} />
                  <Roses />
                </>
              }
            />
            <Route path="/piony/"
              element={
                <>
                  <h1>Букеты из пионов</h1>
                  <Items onFastLook={this.onFastLook} items={this.state.items.filter(flow => flow.category === 'piony')} onAdd={this.addToOrder} orders={this.state.orders} onRemove={this.state.onRemove} />
                  <Piony />
                </>
              }
            />
            <Route path="/gvozdiki/"
              element={
                <>
                  <h1>Букеты из гвоздик</h1>
                  <Items onFastLook={this.onFastLook} items={this.state.items.filter(flow => flow.category === 'gvozdiki')} onAdd={this.addToOrder} orders={this.state.orders} onRemove={this.state.onRemove} />
                  <Gvozdiki />
                </>
              }
            />
            <Route path="/gipsofila/"
              element={
                <>
                  <h1>Букеты из гипсофил</h1>
                  <Items onFastLook={this.onFastLook} items={this.state.items.filter(flow => flow.category === 'gipsofila')} onAdd={this.addToOrder} orders={this.state.orders} onRemove={this.state.onRemove} />
                  <Gipsofila />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>

    );
  }

  onFastLook(item) {
    this.setState({ fullItem: item })
    this.setState({ fastLook: !this.state.fastLook })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(flow => flow.category === category)
    })
  }

  deleteOrder(id) {
    const orderIndex = this.state.orders.findIndex(order => order.id === id);
    const order = this.state.orders[orderIndex];

    if (order.quantity > 1) {
      const updatedOrders = this.state.orders.map((order) => {
        if (order.id === id) {
          return { ...order, quantity: order.quantity - 1 }
        }
        return order;
      });
      this.setState({ orders: updatedOrders });
    } else {
      this.setState({ orders: this.state.orders.filter(order => order.id !== id) })
    }
  }


  removeSingleOrder(id) {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== id)
    });
    toast.success(`Товар полностью удлаен из корзины!`, { autoClose: 2000 });
  }

  clearCart() {
    this.setState({ orders: [] });
    toast.success(`Корзина очищена полностью!`, { autoClose: 2000 });
  }

  addToOrder(item) {
    const orderIndex = this.state.orders.findIndex(order => order.id === item.id);

    if (orderIndex > -1) {
      const updatedOrders = this.state.orders.map((order, index) => {
        if (index === orderIndex) {
          return { ...order, quantity: (order.quantity || 1) + 1 }
        }
        return order;
      });
      this.setState({ orders: updatedOrders });
    } else {
      this.setState({ orders: [...this.state.orders, { ...item, quantity: 1 }] })
    }
  }

}

export default App;