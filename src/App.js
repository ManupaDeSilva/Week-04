import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IndoorFacilities from "./pages/IndoorFacilities";
import TracksFileds from "./pages/TracksFileds";
import Swimming from "./pages/Swimming";
import Weightlifting from "./pages/Weightlifting";
import Taekwondo from "./pages/Taekwondo";
import Kickboxing from "./pages/Kickboxing";
import Wrestling from "./pages/Wrestling";
import Football from "./pages/Football";
import Elle from "./pages/Elle";
import Bascketball from "./pages/Bascketball";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/tracksfileds":
        title = "";
        metaDescription = "";
        break;
      case "/swimming":
        title = "";
        metaDescription = "";
        break;
      case "/weightlifting":
        title = "";
        metaDescription = "";
        break;
      case "/taekwondo":
        title = "";
        metaDescription = "";
        break;
      case "/kickboxing":
        title = "";
        metaDescription = "";
        break;
      case "/wrestling":
        title = "";
        metaDescription = "";
        break;
      case "/football":
        title = "";
        metaDescription = "";
        break;
      case "/elle":
        title = "";
        metaDescription = "";
        break;
      case "/bascketball":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IndoorFacilities />} />
      <Route path="/tracksfileds" element={<TracksFileds />} />
      <Route path="/swimming" element={<Swimming />} />
      <Route path="/weightlifting" element={<Weightlifting />} />
      <Route path="/taekwondo" element={<Taekwondo />} />
      <Route path="/kickboxing" element={<Kickboxing />} />
      <Route path="/wrestling" element={<Wrestling />} />
      <Route path="/football" element={<Football />} />
      <Route path="/elle" element={<Elle />} />
      <Route path="/bascketball" element={<Bascketball />} />
    </Routes>
  );
}
export default App;
