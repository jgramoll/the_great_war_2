package jgramoll.the_great_war.games

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Game(
        val title: String,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long = -1)