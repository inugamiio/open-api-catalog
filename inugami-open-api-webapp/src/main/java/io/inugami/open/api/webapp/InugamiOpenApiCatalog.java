package io.inugami.open.api.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import io.inugami.monitoring.springboot.config.InugamiMonitoringConfig;

@ComponentScan(basePackages = {
        InugamiMonitoringConfig.INUGAMI
})
@SpringBootApplication
public class InugamiOpenApiCatalog {

    public static void main(final String[] args) {
        SpringApplication.run(InugamiOpenApiCatalog.class, args);
    }

}
