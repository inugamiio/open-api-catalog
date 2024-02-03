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

import io.inugami.open.api.model.ApplicationDTO;
import io.inugami.open.api.service.IApplicationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService implements IApplicationService {


    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================


    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<ApplicationDTO> getAll() {
        return null;
    }

    @Override
    public ApplicationDTO getByUid(final String uid) {
        return null;
    }

    @Override
    public ApplicationDTO update(final long uid, final ApplicationDTO application, final boolean force) {
        return null;
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================


    // =================================================================================================================
    // DELETE
    // =================================================================================================================

    @Override
    public void delete(final long uid) {

    }
}
