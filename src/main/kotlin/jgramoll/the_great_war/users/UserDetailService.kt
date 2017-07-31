package jgramoll.the_great_war.users

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

/**
 * Service for user authentication.
 */
@Service
class MyUserDetailsService : UserDetailsService {

    @Autowired
    private lateinit var userRepository: UserRepository

    /**
     * Find the UserDetails by username.
     *
     * @param String the username of the User.
     * @return UserDetails
     */
    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByUsername(username)
        return MyUserPrincipal(user)
    }
}