import { parseString } from "xml2js";

/**
 * Creates an object containing type rules for the Xml format.
 *
 * @param {object} schema
 *
 * @returns {object}
 */

const createXmlSchema = (xmlSchema) => {
  let schema = null;
  try {
    schema = parseString(xmlSchema);
  } catch (_) {
    // ? This place is empty because the function is requested to return 'TypeError'.
  }
  if (typeof schema !== "object") {
    const error = new TypeError(
      "The 'schema' parameter must contain a Xml object."
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
    schemaString: schema,
    type: 'xml'
  };
};

export default createXmlSchema;
