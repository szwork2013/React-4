import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './ModelCreateWidget.css';

export class ModelCreateWidget extends Component {
  addModel = () => {
    console.log(this.props);
    debugger;
    const lName = this.refs.lastName;
    const fName = this.refs.firstName;
    const gend = this.refs.gender;
    if (lName.value && fName.value) {
      this.props.postModel(firstName.value, lastName.value, gender.value);
    }
  };

  render() {
    console.log("Create widget render method hit");
    const cls = `${styles.form} ${(this.props.showAddModel ? styles.appear : '')}`;

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create Model</h2>
        </div>
      </div>


      //
      //   <h4>Create Model Form</h4>
      //   <form role="form" className="form-vertical">
      //     <div className="form-group">
      //       <label for="firstName">First Name: </label>
      //       <input type="text" className="form-control" id="firstName" ref="firstName"></input>
      //     </div>
      //     <div className="form-group">
      //       <label for="lastName">Last Name: </label>
      //       <input type="text" className="form-control" id="lastName" ref="lastName"></input>
      //     </div>
      //     <div className="form-group">
      //       <label for="gender">Gender: </label>
      //       <select className="form-control" id="gender" ref="gender">
      //         <option>Male</option>
      //         <option>Female</option>
      //         <option>Other</option>
      //       </select>
      //     </div>
      //     <a className={styles['post-submit-button']} href="#" onClick={this.addModel}><FormattedMessage id="submit" /></a>
      //   </form>
      // </div>
    );
  }
}

ModelCreateWidget.propTypes = {
  addModel: PropTypes.func.isRequired,
  showAddModel: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ModelCreateWidget);
