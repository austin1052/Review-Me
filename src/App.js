import { Nav, Form, Reviews } from "./components"
import { FormProvider } from "./Contexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="app">
          <Nav />
          <div className="background">
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
