import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { RecognizeActions, selectUser, selectErrors } from '../../modules/recognize';
import { Home } from './home.component';


const mapStateToProps = createStructuredSelector({
  user: selectUser,
  errors: selectErrors,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  recognize: RecognizeActions.requestRecognition,
  resetUser: RecognizeActions.resetUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
