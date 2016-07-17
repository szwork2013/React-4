import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import ModelCreateWidget from '../../components/ModelCreateWidget/ModelCreateWidget';

// Import Actions
// import { addModelRequest } from '../../ModelActions';
// import { toggleAddModel } from '../../../App/AppActions';
//
// Import Selectors
// import { getShowAddModel } from '../../../App/AppReducer';
// import { getModels } from '../../ModelReducer';

class ModelListPage extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getModels());
  // }

  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deleteModelRequest(post));
  //   }
  // };
  //
  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddModel());
  //   this.props.dispatch(addModelRequest({ name, title, content }));
  // };

  render() {
    return (
      <div>
        <h1>MODEL LIST PAGE!</h1>
        <ModelCreateWidget showAddModel={true} addModel={function() {return null;}}/>
      </div>
    );
  }
}

//Actions required to provide data for this component to render in sever side.
//ModelListPage.need = [() => { return getModels(); }];

// Retrieve data from store as props
// function mapStateToProps(state) {
//   return {
//     showAddModel: getShowAddModel(state),
//     models: getModels(state),
//   };
// }
function mapStateToProps(state) {
  return {
    models: "state.models"
  };
}
// ModelListPage.propTypes = {
//   models: PropTypes.arrayOf(PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//   })).isRequired,
//   showAddModel: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };
//
ModelListPage.contextTypes = {
  router: React.PropTypes.object,
};
//(mapStateToProps)
export default connect(mapStateToProps)(ModelListPage);
