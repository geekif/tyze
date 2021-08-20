import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes"

const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));


function App() {
  return (
    <Router>
      <Suspense fallback={ <p>Loading...</p> }>
        <Switch>
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.PROJECTS} component={Projects} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
// structure
// src
// ->components
// ->constants
// ->context
// ->helpers
// ->hooks
// ->pages
// ->lib (firebase is going to live here)
// ->services (firebase functions in here)
// ->styles(tailwind's folder (app,tailwind))