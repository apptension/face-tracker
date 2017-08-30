import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RecognizeActions } from '../../modules/recognize';
import { Home } from './home.component';


const mapDispatchToProps = (dispatch) => bindActionCreators({
  recognize: RecognizeActions.requestRecognition,
}, dispatch);

export default connect(null, mapDispatchToProps)(Home);
