package jgramoll.the_great_war.users

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

/**
 * A UserDetails to use for authentication
 *
 * @constructor Creates an UserDetail for the User.
 */
class MyUserPrincipal(private val user: User) : UserDetails {
    /**
     * username for User
     *
     * @return String
     */
    override fun getUsername(): String = user.username

    /**
     * password for User
     *
     * @return String
     */
    override fun getPassword(): String = user.password

    /**
     * If the User's credentials are not expired
     *
     * @return Boolean
     */
    override fun isCredentialsNonExpired(): Boolean = true

    /**
     * If the User's account is not expired
     *
     * @return Boolean
     */
    override fun isAccountNonExpired(): Boolean = true

    /**
     * If the User's account is not locked
     *
     * @return Boolean
     */
    override fun isAccountNonLocked(): Boolean = true

    /**
     * If the User's account is enabled
     *
     * @return Boolean
     */
    override fun isEnabled(): Boolean = true

    /**
     * The Authorities for the User
     *
     * @return List of GrantedAuthority
     */
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return mutableListOf()
    }
}