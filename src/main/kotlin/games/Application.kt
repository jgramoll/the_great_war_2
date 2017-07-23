package games;

import org.springframework.context.annotation.Bean
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class GameApplication {
	@Bean
	open fun init(repository: GameRepository) = CommandLineRunner {
		repository.save(Game("First", 1))
		repository.save(Game("Second", 2))
	}
}

fun main(args: Array<String>) {
    SpringApplication.run(GameApplication::class.java, *args)
}
