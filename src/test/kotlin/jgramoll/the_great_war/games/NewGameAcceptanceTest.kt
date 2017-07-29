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
import org.springframework.boot.context.embedded.LocalServerPort
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import java.util.concurrent.TimeUnit

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NewGameAcceptanceTest {
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

        //TODO paths variables
        driver.get("http://localhost:$serverPort/games/new")

        //TODO sign in as helper function
        driver.findElement(By.name("username")).sendKeys("asdf")
        driver.findElement(By.name("password")).sendKeys("asdf\n")
    }

    @After
    fun teardown() = driver.quit()

    @Test
    fun createsGame() {
        val title = "test"
        driver.findElement(By.id("title")).sendKeys(title)
        driver.findElement(By.xpath("//input[@type='submit']")).click()

        //TODO paths variables
        Assert.assertNotNull(driver.findElement(By.xpath("//li[contains(.,'$title')]")))
        Assert.assertEquals("http://localhost:$serverPort/games", driver.currentUrl)
    }
}
