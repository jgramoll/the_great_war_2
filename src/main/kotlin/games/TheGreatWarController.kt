package games

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
class TheGreatWarController {
    @RequestMapping(value="/the_great_war", method= arrayOf(RequestMethod.GET))
    fun the_great_war(): Game {
        return Game("test")
    }
}
