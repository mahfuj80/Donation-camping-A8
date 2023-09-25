import { useEffect, useState } from 'react';
import DonationCard from '../../components/DonationCard/DonationCard';

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [allDonation, setAllDonation] = useState([]);
  const [displayDonation, setDisplayDonation] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  const fetchAllDonation = () => {
    fetch('/Card.json')
      .then((res) => res.json())
      .then((data) => setAllDonation(data));
  };
  useEffect(() => {
    fetchAllDonation();
    const donations = JSON.parse(localStorage.getItem('card'));
    setDonation(donations);
    const displayCard = donation.map((id) => allDonation[id - 1]);
    setDisplayDonation(displayCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDonation]);

  // console.log(displayDonation);

  return (
    <>
      <div>
        {isShowAll
          ? displayDonation.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))
          : displayDonation
              .slice(0, 4)
              .map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))}
      </div>
      <div>
        {isShowAll || (
          <button onClick={() => setIsShowAll(!isShowAll)}>Show all</button>
        )}
      </div>
    </>
  );
};

export default Donation;
