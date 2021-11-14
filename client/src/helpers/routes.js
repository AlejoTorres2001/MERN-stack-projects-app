const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  account: "/account",
  projects: "/projects",
  project: (projectId) =>
    projectId ? `/project/:${projectId}` : "/project/:projectId",
  admin: {
    users: "/admin/UsersPage",
  },
};
export default routes;
