import OpenAI from "openai";
import { OPENAPI_KEY } from "./constants";

const openapi = new OpenAI({
  apiKey: OPENAPI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openapi;