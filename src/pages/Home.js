import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/type-list");
  }

  return (
    <>
      <p>Hello This is an App</p>
      <button onClick={handleClick}>Show type list</button>
      <Footer />
    </>
  );
}