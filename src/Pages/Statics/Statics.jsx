import { useLoaderData } from 'react-router-dom';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Statics = () => {
  const allCards = useLoaderData();
  const allDonationAmount = allCards.map((card) => card.donation);
  // console.log(allDonationAmount);
  const totalDonationAmount = allDonationAmount.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const donatedCardId = JSON.parse(localStorage.getItem('card'));
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
};

export default Statics;
