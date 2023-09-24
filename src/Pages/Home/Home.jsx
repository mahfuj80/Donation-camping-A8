import Banner from '../../components/Banner/Banner';
import Nav from '../../components/Navbar/Nav';

const Home = () => {
  const searchFunction = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Nav></Nav>
      <Banner searchFunction={searchFunction}></Banner>
    </div>
  );
};

export default Home;
