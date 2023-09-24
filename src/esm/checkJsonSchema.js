import checkKeys from "./checkKeys.js";
import checkValue from "./checkValue.js";
import findKey from "./findKey.js";

const checkSchema = (value, schema) => {
  if (!checkKeys(value, schema.schema)) {
    const error = new TypeError(
      "The value does not match the specified schema."
    );
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
    type: "json",
  };
};

export default checkSchema;
