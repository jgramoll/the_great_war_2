package games;

import org.springframework.data.repository.CrudRepository

interface GameRepository : CrudRepository<Game, Long> {

}