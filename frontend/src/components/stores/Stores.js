import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStores, deleteStore } from '../../actions/stores';

export class Stores extends Component {
  static propTypes = {
    stores: PropTypes.array.isRequired,
    getStores: PropTypes.func.isRequired,
    deleteStore: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getStores();
  }

  render() {
    return (
      <Fragment>
        <h2>Stores</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price per</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            { this.props.stores.map(store => (
              <tr key={store.id}>
                <td>{store.id}</td>
                <td>{store.name}</td>
                <td>{store.quantity}</td>
                <td>{store.price}</td>
                <td>{store.zipcode}</td>
                <td><button onClick={this.props.deleteStore.bind(this,store.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  stores: state.stores.stores
})

export default connect(mapStateToProps, {getStores, deleteStore})(Stores);

