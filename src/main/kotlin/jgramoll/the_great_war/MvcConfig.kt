package jgramoll.the_great_war

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * Configure Spring MVC
 */
@Configuration
class MvcConfig : WebMvcConfigurerAdapter() {

    /**
     * Map controller routes to view templates
     *
     * most routes are caught by the `main` view which is
     * is the single page react app.
     */
    override fun addViewControllers(registry: ViewControllerRegistry?) {
        registry!!
        registry.addViewController("/login").setViewName("login")
        registry.addViewController("/games/**").setViewName("main")
    }
}