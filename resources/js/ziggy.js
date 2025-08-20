const Ziggy = {
  url: "http://localhost",
  port: null,
  defaults: {},
  routes: {
    login: { uri: "login", methods: ["GET", "HEAD"] },
    logout: { uri: "logout", methods: ["POST"] },

    // Admin
    "admin.dashboard": { uri: "admin/dashboard", methods: ["GET", "HEAD"] },
    "admin.users.index": { uri: "admin/users", methods: ["GET", "HEAD"] },
    "admin.users.create": { uri: "admin/users/create", methods: ["GET", "HEAD"] },
    "admin.users.store": { uri: "admin/users", methods: ["POST"] },
    "admin.users.show": {
      uri: "admin/users/{user}",
      methods: ["GET", "HEAD"],
      parameters: ["user"],
    },
    "admin.users.edit": {
      uri: "admin/users/{user}/edit",
      methods: ["GET", "HEAD"],
      parameters: ["user"],
      bindings: { user: "id" },
    },
    "admin.users.update": {
      uri: "admin/users/{user}",
      methods: ["PUT", "PATCH"],
      parameters: ["user"],
      bindings: { user: "id" },
    },
    "admin.users.destroy": {
      uri: "admin/users/{user}",
      methods: ["DELETE"],
      parameters: ["user"],
      bindings: { user: "id" },
    },

    // Users
    "users.dashboard": { uri: "users/dashboard", methods: ["GET", "HEAD"] },

    // Storage
    "storage.local": {
      uri: "storage/{path}",
      methods: ["GET", "HEAD"],
      wheres: { path: ".*" },
      parameters: ["path"],
    },
  },
};

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export default Ziggy;   // ⬅️ PENTING, bikin default export
