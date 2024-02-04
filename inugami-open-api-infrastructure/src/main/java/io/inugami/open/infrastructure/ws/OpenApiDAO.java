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
package io.inugami.open.infrastructure.ws;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import io.inugami.api.exceptions.services.ConnectorException;
import io.inugami.api.marshalling.JsonMarshaller;
import io.inugami.commons.connectors.HttpBasicConnector;
import io.inugami.commons.connectors.HttpConnectorResult;
import io.inugami.commons.connectors.HttpRequest;
import io.inugami.open.api.service.IOpenApiDAO;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Map;

@Service
public class OpenApiDAO implements IOpenApiDAO {

    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    private final static TypeReference<Map<String, Object>> OPEN_API_TYPE = new TypeReference<>() {
    };


    // =================================================================================================================
    // READ
    // =================================================================================================================

    @Override
    public Map<String, Object> readOpenApi(final String url) {
        Map<String, Object> result = null;
        try {
            final HttpConnectorResult response = new HttpBasicConnector().get(HttpRequest.builder()
                                                                                         .url(url)
                                                                                         .build());
            final String json = new String(response.getData(), StandardCharsets.UTF_8);
            result = JsonMarshaller.getInstance().getDefaultObjectMapper().readValue(json, OPEN_API_TYPE);
        } catch (ConnectorException e) {
            // TODO
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return result;
    }

    // =================================================================================================================
    // UPDATE
    // =================================================================================================================


    // =================================================================================================================
    // DELETE
    // =================================================================================================================
}
