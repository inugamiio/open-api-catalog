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

import io.inugami.open.api.interfaces.api.model.example.UserDTO;
import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.enums.ParameterStyle;
import io.swagger.v3.oas.annotations.extensions.Extension;
import io.swagger.v3.oas.annotations.extensions.ExtensionProperty;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.links.Link;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tags({
        @Tag(
                name = "domain-application",
                description = "Expose basic application API",
                externalDocs = @ExternalDocumentation(
                        description = "Sed tincidunt arcu eget sem semper, lobortis tincidunt nisl viverra",
                        url = "http://ingami.io",
                        extensions = {
                                @Extension(
                                        name = "trace",
                                        properties = {
                                                @ExtensionProperty(name = "uid", value = "aed20246-b567-4401-8529-eaf510382451")
                                        }
                                )
                        }
                )
        ),
        @Tag(name = "example"),
        @Tag(name = "user")
})
@RequestMapping(path = "example/v1")
public interface BasicRestApi {


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    List<UserDTO> getAll();

    @Operation(operationId = "USER-CREATE",
            summary = "Create new user",
            description = "Create new user and return saved user",
            tags = {"create", "user"},
            parameters = {
                    @Parameter(in = ParameterIn.HEADER,
                            name = "x-correlation-id",
                            description = "allow to trace user session",
                            style = ParameterStyle.SIMPLE,
                            examples = {
                                    @ExampleObject(
                                            name = "nominal",
                                            summary = "nominal correlation-id",
                                            value = "a081654f-456d-4ab6-9bea-1531094021e2",
                                            externalValue = "http://ingami.io/mock/create/correlation-id",
                                            extensions = @Extension(
                                                    name = "trace",
                                                    properties = {
                                                            @ExtensionProperty(name = "uid", value = "aed20246-b567-4401-8529-eaf510382451")
                                                    }
                                            ))
                            },
                            example = "45c153b3-93bc-4e34-89dd-bb851f585178")
            },
            externalDocs = @ExternalDocumentation(
                    description = "Pellentesque a cursus justo. Pellentesque mollis eleifend",
                    url = "http://ingami.io/mock/create",
                    extensions = {
                            @Extension(
                                    name = "trace",
                                    properties = {
                                            @ExtensionProperty(name = "uid", value = "aed20246-b567-4401-8529-eaf510382451")
                                    }
                            )
                    }
            ),
            requestBody = @RequestBody(
                    content = {
                            @Content(mediaType = "application/json",
                                    examples = {
                                            @ExampleObject(
                                                    name = "nominal",
                                                    summary = "Ut lectus lacus, mattis quis leo in",
                                                    externalValue = "http://ingami.io/mock/create",
                                                    description = "blandit lobortis ex. Morbi non nulla odio",

                                                    extensions = @Extension(
                                                            name = "trace",
                                                            properties = {
                                                                    @ExtensionProperty(name = "uid", value = "22379080-b5ac-44dc-b661-b2eb54c26d96")
                                                            }
                                                    ),
                                                    value = """
                                                            {
                                                              "sex": "FEMALE",
                                                              "firstName": "Émilie",
                                                              "lastName": "Lalonde",
                                                              "email": "emilie.lalonde@mock.org",
                                                              "old": 35,
                                                              "birthday": "1988-04-12",
                                                              "nationality": "CH",
                                                              "canton": "VD",
                                                              "deviceIdentifier": "401f0498-c43f-43ad-a3f4-2888838332ad"
                                                            }                                                          
                                                            """
                                            )
                                    })
                    }
            )
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Successfully retrieved",
                    headers = {
                            @Header(name = "location", description = "path to user created")
                    },
                    links = {
                            @Link(name = "user data", description = "Aenean pulvinar auctor interdum.")
                    },
                    content = {
                            @Content(mediaType = "application/json",
                                    examples = {
                                            @ExampleObject(
                                                    name = "nominal",
                                                    summary = "Ut lectus lacus, mattis quis leo in",
                                                    externalValue = "http://ingami.io/mock/create",
                                                    description = "blandit lobortis ex. Morbi non nulla odio",

                                                    extensions = @Extension(
                                                            name = "trace",
                                                            properties = {
                                                                    @ExtensionProperty(name = "uid", value = "22379080-b5ac-44dc-b661-b2eb54c26d96")
                                                            }
                                                    ),
                                                    value = """
                                                            {
                                                              "id": 1,
                                                              "sex": "FEMALE",
                                                              "firstName": "Émilie",
                                                              "lastName": "Lalonde",
                                                              "email": "emilie.lalonde@mock.org",
                                                              "old": 35,
                                                              "birthday": "1988-04-12",
                                                              "nationality": "CH",
                                                              "canton": "VD",
                                                              "deviceIdentifier": "401f0498-c43f-43ad-a3f4-2888838332ad"
                                                            }                                                          
                                                            """
                                            )
                                    })
                    }
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "error on creating user",
                    content = {
                            @Content(mediaType = "application/json",
                                    examples = {
                                            @ExampleObject(
                                                    name = "VERSION-2_0",
                                                    extensions={@Extension(name="error-code",properties={@ExtensionProperty(name="code",value= "VERSION-2_1")} )},
                                                    summary = "Ut lectus lacus, mattis quis leo in",
                                                    externalValue = "http://ingami.io/mock/create",
                                                    description = "blandit lobortis ex. Morbi non nulla odio",
                                                    value = """
                                                            {
                                                                "cause": {
                                                                    "message": "email required",
                                                                    "localizedMessage": "email required"
                                                                },
                                                                "type": "about:blank",
                                                                "title": "no data found",
                                                                "status": "BAD_REQUEST",
                                                                "parameters": {
                                                                    "errorCode": "VERSION-2_1",
                                                                    "errorType": "functional",
                                                                },
                                                                "message": "email required",
                                                                "suppressed": [],
                                                                "localizedMessage": "email required"
                                                            }                                                         
                                                            """
                                            ),
                                            @ExampleObject(
                                                    name = "VERSION-2_1",
                                                    extensions={@Extension(name="error-code",properties={@ExtensionProperty(name="code",value= "VERSION-2_1")} )},
                                                    summary = "Ut lectus lacus, mattis quis leo in",
                                                    externalValue = "http://ingami.io/mock/create",
                                                    description = "blandit lobortis ex. Morbi non nulla odio",
                                                    value = """
                                                            {
                                                                "cause": {
                                                                    "message": "email required",
                                                                    "localizedMessage": "email required"
                                                                },
                                                                "type": "about:blank",
                                                                "title": "no data found",
                                                                "status": "BAD_REQUEST",
                                                                "parameters": {
                                                                    "errorCode": "VERSION-2_1",
                                                                    "errorType": "functional",
                                                                },
                                                                "message": "email required",
                                                                "suppressed": [],
                                                                "localizedMessage": "email required"
                                                            }                                                         
                                                            """
                                            )
                                    })
                    }
            )
    })
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)default
    UserDTO create( @RequestBody final UserDTO application) {
        return null;
    }
    @GetMapping(path = "{uid}", produces = MediaType.APPLICATION_JSON_VALUE)
    UserDTO getByUid(@PathVariable final String uid);

    @PatchMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    UserDTO update(@PathVariable final long uid, @RequestBody final UserDTO application);

    @PutMapping(path = "{uid}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    UserDTO updateForce(@PathVariable final long uid, @RequestBody final UserDTO application);

    @DeleteMapping(path = "{uid}")
    void delete(@PathVariable final long uid);


    @RequestMapping(method = RequestMethod.OPTIONS)
    void option();

    @RequestMapping(method = RequestMethod.HEAD)
    void head();

    @RequestMapping(method = RequestMethod.TRACE)
    void trace();
}
