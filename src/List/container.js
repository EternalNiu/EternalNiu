import {connect} from 'react-redux';

import Component from './component';
import {
  async,
} from './actions';
const {
  someAsync,
} = async;

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.list.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSomeAsyncRequest: () => {
      dispatch(someAsync());
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
/**
 * Connected react component
 */
export default class Container extends Component {

}
