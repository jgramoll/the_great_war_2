package games

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApplicationTests {

    @Autowired
    lateinit var restTemplate: TestRestTemplate

    @Test
    fun test() {
        //TODO real test
        restTemplate.getForObject("/", String::class.java)
    }
}

class MainTests {
    @Test
    fun mainTest() {
        main(emptyArray())
    }
}