import Qiw from "../src/esm/main.js";

const schema = Qiw.createYamlSchema("message: string");

const data = "message: string"

console.log(Qiw.checkYamlSchema(data, schema));
