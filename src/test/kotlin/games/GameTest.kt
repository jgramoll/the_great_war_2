package games

import org.junit.Test

class GameTest {
    @Test
    fun test() {
        //TODO real test
        val g = Game("title", 1)
        g.toString()
        g.equals(null)
        g.component1()
        g.component2()
        g.copy("a", 1)
        g.hashCode()
    }
}