import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { IoLogoBitcoin } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { getTickerData } from "../actions/tickerAction";

const Ticker = ({ getTickerData, ticker }) => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  const mock_ticker = [
    "tBTCUSD",
    41495,
    15.171059269999999,
    41496,
    20.10378927000001,
    -1684,
    -0.039,
    41496,
    5777.06220585,
    43437,
    41158,
  ];

  useEffect(() => {
    var intr = setInterval(() => {
      getTickerData();
    }, 1000);
    return () => clearInterval(intr);
  }, [ticker]);
  console.log(ticker);

  return (
    <Container className="ticker_container">
      <BitCoinIcon>
        <IoLogoBitcoin />
      </BitCoinIcon>
      {ticker &&
        ticker.map((tick, i) => {
          return (
            <div className="ticker_container" key={i}>
              <Side>
                <h4>BTC/USD</h4>
                <span className="btc_usd">{tick[1]}</span>

                <Line>
                  <span>VOL</span>
                  <>{tick[7] && numberWithCommas(tick[7].toFixed(2))} USD</>
                  <span>
                    <span className={tick[5] < 0 ? `red` : "green"}>
                      {tick[4] && numberWithCommas(tick[4].toFixed(2))}
                      {tick[5] < 0 ? <FaCaretDown /> : <FaCaretUp />}({tick[5]}
                      %)
                    </span>
                  </span>
                </Line>
                <br />
                <Line className="low">
                  <span>LOW</span>
                  <span>{tick[9] && numberWithCommas(tick[9].toFixed(1))}</span>
                </Line>
              </Side>
              <br />
              <Side>
                <br />
                <Line>
                  <span className="high">
                    High
                    {`   ${tick[8] && numberWithCommas(tick[8].toFixed(1))}`}
                  </span>
                </Line>
              </Side>
            </div>
          );
        })}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding: 10px;
  background-color: #1b262d;
  margin: 5px;
`;
export const BitCoinIcon = styled.div`
  font-size: 48px;
  width: 60px;
`;
export const Side = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0px 20px;
  h4 {
    font: Bold 16px Arial;
    text-align: center;
    padding: 0px;
    margin: 0px;
  }
`;
export const Line = styled.div`
  color: #aaa;
  font: 16px Arial;
  text-align: center;
  font: normal 14px Arial;
  span.red {
    color: red;
  }
  span.green {
    color: green;
  }
  display: flex;
`;

const mapStateToProps = (state) => ({
  ticker: state.tickerData.ticker,
});
export default connect(mapStateToProps, { getTickerData })(Ticker);
