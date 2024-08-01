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
package io.inugami.open.api.interfaces.core.ws;

import io.inugami.open.api.interfaces.api.model.DomainDTO;
import io.inugami.open.api.interfaces.api.ws.DomainRestClient;
import io.inugami.open.api.interfaces.core.mapper.DomainDTORestMapper;
import io.inugami.open.api.service.IDomainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class DomainRestController implements DomainRestClient {


    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private final IDomainService      domainService;
    private final DomainDTORestMapper domainDTORestMapper;


    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<DomainDTO> getAll() {
        return domainService.getAll().stream().map(domainDTORestMapper::convertToRestDTO).toList();
    }

    @Override
    public DomainDTO getByUid(final String uid) {
        return domainDTORestMapper.convertToRestDTO(domainService.getByUid(uid));
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================
    @Override
    public DomainDTO update(final long uid, final DomainDTO domainDTO) {
        return domainDTORestMapper.convertToRestDTO(domainService.update(uid,domainDTORestMapper.convertToCoreDTO(domainDTO), false));
    }

    @Override
    public DomainDTO updateForce(final long uid, final DomainDTO domainDTO) {
        return domainDTORestMapper.convertToRestDTO(domainService.update(uid,domainDTORestMapper.convertToCoreDTO(domainDTO), true));
    }

    // =================================================================================================================
    // DELETE
    // =================================================================================================================
    @Override
    public void delete(final long uid) {
        domainService.delete(uid);
    }
}
