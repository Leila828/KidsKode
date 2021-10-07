package com.pfe.mspaiement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
@SpringBootApplication
@EnableFeignClients

public class MsPaiementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MsPaiementApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {

	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		//	config.addAllowedOrigin("*");
		config.addAllowedOrigin("http://localhost:4200");
		//config.addAllowedOrigin("http://192.168.1.21:8100");

		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

}
