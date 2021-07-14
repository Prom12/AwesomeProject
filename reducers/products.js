const Actions = {
  CREATE: "Create",
  UPDATE: "Update",
  DELETE: "Delete",
};
function reducer(state, action) {
  switch (action.type) {
    case Actions.CREATE:
      return {};
    case Actions.UPDATE:
      return {};
    case Actions.DELETE:
      return {};
    default:
      state;
  }
}
