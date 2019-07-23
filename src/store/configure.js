/**
 * 스토어를 생성하는 함수를 만들어서 export 함
 */

import { createStore } from "redux";
import modules from "./modules";

const configure = async () => {
  const store = createStore(modules);

  return store;
};

export default configure;
