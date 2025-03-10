import React from 'react';
import Debt from '../components/Debt.js';
import '../features/DebtDetails/index.css';

const Home: React.FC = () => {
  const debts = [
    { id: '1', name: 'Credit Card', amount: 2500.0, dueDate: '2023-12-15' },
    { id: '2', name: 'Student Loan', amount: 10000.0, dueDate: '2024-01-01' },
    { id: '3', name: 'Car Payment', amount: 350.0, dueDate: '2023-12-20' },
  ];

  return (
    <view className="home-container">
      <view className="header">
        <text className="title">Debt Tracker</text>
        <text className="subtitle">Manage your debts!</text>
      </view>

      <view className="debts-container">
        <text className="debts-title">Your debts</text>
        <view className="debts-list">
          {debts.map((debt) => (
            <view key={debt.id} className="debt-item">
              <Debt
                id={debt.id}
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
