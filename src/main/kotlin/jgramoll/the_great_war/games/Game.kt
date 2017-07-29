package jgramoll.the_great_war.games

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * A Game. Has a type, users involved, and data
 *
 * Supported Games:
 *      The Great War
 *
 * @property title of this Game.
 * @property id of this Game.
 * @constructor Creates an new Game.
 */
@Entity
data class Game(
        val title: String,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long = -1)