import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import ErrorPage from '../Error/ErrorPage';

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
      // const donationPercentage = (
      //   (totalPaidDonationAmount / totalDonationAmount) *
      //   100
      // ).toFixed(2);
      // const percentageRemaining = (100 - donationPercentage).toFixed(2);

      //Create Chart {
      // console.log(totalPaidDonationAmount, totalDonationAmount);
      const data = [
        { name: 'Group A', value: totalDonationAmount },
        {
          name: 'Group B',
          value: totalDonationAmount - totalPaidDonationAmount,
        },
      ];
      const COLORS = ['#00C49F', '#FF444A'];

      const RADIAN = Math.PI / 180;

      const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        // index,
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

      return (
        <div className="md:p-20 py-20">
          <div className="mx-auto w-[400px] h-[400px]">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="flex flex-col md:flex-row w-fit mx-auto gap-4 text-center">
            <div className="flex items-center gap-3">
              <p>Your Donation:</p>
              <div className="w-[100px] bg-[#00c49f] h-3 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <p>Total Donation:</p>
              <div className="w-[100px] bg-[#ff444a]  h-3 rounded"></div>
            </div>
          </div>
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
