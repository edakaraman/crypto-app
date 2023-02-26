import React from "react";
import "./Coin.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";

const Coin = ({ name, price, symbol, volume, image, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">
              <AiOutlineArrowDown />
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              <MdArrowUpward /> {priceChange.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
