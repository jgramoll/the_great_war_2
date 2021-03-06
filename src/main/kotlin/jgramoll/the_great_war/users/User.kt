package jgramoll.the_great_war.users

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GenerationType
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

/**
 * User model.
 *
 * @property username of this user.
 * @property password of this user.
 * @property id of this user.
 * @constructor Creates an new User.
 */
@Entity
@Table(name = "\"user\"")
data class User(
        @Column(unique = true)
        val username: String,
        @JsonIgnore
        val password: String,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long = -1)
