import Path from "./components/path";
import Home from "./pages/home";

export function App() {

  return (
    <>
      <Path to="/" page={<Home />} />
    </>
  )
}
