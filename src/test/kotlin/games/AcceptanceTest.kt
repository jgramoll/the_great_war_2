package games

import io.github.bonigarcia.wdm.ChromeDriverManager
import org.junit.*
import org.junit.runner.RunWith
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.embedded.LocalServerPort
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.junit4.SpringRunner
import java.util.concurrent.TimeUnit

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
class GamesAcceptanceTest {

    @Autowired
    private lateinit var restTemplate: TestRestTemplate

    private lateinit var driver: WebDriver

    @LocalServerPort
    var serverPort: Int = 0

    companion object {
        @BeforeClass
        @JvmStatic
        fun setupClass() {
            ChromeDriverManager.getInstance().setup()
        }
    }

    @Before
    fun setupTest() {
        driver = ChromeDriver()
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS)
    }

    @After
    fun teardown() = driver.quit()

    @Test
    fun testGameListLink() {
        //TODO paths variables
        driver.get("http://localhost:$serverPort/games")
        println("serverPort ${serverPort}")
        println("driver.pageSource ${driver.pageSource}")

        val gameName = "First"
        val link = driver.findElement(By.linkText(gameName))
        val href = link.getAttribute("href")

        link.click()

        Assert.assertEquals(href, driver.currentUrl)
        Assert.assertEquals(gameName, driver.findElement(By.xpath("//h1")).text)
    }

    @Test
    fun testGameDetailsFetch() {
         driver.get("http://localhost:$serverPort/games")

         //TODO get link from api
         val gameName = "First"
         val link = driver.findElement(By.linkText(gameName))
         val href = link.getAttribute("href")

         driver.get(href)
         Assert.assertEquals(href, driver.currentUrl)
         Assert.assertEquals(gameName, driver.findElement(By.xpath("//h1")).text)
    }
}
