package games

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit4.SpringRunner
import kotlin.test.assertEquals

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApplicationTests {

    @Autowired
    lateinit var restTemplate: TestRestTemplate

    @Test
    fun test() {
        //TODO real test
        val response = restTemplate.getForEntity("/api/games", String::class.java)
        assertEquals(response.statusCode, HttpStatus.OK)
    }
}

class MainTests {
    @Test
    fun mainTest() {
        main(emptyArray())
    }
}