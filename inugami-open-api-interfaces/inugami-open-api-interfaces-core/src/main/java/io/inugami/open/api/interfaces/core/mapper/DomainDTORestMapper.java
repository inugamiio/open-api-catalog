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

import io.inugami.open.api.interfaces.api.model.ApplicationDTO;
import io.inugami.open.api.interfaces.api.model.DomainDTO;
import org.mapstruct.Mapper;

@Mapper
public interface DomainDTORestMapper {

    io.inugami.open.api.model.DomainDTO convertToCoreDTO(final DomainDTO dto);

    DomainDTO convertToRestDTO(final io.inugami.open.api.model.DomainDTO dto);
}
