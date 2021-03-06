package jgramoll.the_great_war.games

import io.github.bonigarcia.wdm.ChromeDriverManager
import org.junit.After
import org.junit.Assert
import org.junit.Before
import org.junit.BeforeClass
import org.junit.Test
import org.junit.runner.RunWith
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.embedded.LocalServerPort
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import java.util.concurrent.TimeUnit

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class GameListAcceptanceTest {
    @Autowired
    private lateinit var gameRepository: GameRepository

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
        gameRepository.save(Game("First"))

        driver = ChromeDriver()
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS)

        //TODO paths variables
        driver.get("http://localhost:$serverPort/games")

        //TODO sign in as helper function
        driver.findElement(By.name("username")).sendKeys("asdf")
        driver.findElement(By.name("password")).sendKeys("asdf\n")
    }

    @After
    fun teardown() = driver.quit()

    @Test
    fun testGameListLink() {
        val gameName = "First"
        val link = driver.findElement(By.linkText(gameName))
        val href = link.getAttribute("href")

        link.click()

        Assert.assertEquals(href, driver.currentUrl)
        Assert.assertNotNull(driver.findElement(By.xpath("//h1[text() = '$gameName']")))
    }

    @Test
    fun testGameDetailsFetch() {
        val gameName = "First"
        val link = driver.findElement(By.linkText(gameName))
        val href = link.getAttribute("href")

        driver.get(href)
        Assert.assertEquals(href, driver.currentUrl)
        Assert.assertNotNull(driver.findElement(By.xpath("//h1[text() = '$gameName']")))
    }
}
