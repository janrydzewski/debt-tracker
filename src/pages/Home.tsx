import React from 'react';
import Debt from '../components/Debt.jsx';

const Home: React.FC = () => {
  const debts = [
    { id: 1, name: 'Credit Card', amount: 500, dueDate: '2023-12-15' },
    { id: 2, name: 'Student Loan', amount: 15000, dueDate: '2023-12-30' },
    { id: 3, name: 'Car Loan', amount: 8000, dueDate: '2024-01-05' },
  ];

  const totalDebt = debts.reduce((sum, debt) => sum + debt.amount, 0);

  return (
    <view className="w-full p-4">
      <view className="mb-6">
        <text className="text-3xl font-bold text-white text-center">
          Debt Tracker
        </text>
        <text className="text-lg text-white/75 text-center mt-2">
          Total Debt: ${totalDebt}
        </text>
      </view>

      <view className="bg-white/10 rounded-lg p-4">
        <text className="text-xl font-semibold text-white mb-2">
          Your Debts
        </text>
        <view className="space-y-4">
          {debts.map((debt) => (
            <view key={debt.id}>
              <Debt
                name={debt.name}
                amount={debt.amount}
                dueDate={debt.dueDate}
              />
            </view>
          ))}
        </view>
      </view>
    </view>
  );
};

export default Home;
