package jgramoll.the_great_war

import jgramoll.the_great_war.users.MyUserDetailsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder

/**
 * Configuration for Security
 *
 * All routes require authentication except the login page
 */
@Configuration
@EnableWebSecurity
class WebSecurityConfig : WebSecurityConfigurerAdapter() {

    /**
     * Configuration for Security
     *
     * All routes require authentication except the login page
     */
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        //TODO enable csrf again when I figure out why post fails
        http.csrf().disable()
            .authorizeRequests()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll()
    }

    @Autowired
    private lateinit var userDetailsService: MyUserDetailsService

    /**
     * Configure authentication
     *
     * This is called on SpringApp startup
     *
     * @param AuthenticationManagerBuilder
     */
    @Autowired
    @Throws(Exception::class)
    fun configureGlobal(auth: AuthenticationManagerBuilder) {
        auth.authenticationProvider(authenticationProvider())
    }

    /**
     * Create an authentication provider
     *
     * @return DoaAuthenticationProvider
     */
    @Bean
    fun authenticationProvider(): DaoAuthenticationProvider {
        val authProvider = DaoAuthenticationProvider()
        authProvider.setUserDetailsService(userDetailsService)
        authProvider.setPasswordEncoder(passwordEncoder())
        return authProvider
    }

    /**
     * Return BCryptPasswordEncoder to be used for encoding passwords
     *
     * @return PasswordEncoder
     */
    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder(11)
    }
}
