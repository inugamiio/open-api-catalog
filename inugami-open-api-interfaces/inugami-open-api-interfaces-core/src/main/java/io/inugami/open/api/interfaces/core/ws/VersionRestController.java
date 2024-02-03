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

import io.inugami.open.api.interfaces.api.model.OpenApiDTO;
import io.inugami.open.api.interfaces.api.model.VersionDTO;
import io.inugami.open.api.interfaces.api.ws.VersionRestClient;
import io.inugami.open.api.interfaces.core.mapper.OpenApiDTORestMapper;
import io.inugami.open.api.interfaces.core.mapper.VersionDTORestMapper;
import io.inugami.open.api.service.IVersionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class VersionRestController implements VersionRestClient {

    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private final IVersionService      versionService;
    private final VersionDTORestMapper versionDTORestMapper;
    private final OpenApiDTORestMapper openApiDTORestMapper;

    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<VersionDTO> getAll() {
        return versionService.getAll()
                             .stream()
                             .map(versionDTORestMapper::convertToRestDTO)
                             .toList();
    }

    @Override
    public VersionDTO getByUid(final String uid) {
        return versionDTORestMapper.convertToRestDTO(versionService.getByUid(uid));
    }

    @Override
    public OpenApiDTO getOpenApi(final String uid) {
        return openApiDTORestMapper.convertToRestDTO(versionService.getOpenApi(uid));
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================
    @Override
    public VersionDTO update(final String uid, final VersionDTO domainDTO) {
        return versionDTORestMapper.convertToRestDTO(versionService.update(uid, versionDTORestMapper.convertToCoreDTO(domainDTO), false));
    }

    @Override
    public VersionDTO updateForce(final String uid, final VersionDTO domainDTO) {
        return versionDTORestMapper.convertToRestDTO(versionService.update(uid, versionDTORestMapper.convertToCoreDTO(domainDTO), false));
    }
    @Override
    public void updateOpenApi(final String uid) {
        versionService.updateOpenApi(uid);
    }

    // =================================================================================================================
    // DELETE
    // =================================================================================================================
    @Override
    public void delete(final String uid) {
        versionService.delete(uid);
    }
}
