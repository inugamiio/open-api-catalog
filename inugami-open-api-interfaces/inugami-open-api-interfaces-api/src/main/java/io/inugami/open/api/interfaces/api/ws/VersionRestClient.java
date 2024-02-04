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
package io.inugami.open.api.interfaces.api.ws;

import io.inugami.open.api.interfaces.api.model.VersionDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping(path = "ws/v1/version")
public interface VersionRestClient {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<VersionDTO> getAll();

    @GetMapping(path = "{uid}",produces = MediaType.APPLICATION_JSON_VALUE)
    VersionDTO getByUid(@PathVariable final String uid);

    @GetMapping(path = "{uid}/open-api",produces = MediaType.APPLICATION_JSON_VALUE)
    Map<String, Object> getOpenApi(@PathVariable final String uid);

    @PutMapping(path = "{uid}/open-api",produces = MediaType.APPLICATION_JSON_VALUE)
    void updateOpenApi(@PathVariable final String uid);

    @PatchMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    VersionDTO update(@PathVariable final String uid, @RequestBody final VersionDTO domainDTO);

    @PutMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    VersionDTO updateForce(@PathVariable final String uid, @RequestBody final VersionDTO domainDTO);


    @DeleteMapping(path = "{uid}")
    void delete(@PathVariable final String uid);
}
