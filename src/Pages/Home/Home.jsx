import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import NoCard from '../../components/NoCard/NoCard';

const Home = () => {
  const allCards = useLoaderData();
  const [find, setFind] = useState([]);
  const searchFunction = (value) => {
    if (value) {
      const finnedCards = allCards.filter((card) =>
        card.tag.toLowerCase().includes(value.toLowerCase())
      );
      if (finnedCards.length > 0) {
        setFind(finnedCards);
        return;
      } else {
        setFind([]);
      }
    } else {
      setFind(allCards);
    }
  };

  useEffect(() => {
    setFind(allCards);
  }, [allCards]);

  return (
    <div>
      <Banner searchFunction={searchFunction}></Banner>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 text-center mb-48">
        {find.length > 0 ? (
          find.map((card) => <Card key={card.id} card={card}></Card>)
        ) : (
          <NoCard></NoCard>
        )}
      </div>
    </div>
  );
};

export default Home;
