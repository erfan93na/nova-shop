import React, {Component} from 'react';

class Filters extends Component {
    render() {
        const sizes=["All","XS","S","M","L","XL","XXL"];
        const order=["Newest","Highest","Lowest"]
        return (
            <div className="filters">
               <span>{this.props.count} Items Available</span>
                <div>Order: <select onChange={this.props.handleOrderChange}>
                    {order.map(option=><option value={option.toLowerCase()}>{option}</option>)}
                </select> </div>
                <div>Choose Size: <select onChange={this.props.handleSizeChange}>
                    {sizes.map(option=><option value={option==="All"?"":option.toLowerCase()}>{option}</option>)}
                </select> </div>
            </div>
        );
    }
}

export default Filters;