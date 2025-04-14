package com.kob_backup.backend.controller.pk;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/pk/")
public class indexController {
    @RequestMapping("index/")
    public String index() {
        return "pk/index.html";
    }
}
