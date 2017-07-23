import GameList from '../components/GameList'
import { connect } from 'react-redux'
import * as actions from '../actions/gameListActionCreators'

const mapStateToProps = ({ $$gamesStore }) => {
  return {
    games: $$gamesStore.$$games,
    gamesLoaded: $$gamesStore.gamesLoaded
  }
}

export default connect(mapStateToProps, actions)(GameList)
