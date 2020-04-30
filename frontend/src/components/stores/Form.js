import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStore } from '../../actions/stores';


export class Form extends Component {
    state = {
        name: '',
        quantity:'',
        price:'',
        zipcode:''
    };

    static propTypes = {
        addStore: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, quantity, price, zipcode } = this.state;
        const store = { name, quantity, price, zipcode};
        this.props.addStore(store);
    };
    
    render() {
        const { name, quantity, price, zipcode } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Store Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            className="form-control"
                            type="text"
                            name="quantity"
                            onChange={this.onChange}
                            value={quantity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            className="form-control"
                            type="text"
                            name="price"
                            onChange={this.onChange}
                            value={price}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zipcode</label>
                        <input
                            className="form-control"
                            type="text"
                            name="zipcode"
                            onChange={this.onChange}
                            value={zipcode}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addStore })(Form);
