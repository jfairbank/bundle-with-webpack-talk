import React, { Component, PropTypes } from 'react';

export default class NameTag extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onUpdateName: PropTypes.func.isRequired,
  };

  onUpdateName = (e) => {
    this.props.onUpdateName(e.target.value);
  };

  render() {
    const { name } = this.props;

    return (
      <div>
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
