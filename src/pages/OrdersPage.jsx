import { Link, useNavigate } from "react-router-dom";
import "../style/OrdersPage.css";
import orders from "../../newJsonUsers199.json";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useState } from "react";

const OrdersPage = () => {
  const { newUser, setNewUser } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  let handleOut = () => {
    setNewUser(null);
    return navigate("/");
  };

  return (
    <div className="container">
      <div className="content-conteiner">
        <div className="header">
          <div className="header-user">
            <img src="/Ellipse.png" alt="" />
            <div className="user-block">
              <Link className="user">{newUser?.name}</Link>
              <span className="user-email">{newUser?.email}</span>
            </div>
          </div>
          <button className="header-btn" onClick={handleOut}>
            Выход
          </button>
        </div>
        <div className="orders">
          <div>
            <div className="ticker">
              <button className="btn-ticker">CNH/RUB</button>
              <input
                className="ticker-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="ticker-functionals">
                <div className="ticker-functional right">
                  <div className="ticker-functional-area">8.566</div>
                  <button className="btn-ticker-functional sell">Sell</button>
                </div>
                <div className="ticker-functional">
                  <div className="ticker-functional-area">8.577</div>
                  <button className="btn-ticker-functional buy">Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <h1>Список заявок</h1>
            <button className="btn-title">По номеру заявки</button>
          </div>
          <div className="order-content">
            <table>
              <thead className="thead">
                <tr className="tr">
                  <td className="td td-left">Идентификатор</td>
                  <td className="td ">Время создания</td>
                  <td className="td">Время последнего изменения статуса</td>
                  <td className="td ">Статус</td>
                  <td className="td ">Сторона</td>
                  <td className="td ">Цена</td>
                  <td className="td">Объем </td>
                  <td className="td td-last">Торговый инструмент</td>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr key={order.id}>
                      <td className="td td-main td-left-main">
                        <div className="border"></div>
                        {order.id}
                      </td>
                      <td className="td td-main">{order.email}</td>
                      <td className="td td-main">{order.amount}</td>
                      <td className="td td-main">{order.date}</td>
                      <td className="td td-main">{order.email}</td>
                      <td className="td td-main">{order.amount}</td>
                      <td className="td td-main ">{order.date}</td>
                      <td className="td td-main td-last-main">{order.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrdersPage;
