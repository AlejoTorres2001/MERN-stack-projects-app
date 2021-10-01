const routes ={
    home:'/',
    login:'/login',
    register:'/register',
    account:'/account',
    projects:'/projects',
    project: 
    (projectId) => (projectId ? `/project/:${projectId}` : '/project/:projectId'),
    admin:{
        users:'/admin/users'
    }
}
export default routes
