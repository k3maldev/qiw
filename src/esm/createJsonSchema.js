/**
 * Creates an object containing type rules for the JSON format.
 *
 * @param {object} schema
 *
 * @returns {object}
 */

const createJsonSchema = (schema) => {
  if (typeof schema !== "object") {
    const error = new TypeError(
      "The 'schema' parameter must contain a JSON object."
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
    schemaString: JSON.stringify(schema),
    ok: true,
    type: "json",
  };
};

export default createJsonSchema;
