package games;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class HomeController {
  @RequestMapping(path = arrayOf("games/**"))
	fun catchAll(): String {
		return "/index.html";
	}
}