import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Main from './components/Main';

function mapStateToProps(state = []) {
  return {
    country: state.country,
    weather: state.weather
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators,
      dispatch);
}


const App = connect(mapStateToProps, 
                    mapDispachToProps)(Main);


export default App;