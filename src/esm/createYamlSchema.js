import { parse, stringify } from "yaml";

/**
 * Creates an object containing type rules for the Yaml format.
 *
 * @param {object} schema
 *
 * @returns {object}
 */

const createYamlSchema = (yamlSchema) => {
  let schema = null;
  try {
    schema = parse(yamlSchema);
  } catch (_) {
    // ? This place is empty because the function is requested to return 'TypeError'.
  }
  if (typeof schema !== "object") {
    const error = new TypeError(
      "The 'schema' parameter must contain a Yaml object."
    );
    console.error(error);
    return {
      error,
    };
  }

  Object.values(schema).forEach((value) => {
    if (
      value !== "string" &&
      value !== "number" &&
      value !== "boolean" &&
      value !== "object" &&
      value !== "function" &&
      value !== "undefined" &&
      value !== "null"
    ) {
      const error = new TypeError(
        "'schema' must consist of valid type values."
      );
      console.error(error);
      return {
        error,
      };
    }
  });

  return {
    error: false,
    schema,
    schemaString: stringify(schema),
    type: 'yaml'
  };
};

export default createYamlSchema