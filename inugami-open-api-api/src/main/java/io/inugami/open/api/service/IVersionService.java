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
package io.inugami.open.api.service;

import io.inugami.open.api.model.open.api.OpenApiDTO;
import io.inugami.open.api.model.VersionDTO;

import java.util.List;
import java.util.Map;

public interface IVersionService {

    List<VersionDTO> getAll();

    VersionDTO getByUid(final String uid);

    Map<String, Object> getOpenApi(final String uid);

    void updateOpenApi(final String uid);

    VersionDTO update(final String uid, final VersionDTO version, final boolean force);


    void delete(final String uid);
}
