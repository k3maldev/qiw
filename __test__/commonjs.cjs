const Qiw = require("../src/cjs/main.cjs");

const schema = Qiw.createYamlSchema("message: string");

const data = "message: string";

console.log(Qiw.checkYamlSchema(data, schema));
