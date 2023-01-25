import { Link, useNavigate } from "react-router-dom";
import "../style/OrdersPage.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const OrdersPage = () => {
  const [request, setRequest] = useState([]);
  const { newUser, setNewUser } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const baseUrl =
    "http://www.filltext.com/?rows=9&id={index}&creationTime={date|10-10-2010,10-12-2010}&changeTime={date|10-10-2010,10-12-2010}&status=active&side=Buy&price={randomNumber|1to10}&amount={randomNumber|500000}&instrument=CNH/RUB&pretty=true";

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setRequest(res.data);
    });
  }, []);

  let handleOut = () => {
    setNewUser(null);
    return navigate("/");
  };

  const sortData = (field) => {
    const copyData = request.concat();
    const sortData = copyData.sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    setRequest(sortData);
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
          </div>
          <div className="order-content">
            <table>
              <thead className="thead">
                <tr className="tr">
                  <td
                    className="td td-left"
                    onClick={() => {
                      sortData("id");
                    }}>
                    Идентификатор
                  </td>
                  <td
                    className="td"
                    onClick={() => {
                      sortData("creationTime");
                    }}>
                    Время создания
                  </td>
                  <td
                    className="td"
                    onClick={() => {
                      sortData("changeTime");
                    }}>
                    Время последнего изменения статуса
                  </td>
                  <td
                    className="td "
                    onClick={() => {
                      sortData("status");
                    }}>
                    Статус
                  </td>
                  <td
                    className="td "
                    onClick={() => {
                      sortData("side");
                    }}>
                    Сторона
                  </td>
                  <td
                    className="td "
                    onClick={() => {
                      sortData("price");
                    }}>
                    Цена
                  </td>
                  <td
                    className="td"
                    onClick={() => {
                      sortData("amount");
                    }}>
                    Объем{" "}
                  </td>
                  <td
                    className="td td-last"
                    onClick={() => {
                      sortData("instrument");
                    }}>
                    Торговый инструмент
                  </td>
                </tr>
              </thead>
              <tbody>
                {request.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="td td-main td-left-main">
                        <div className="border"></div>
                        {item.id}
                      </td>
                      <td className="td td-main">{item.creationTime}</td>
                      <td className="td td-main">{item.changeTime}</td>
                      <td className="td td-main">{item.status}</td>
                      <td className="td td-main">{item.side}</td>
                      <td className="td td-main">{item.price}</td>
                      <td className="td td-main ">{item.amount}</td>
                      <td className="td td-main td-last-main">
                        {item.instrument}
                      </td>
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
