import Welcome from "./screens/Welcome";
import PersonalDetails from "./screens/PersonalDetails";
import Dob from "./screens/Dob";
import Agreement from "./screens/Agreement";
import NotFound from "./screens/NotFound";
import Header from "./components/Header";
import "./styles/Common.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={ <Welcome /> }></Route>
          <Route path="/onboard-test.moneylion.com/welcome" exact element={ <Welcome /> }></Route>
          <Route path="/onboard-test.moneylion.com/personalDetails" exact element={ <PersonalDetails /> }></Route>
          <Route path="/onboard-test.moneylion.com/dob" exact element={ <Dob /> }></Route>
          <Route path="/onboard-test.moneylion.com/agreement" exact element={ <Agreement /> }></Route>
          <Route path="*" element={ <NotFound />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
