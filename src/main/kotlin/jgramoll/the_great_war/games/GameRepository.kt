package jgramoll.the_great_war.games

import org.springframework.data.jpa.repository.JpaRepository

/**
 * Repository for Games
 */
interface GameRepository : JpaRepository<Game, Long>