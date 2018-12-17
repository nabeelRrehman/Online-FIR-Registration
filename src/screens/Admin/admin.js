import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../../store'
import AdminRoutes from '../../Router/AdminRoutes';

class AdminPage extends Component {

  render() {
    return (
    
      //Routers
      
      <Provider store = {store}>
        <AdminRoutes />   
      </Provider>
    );
  }
}

export default AdminPage;
