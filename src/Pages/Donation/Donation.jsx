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
      <div className="mt-11 mb-32">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-10">
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
        {/* Show all */}
        <div className="text-center">
          {isShowAll || (
            <button
              className="font-semibold w-fit px-3 py-2 bg-emerald-800 text-white rounded text-center"
              onClick={() => setIsShowAll(!isShowAll)}
            >
              Show all
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Donation;
