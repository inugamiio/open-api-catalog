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

import io.inugami.open.api.interfaces.api.model.OpenApiDTO;
import org.mapstruct.Mapper;

@Mapper
public interface OpenApiDTORestMapper {

    io.inugami.open.api.model.open.api.OpenApiDTO convertToCoreDTO(final OpenApiDTO dto);

    OpenApiDTO convertToRestDTO(final io.inugami.open.api.model.open.api.OpenApiDTO dto);
}
