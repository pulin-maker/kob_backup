package com.kob_backup.backend.controller.pk;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class getBotInfo {
    @RequestMapping("getbotinfo/")
    public Map<String, String> botInfo() {
        Map<String, String> map = new HashMap();
        map.put("name", "chubao");
        map.put("rating", "1400");
        return map;
    }
}
