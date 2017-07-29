package jgramoll.the_great_war.games

import org.springframework.data.jpa.repository.JpaRepository

interface GameRepository : JpaRepository<Game, Long>