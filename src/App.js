import { Nav, Form, Reviews } from "./components"
import { ReviewProvider, FormProvider } from "./Contexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <ReviewProvider>
      <FormProvider>
        <Router>
          <div className="app">
            <Nav />
            <div className="background">
              <Routes>
                <Route exact path="/home" element={<Form />} />
                <Route exact path="/reviews" element={<Reviews />} />
              </Routes>
            </div>
          </div>
        </Router>
      </FormProvider>
    </ReviewProvider>
  );
}

export default App;
