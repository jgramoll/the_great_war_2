
import GameDetails from '../components/GameDetails'
import { connect } from 'react-redux'
import * as actions from '../actions/gameListActionCreators'

const mapStateToProps = ({ $$gamesStore }) => {
  return { game: $$gamesStore.selectedGame }
}

export default connect(mapStateToProps, actions)(GameDetails)
