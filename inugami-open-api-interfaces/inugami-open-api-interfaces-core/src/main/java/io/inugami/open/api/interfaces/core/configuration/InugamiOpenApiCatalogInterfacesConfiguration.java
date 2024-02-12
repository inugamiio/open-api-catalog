/* --------------------------------------------------------------------
 *  Inugami
 * --------------------------------------------------------------------
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package io.inugami.open.api.interfaces.core.configuration;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SecurityScheme(
        name = "basicAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "basic"

)
@Configuration
public class InugamiOpenApiCatalogInterfacesConfiguration {

    @Bean
    public io.swagger.v3.oas.models.info.Info applicationInfo() {

        return new io.swagger.v3.oas.models.info.Info()
                .title("Inugami OpenApi Catalog")
                .description("Application ddesign to expose multi Open api")
                .version("0.0.1");
    }


    @Bean
    public OpenAPI openApi(final io.swagger.v3.oas.models.info.Info applicationInfo) {
        return new OpenAPI().addServersItem(new Server().url("http://localhost:8080").description("local server"))
                            .info(applicationInfo)
                            .externalDocs(new ExternalDocumentation().url("https://github.com/inugamiio/open-api-catalog"));
    }


}
