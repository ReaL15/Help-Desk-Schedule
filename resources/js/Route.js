import { Ziggy } from "./ziggy";
import route from "ziggy-js";

export default (name, params, absolute = true, config = Ziggy) =>
  route(name, params, absolute, config);
