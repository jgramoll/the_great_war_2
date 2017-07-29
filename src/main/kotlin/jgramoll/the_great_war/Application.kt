package jgramoll.the_great_war

import jgramoll.the_great_war.users.User
import jgramoll.the_great_war.users.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.security.crypto.password.PasswordEncoder

@SpringBootApplication
class GameApplication {
    @Bean
    open fun init(repository: UserRepository, passwordEncoder: PasswordEncoder) = CommandLineRunner {
        val p = passwordEncoder.encode("asdf")
        repository.save(User("asdf", p))
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(GameApplication::class.java, *args)
}
