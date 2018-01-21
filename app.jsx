import './style';
import './assets/stylesheets/index';
import './assets/stylesheets/semantic-ui/semantic-ui';

import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


class App extends Component {
  static toggleModal() {
    $('.ui.modal').modal('toggle');
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    return(
      <div>
        <div className="custom-button">
          <Button>Button</Button>
        </div>
        <hr />
        <div className="custom-dropdown">
          <div className="ui dropdown selection">
            <input type="hidden" name="gender" />
            <i className="dropdown icon" />
            <div className="default text">Gender</div>
            <div className="menu">
              <div className="item" data-value="male" data-text="Male">
                <i className="male icon" />
                Male
              </div>
              <div className="item" data-value="female" data-text="Female">
                <i className="female icon" />
                Female
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="custom-input">
          <Input action="SIGN" placeholder="TEXT HERE" />
        </div>
        <hr />
        <div className="custom-modal">
          <Button onClick={App.toggleModal}>Toggle Modal</Button>
          <div className="ui modal">
            <i className="close icon" />
            <div className="header">
              Modal Title
            </div>
            <div className="image content">
              <div className="image">
                An image can appear on left or an icon
              </div>
              <div className="description">
                A description can appear on the right
              </div>
            </div>
            <div className="actions">
              <button className="ui button" onClick={App.toggleModal}>Cancel</button>
              <div className="ui button">OK</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
