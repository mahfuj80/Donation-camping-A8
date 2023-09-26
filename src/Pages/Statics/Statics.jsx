import { useLoaderData } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';
import ErrorPage from '../Error/ErrorPage';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Statics = () => {
  const allCards = useLoaderData();
  if (allCards.length) {
    const allDonationAmount = allCards.map((card) => card.donation);
    // console.log(allDonationAmount);
    const totalDonationAmount = allDonationAmount.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const donatedCardId = JSON.parse(localStorage.getItem('card'));
    if (donatedCardId) {
      const donatedCard = donatedCardId.map((id) => allCards[id - 1]);
      const paidDonationAmount = donatedCard.map((card) => card.donation);
      const totalPaidDonationAmount = paidDonationAmount.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      // console.log(totalDonationAmount, totalPaidDonationAmount);
      // Percentage Calculation:
      const donationPercentage = (
        (totalPaidDonationAmount / totalDonationAmount) *
        100
      ).toFixed(2);
      const percentageRemaining = (100 - donationPercentage).toFixed(2);

      //Create Chart {
      const options = {
        animationEnabled: true,
        exportFileName: 'Donation Status',
        exportEnabled: false,
        data: [
          {
            type: 'pie',
            showInLegend: true,
            legendText: '{label}',
            toolTipContent: '{label}: <strong>{y}%</strong>',
            indexLabel: '{y}%',
            indexLabelPlacement: 'inside',
            dataPoints: [
              { y: percentageRemaining, label: 'Total Donation' },
              { y: donationPercentage, label: 'Your Donation' },
            ],
          },
        ],
      };
      return (
        <div className="p-20">
          <CanvasJSChart options={options} />
        </div>
      );
    } else {
      return (
        <>
          <div className="text-5xl font-bold w-full h-[55vh] mt-12 flex justify-center items-center bg-gray-100 shadow-2xl rounded-lg text-center">
            <h1>Please Donate First</h1>
          </div>
        </>
      );
    }
  } else {
    return <ErrorPage></ErrorPage>;
  }
};

export default Statics;
