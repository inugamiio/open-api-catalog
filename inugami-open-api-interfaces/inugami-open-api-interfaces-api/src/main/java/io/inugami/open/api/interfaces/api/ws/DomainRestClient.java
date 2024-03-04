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

import io.inugami.open.api.interfaces.api.model.DomainDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Tags({
        @Tag(name = "inugami", description = "Inugami Open-API catalog endpoints"),
        @Tag(name = "domain", description = "domain endpoints")
})
@RequestMapping(path = "ws/v1/domain")
public interface DomainRestClient {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<DomainDTO> getAll();

    @GetMapping(path = "{uid}",produces = MediaType.APPLICATION_JSON_VALUE)
    DomainDTO getByUid(@PathVariable final String uid);

    @PatchMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    DomainDTO update(@PathVariable final long uid, @RequestBody final DomainDTO domainDTO);

    @PutMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    DomainDTO updateForce(@PathVariable final long uid, @RequestBody final DomainDTO domainDTO);

    @DeleteMapping(path = "{uid}")
    void delete(@PathVariable final long uid);
}
