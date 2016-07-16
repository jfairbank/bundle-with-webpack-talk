import React, { Component } from 'react';
import { render } from 'react-dom';

class NameTag extends Component {
  state = { name: 'Jeremy' };

  updateName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <form>
            <h2>Hello, my name is {namea}</h2>

            <hr />

            <div className="form-group">
              <label htmlFor="name">Name:</label>

              <input
                type="text"
                id="name"
                className="form-control input-lg"
                value={name}
                onChange={this.updateName}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

render(
  <NameTag />,
  document.getElementById('main')
);
