package jgramoll.the_great_war.users

import org.springframework.data.jpa.repository.JpaRepository

/**
 * Repository for Users
 */
interface UserRepository : JpaRepository<User, Long> {

    /**
     * Find User by username
     *
     * @param String the username of the User to find.
     * @return User
     */
    fun findByUsername(username: String): User
}