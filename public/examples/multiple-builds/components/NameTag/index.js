import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export default class NameTag extends Component {
  onUpdateName = (e) => {
    this.props.onUpdateName(e.target.value);
  };

  render() {
    const { name } = this.props;

    return (
      <div className={styles.nameTag}>
        <h2>Hello my name is {name}</h2>

        <div className="row">
          <div className="col-xs-12 col-sm=8">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  id="name"
                  value={name}
                  onChange={this.onUpdateName}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NameTag.propTypes = {
  name: PropTypes.string.isRequired,
  onUpdateName: PropTypes.func.isRequired,
};
