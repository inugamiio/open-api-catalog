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

import io.inugami.open.api.interfaces.api.model.ApplicationDTO;
import io.inugami.open.api.interfaces.api.model.DomainDTO;
import io.inugami.open.api.interfaces.api.model.OpenApiDTO;
import io.inugami.open.api.interfaces.api.ws.ApplicationRestClient;
import io.inugami.open.api.interfaces.api.ws.DomainRestClient;
import io.inugami.open.api.interfaces.core.mapper.ApplicationDTORestMapper;
import io.inugami.open.api.service.IApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ApplicationRestController implements ApplicationRestClient {


    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private final IApplicationService      applicationService;
    private final ApplicationDTORestMapper applicationDTORestMapper;

    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<ApplicationDTO> getAll() {
        return applicationService.getAll()
                                 .stream()
                                 .map(applicationDTORestMapper::convertToRestDTO)
                                 .toList();
    }

    @Override
    public ApplicationDTO create(final ApplicationDTO application) {
        return null;
    }

    @Override
    public ApplicationDTO getByUid(final String uid) {
        return applicationDTORestMapper.convertToRestDTO(applicationService.getByUid(uid));
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================
    @Override
    public ApplicationDTO update(final long uid, final ApplicationDTO value) {
        return applicationDTORestMapper.convertToRestDTO(applicationService.update(uid, applicationDTORestMapper.convertToCoreDTO(value), false));
    }

    @Override
    public ApplicationDTO updateForce(final long uid, final ApplicationDTO value) {
        return applicationDTORestMapper.convertToRestDTO(applicationService.update(uid, applicationDTORestMapper.convertToCoreDTO(value), true));
    }


    // =================================================================================================================
    // DELETE
    // =================================================================================================================
    @Override
    public void delete(final long uid) {
        applicationService.delete(uid);
    }

    @Override
    public void option() {

    }

    @Override
    public void head() {

    }

    @Override
    public void trace() {

    }
}
