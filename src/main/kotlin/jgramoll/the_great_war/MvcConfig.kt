package jgramoll.the_great_war

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

@Configuration
class MvcConfig : WebMvcConfigurerAdapter() {

    override fun addViewControllers(registry: ViewControllerRegistry?) {
        registry!!
        registry.addViewController("/login").setViewName("login")
        registry.addViewController("/games/**").setViewName("main")
    }
}