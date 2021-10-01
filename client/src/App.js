import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Layout from "./components/layouts/Layout";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <Router> // to be able to access router hooks un Authprovider 
      <AuthProvider>
        <Layout>
      <AppRouter/>
        </Layout>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
