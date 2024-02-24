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

import io.inugami.open.api.interfaces.api.model.ApplicationDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tags({
        @Tag(name = "open-api catalog"),
        @Tag(name = "application")
})
@RequestMapping(path = "ws/v1/application")
public interface ApplicationRestClient {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<ApplicationDTO> getAll();

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    ApplicationDTO create( @RequestBody final ApplicationDTO application);

    @GetMapping(path = "{uid}", produces = MediaType.APPLICATION_JSON_VALUE)
    ApplicationDTO getByUid(@PathVariable final String uid);

    @PatchMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ApplicationDTO update(@PathVariable final long uid, @RequestBody final ApplicationDTO application);

    @PutMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ApplicationDTO updateForce(@PathVariable final long uid, @RequestBody final ApplicationDTO application);

    @DeleteMapping(path = "{uid}")
    void delete(@PathVariable final long uid);

}
