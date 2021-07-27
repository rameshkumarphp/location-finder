import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = (state) => {
  return {
    locationResponse: state.locationReducer.response || {},
    locationError: state.locationReducer.message || ""
  }
}

const mapDispatchToProps = dispatch => ({
  getLocation: (data) => {
    dispatch({ type: 'LOCATION_FETCH_REQUESTED', data: data })
  }
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
