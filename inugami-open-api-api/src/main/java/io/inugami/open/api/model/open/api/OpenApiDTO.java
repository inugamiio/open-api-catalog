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
package io.inugami.open.api.model.open.api;

import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
@Setter
@Getter
public class OpenApiDTO implements Serializable {
    private String                      openapi;
    private OpenApiInfoDTO              info;
    private String                      externalDocs;
    private List<OpenApiServerDTO>      servers;
    private Map<String, OpenApiPathDTO> paths;

    private OpenApiComponentsDTO components;
}
