// FeedbackModal.js
import React from 'react';

const FeedbackModal = ({ isOpen, onClose, orderData }) => {
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обработка отправки формы
    console.log('Form submitted');
    onClose();
  };
  
  const calculateTotal = () => {
    let total = 0;
    orderData.forEach(item => {
      total += Number.parseFloat(item.price) * item.quantity;
    });
    return total;
  };

  const totalSum = calculateTotal();

  return (
    <div className="fos">
      <div className="fos-wrapper">
        <div className="fos-header">
          <h2>Оформление быстрого заказа</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="fos-input-wrapper">
            <label className="fos-label-input">Имя:</label>
            <input
              type="text"
              required
              className="input"
              placeholder="Иван Иванов"
            />
          </div>
          <div className="fos-input-wrapper">
            <label className="fos-label-input">Телефон:</label>
            <input
              type="tel"
              required
              className="input"
              placeholder="+7 (999) 999 99 99"
            />
          </div>
          <div className="fos-input-wrapper">
            <label className="fos-label-input">Email:</label>
            <input
              type="email"
              required
              className="input"
              placeholder="ivan@domain.ru"
            />
          </div>
          <div className="order-list-wrapper">
            <h3>Ваш заказ:</h3>
            {orderData && orderData.map(item => (
              <div key={item.id} className="fos-item">
                <img src={"../img/bukety/" + item.img} alt=""/>{item.name}: {item.price} ₽ - {item.quantity} шт.
              </div>
            ))}
            <div className="fos-summ-order">Сумма заказа: {new Intl.NumberFormat().format(totalSum)} ₽</div>
          </div>
          <div className="fos-wrapper-buttons">
            <button
              type="button"
              onClick={onClose}
            >
              Отмена
            </button>
            <button
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;