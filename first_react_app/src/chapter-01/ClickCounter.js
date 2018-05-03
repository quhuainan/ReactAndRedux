import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    // 将函数方法与this绑定，防止在函数方法中调用的this 不是 该实例对象
    this.onClickButton = this.onClickButton.bind(this);
    this.state = { count: 0, value: "", isZ: false };
  }

  onClickButton() {
    let float = new RegExp(
      "^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$"
    );
    let int = new RegExp("^-?[1-9]\\d*$");

    let a = float.test(this.state.value) || int.test(this.state.value);

    this.setState({
      count: ++this.state.count,
      isZ: a
    });
    throw new Error("非法点击");
  }
  render() {
    return (
      <ErrorBoundary>
        <div style={{ padding: 46 }}>
          <button onClick={this.onClickButton}>点击我</button>
          <input
            value={this.state.value}
            onChange={event => {
              //this.setState({ value: event.target.value });
              throw new Error("非法点击");
            }}
          />>
          <div style={{ paddingTop: 16 }}>
            点击次数：<span id="clickCount">{this.state.count}</span>
          </div>
          <div style={{ paddingTop: 16 }}>
            是否是整数：<span id="clickCount">
              {this.state.isZ ? "是整数" : "不是整数"}
            </span>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "iPhone 7",
          price: "Price: 650$",
          imageUrl: "https://i.ytimg.com/vi/7Jd7P42qaFM/maxresdefault.jpg"
        },
        {
          name: "Tesla",
          price: "Price: 950$",
          imageUrl:
            "https://www.tesla.com/tesla_theme/assets/img/models/v1.0/slideshow/Red_Bay-1440.jpg?20171005"
        },
        {
          name: "Iron",
          price: "Price: 50$",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/41BW0yDhVeL._SX355_.jpg"
        },
        {
          name: "The Kite Runner",
          price: "Price: 30$",
          imageUrl: "https://images.gr-assets.com/books/1484565687l/77203.jpg"
        },
        {
          price: "Price: 950$",
          imageUrl:
            "https://www.tesla.com/tesla_theme/assets/img/models/v1.0/slideshow/Red_Bay-1440.jpg?20171005"
        }
      ]
    };
  }

  renderProducts() {
    return (
      this.state.products &&
      this.state.products.map(product => {
        return (
          <ErrorBoundary key={product.name}>
            <Product product={product} />
          </ErrorBoundary>
        );
      })
    );
  }

  render() {
    return (
      <div className="productList" style={{ marginTop: "40px" }}>
        {this.renderProducts()}
      </div>
    );
  }
}

const style = {
  width: "350px",
  marginLeft: "20px",
  marginTop: "20px",
  display: "inline-block"
};
const Product = props => (
  <div>
    <h1>2342424.</h1>
    <button onClick={()=>{throw new Error()}}>点击我</button>
  </div>
);
