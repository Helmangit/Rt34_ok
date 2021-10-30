package Motorb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@EntityScan(basePackages = {"Motorb.modelo"})  // scan JPA entities
@SpringBootApplication
public class Reto3MotorbApplication {

	public static void main(String[] args) {
		SpringApplication.run(Reto3MotorbApplication.class, args);
	}

}
