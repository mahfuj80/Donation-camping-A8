import { useEffect, useState } from 'react';
import DonationCard from '../../components/DonationCard/DonationCard';

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [allDonation, setAllDonation] = useState([]);
  const [displayDonation, setDisplayDonation] = useState([]);
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
  }, []);

  console.log(displayDonation);

  return (
    <>
      <div>
        {displayDonation.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </>
  );
};

export default Donation;
