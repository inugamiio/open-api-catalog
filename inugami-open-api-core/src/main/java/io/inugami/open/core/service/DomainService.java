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

import io.inugami.open.api.model.DomainDTO;
import io.inugami.open.api.service.IDomainService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DomainService implements IDomainService {
    // =================================================================================================================
    // STATIC
    // =================================================================================================================
    public static final String              DOMNAIN_UUID = "8afbdb81-eabe-4dde-9cc1-7e17126cba16";

    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private static final DomainDTO           CHILD        = DomainDTO.builder()
                                                                     .name("java")
                                                                     .uid(DOMNAIN_UUID)
                                                                     .parentUid("0710ed5d-4fd0-4941-b092-22e117cc4519")
                                                                     .build();

    private static final DomainDTO MAIN = DomainDTO.builder()
                                                   .name("application")
                                                   .uid("0710ed5d-4fd0-4941-b092-22e117cc4519")
                                                   .children(List.of(CHILD))
                                                   .build();




    // =================================================================================================================
    // READ
    // =================================================================================================================
    @Override
    public List<DomainDTO> getAll() {
        return  List.of(MAIN, CHILD);
    }

    @Override
    public DomainDTO getByUid(final String uid) {
        return  DOMNAIN_UUID.equals(uid) ? CHILD : MAIN;
    }


    // =================================================================================================================
    // UPDATE
    // =================================================================================================================

    @Override
    public DomainDTO update(final long uid, final DomainDTO domainDTO, final boolean force) {
        return null;
    }


    // =================================================================================================================
    // DELETE
    // =================================================================================================================
    @Override
    public void delete(final long uid) {

    }
}
