import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { App } from './app.component';

export default withRouter(connect(null, null)(App));
