# Module: Frontend/Renderers/GameRenderer/Programs/TextProgram

## Table of contents

### Variables

- [TEXT_PROGRAM_DEFINITION](frontend_renderers_gamerenderer_programs_textprogram.md#text_program_definition)

## Variables

### TEXT_PROGRAM_DEFINITION

• `Const` **TEXT_PROGRAM_DEFINITION**: _object_

#### Type declaration

| Name                         | Type                                                                                 |
| :--------------------------- | :----------------------------------------------------------------------------------- |
| `attribs`                    | _object_                                                                             |
| `attribs.color`              | _object_                                                                             |
| `attribs.color.dim`          | _number_                                                                             |
| `attribs.color.name`         | _string_                                                                             |
| `attribs.color.normalize`    | _boolean_                                                                            |
| `attribs.color.type`         | [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md)   |
| `attribs.position`           | _object_                                                                             |
| `attribs.position.dim`       | _number_                                                                             |
| `attribs.position.name`      | _string_                                                                             |
| `attribs.position.normalize` | _boolean_                                                                            |
| `attribs.position.type`      | [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md)   |
| `attribs.texcoord`           | _object_                                                                             |
| `attribs.texcoord.dim`       | _number_                                                                             |
| `attribs.texcoord.name`      | _string_                                                                             |
| `attribs.texcoord.normalize` | _boolean_                                                                            |
| `attribs.texcoord.type`      | [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md)   |
| `fragmentShader`             | _string_                                                                             |
| `uniforms`                   | _object_                                                                             |
| `uniforms.matrix`            | _object_                                                                             |
| `uniforms.matrix.name`       | _string_                                                                             |
| `uniforms.matrix.type`       | [_UniformType_](../enums/frontend_renderers_gamerenderer_enginetypes.uniformtype.md) |
| `uniforms.texture`           | _object_                                                                             |
| `uniforms.texture.name`      | _string_                                                                             |
| `uniforms.texture.type`      | [_UniformType_](../enums/frontend_renderers_gamerenderer_enginetypes.uniformtype.md) |
| `vertexShader`               | _string_                                                                             |
