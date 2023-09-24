import checkKeys from "./checkKeys.js";
import checkValue from "./checkValue.js";
import findKey from "./findKey.js";
import { parse } from "yaml";

const checkYamlSchema = (yamlValue, schema) => {
  let value = null;
  try {
    value = parse(yamlValue);
  } catch (_) {
    // ? This place is empty because the function is requested to return 'TypeError'.
  }

  if (!checkKeys(JSON.stringify(value), JSON.stringify(schema.schema))) {
    const error = new TypeError(
      "The value does not match the specified schema."
    );
    return {
      error,
    };
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

  let isTypesTrue = true;
  Object.values(value).forEach((name) => {
    if (!checkValue(name, schema.schema[findKey(value, name)])) {
      isTypesTrue = false;
    }
  });

  if (!isTypesTrue) {
    const error = new SyntaxError(
      "The value does not match the types in the schema."
    );
    return {
      error,
    };
  }

  return {
    error: false,
    schema,
    schemaString: JSON.stringify(schema),
    ok: true,
    type: "yaml",
  };
};

export default checkYamlSchema;
