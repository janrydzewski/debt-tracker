import React from 'react';
import Debt from '../../components/Debt.jsx';
import { useNavigate } from 'react-router';

const DebtDetails: React.FC = () => {
  const navigate = useNavigate();
  const debts = [
    { id: '1', name: 'Credit Card', amount: 500, dueDate: '2023-12-15' },
    { id: '2', name: 'Student Loan', amount: 15000, dueDate: '2023-12-30' },
    { id: '3', name: 'Car Loan', amount: 8000, dueDate: '2024-01-05' },
  ];

  const totalDebt = debts.reduce((sum, debt) => sum + debt.amount, 0);

  return (
    <view className="home-container">
      <view className="header">
        <text className="title">Debt Tracker</text>
        <text className="subtitle">Total Debt: ${totalDebt}</text>
      </view>

      <view className="debts-container">
        <text className="debts-title">Your Debts</text>
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

export default DebtDetails;
