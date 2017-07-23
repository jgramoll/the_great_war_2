import TheGreatWar from '../components/TheGreatWar'
import { connect } from 'react-redux'
import * as actions from '../actions/theGreatWarActionCreators'

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, actions)(TheGreatWar)
