import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import config from 'env-config';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object.isRequired,
  };

  renderLeftIcon = () => (
    <IconMenu iconButtonElement={<IconButton><MenuIcon color="white" /></IconButton>}>
      <MenuItem primaryText="Face Tracker" onClick={() => this.props.history.push(`${config.basePath}/`)} />
      <MenuItem primaryText="Add new user" onClick={() => this.props.history.push(`${config.basePath}/register`)} />
    </IconMenu>
  );

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - Apptension Face Tracker"
          defaultTitle="Apptension Face Tracker"
          meta={[{ name: 'description', content: 'Apptension Face Tracker application' }]}
        />

        <AppBar
          title="Apptension Face Tracker"
          iconElementLeft={this.renderLeftIcon()}
        />

        {React.Children.only(this.props.children)}
      </div>
    );
  }
}
