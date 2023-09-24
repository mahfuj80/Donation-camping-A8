import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Nav from '../../components/Navbar/Nav';
import Card from '../../components/Card/Card';

const Home = () => {
  const cards = useLoaderData();
  const searchFunction = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Nav></Nav>
      <Banner searchFunction={searchFunction}></Banner>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 text-center">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
