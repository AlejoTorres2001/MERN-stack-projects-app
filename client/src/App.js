import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>

      <AppRouter></AppRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
