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
package io.inugami.open.api.interfaces.core.mapper;

import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InterfaceCoreMapperConfiguration {

    @Bean
    public ApplicationDTORestMapper applicationDTORestMapper() {
        return Mappers.getMapper(ApplicationDTORestMapper.class);
    }


    @Bean
    public DomainDTORestMapper domainDTORestMapper() {
        return Mappers.getMapper(DomainDTORestMapper.class);
    }

    @Bean
    public OpenApiDTORestMapper openApiDTORestMapper() {
        return Mappers.getMapper(OpenApiDTORestMapper.class);
    }


    @Bean
    public VersionDTORestMapper versionDTORestMapper() {
        return Mappers.getMapper(VersionDTORestMapper.class);
    }


}
