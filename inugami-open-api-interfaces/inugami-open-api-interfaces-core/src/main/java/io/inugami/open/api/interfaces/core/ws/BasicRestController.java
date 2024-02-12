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

import io.inugami.open.api.interfaces.api.model.example.UserDTO;
import io.inugami.open.api.interfaces.api.ws.BasicRestApi;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequiredArgsConstructor
@RestController
public class BasicRestController implements BasicRestApi {
    @Override
    public List<UserDTO> getAll() {
        return null;
    }

    @Override
    public UserDTO create(final UserDTO application) {
        return null;
    }

    @Override
    public UserDTO getByUid(final String uid) {
        return null;
    }

    @Override
    public UserDTO update(final long uid, final UserDTO application) {
        return null;
    }

    @Override
    public UserDTO updateForce(final long uid, final UserDTO application) {
        return null;
    }

    @Override
    public void delete(final long uid) {

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
