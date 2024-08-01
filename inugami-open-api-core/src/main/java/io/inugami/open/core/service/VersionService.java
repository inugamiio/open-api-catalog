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
package io.inugami.open.core.service;

import io.inugami.open.api.model.VersionDTO;
import io.inugami.open.api.service.IOpenApiDAO;
import io.inugami.open.api.service.IVersionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class VersionService implements IVersionService {


    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private final IOpenApiDAO openApiDAO;

    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<VersionDTO> getAll() {
        return null;
    }

    @Override
    public VersionDTO getByUid(final String uid) {
        return null;
    }

    @Override
    public Map<String, Object> getOpenApi(final String uid) {
        return openApiDAO.readOpenApi("http://localhost:8080/v3/api-docs");
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================
    @Override
    public void updateOpenApi(final String uid) {

    }

    @Override
    public VersionDTO update(final String uid, final VersionDTO version, final boolean force) {
        return null;
    }

    // =================================================================================================================
    // DELETE
    // =================================================================================================================
    @Override
    public void delete(final String uid) {

    }
}
