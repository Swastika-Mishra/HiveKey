package com.hivekey.rest_hivekey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RestHivekeyApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestHivekeyApplication.class, args);
	}

//	@GetMapping("/dashboard")
//	public String apiRoot(){
//		return "Hello World";
//	}


}
