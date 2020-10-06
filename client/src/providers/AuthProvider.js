import React, { Component } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = {}
  
  render () {
    return( 
      <AuthContext.Provider value={{
        ...this.state, 
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;
