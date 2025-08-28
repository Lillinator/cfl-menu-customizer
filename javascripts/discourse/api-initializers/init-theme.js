import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.replaceIcon('d-chat', 'comment-dots');
});
