package jgramoll.the_great_war.users

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class MyUserPrincipal(private val user: User) : UserDetails {
    override fun getUsername(): String = user.username
    override fun getPassword(): String = user.password
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isEnabled(): Boolean = true

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return mutableListOf()
    }
}