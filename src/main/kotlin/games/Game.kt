package games

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Game(
        val title: String,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long = -1) {

    override fun toString(): String {
        return "Game(id=$id, title='$title')"
    }

    // TODO get these to work with code coverage
    override operator fun equals(other: Any?) = super.equals(other)
    override fun hashCode() = super.hashCode()
}