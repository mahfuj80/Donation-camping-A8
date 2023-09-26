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
  }, []); // Empty dependency array to run this effect only once

  useEffect(() => {
    if (donation && allDonation.length > 0) {
      const displayCard = donation.map((id) => allDonation[id - 1]);
      setDisplayDonation(displayCard);
    } else {
      setDisplayDonation([]);
    }
  }, [donation, allDonation]);
  // console.log('yes i got it');
  return (
    <>
      <div className="mt-11 mb-32">
        {donation ? (
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
        ) : (
          <div className="text-5xl font-bold w-full h-[55vh] flex justify-center items-center bg-gray-100 shadow-2xl rounded-lg text-center">
            <h1>You did not donate anyone</h1>
          </div>
        )}
        {/* Show all */}
        <div className="text-center">
          {displayDonation.length > 4 && (
            <button
              className="font-semibold w-fit px-3 py-2 bg-[#009444] text-white rounded text-center"
              onClick={() => setIsShowAll(!isShowAll)}
            >
              {!isShowAll ? 'Show all' : 'Show less'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Donation;
