package jgramoll.the_great_war

import org.junit.Test

class MainTests {
    @Test
    fun mainTest() {
        System.getProperties().put( "server.port", 9090 )
        main(emptyArray())
    }
}