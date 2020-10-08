import React from "react";
import './Styles/style.scss';
import data from "./data";
import Products from "./Components/Products";


class App extends React.Component {
      constructor() {
            super();
            this.state={products:data.products,size:"",sort:""};

      }
render() {
      return (
          <div className="grid-container">
                <header>
                      <a href="#">Nova Shop</a>
                </header>
                <main><div className="content">
                    <div className="main"><Products products={this.state.products}/></div>
                    <div className="sidebar"></div>
                </div>
                </main>
                <footer>Built with React & Redux.</footer>
          </div>
      )
}


}

export default App