import CardContainer from "../../components/CardContainer/cardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <h1>Esto es el Home</h1>
      <CardContainer />
    </>
  );
};

export default Home;
