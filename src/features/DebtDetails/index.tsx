import React from 'react';
import { useParams, useNavigate } from 'react-router';
import './index.css';

const DebtDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const debts = [
    {
      id: '1',
      name: 'Credit Card',
      amount: 2500.0,
      dueDate: '2023-12-15',
      description: 'Credit card debt with 19.99% APR',
      creditor: 'Bank XYZ',
    },
    {
      id: '2',
      name: 'Student Loan',
      amount: 10000.0,
      dueDate: '2024-01-01',
      description: 'Federal student loan',
      creditor: 'Department of Education',
    },
    {
      id: '3',
      name: 'Car Payment',
      amount: 350.0,
      dueDate: '2023-12-20',
      description: 'Monthly car payment',
      creditor: 'Auto Finance Inc.',
    },
  ];

  const debt = debts.find((debt) => debt.id === id);

  const handleGoBack = () => {
    navigate('/home');
  };

  if (!debt) {
    return (
      <view className="home-container">
        <text className="title">Debt not found</text>
        <view style={{ marginTop: 20 }}>
          <view
            bindtap={handleGoBack}
            style={{ backgroundColor: '#4A90E2', padding: 10, borderRadius: 5 }}
          >
            <text style={{ color: 'white', textAlign: 'center' }}>Go back</text>
          </view>
        </view>
      </view>
    );
  }

  return (
    <view className="home-container">
      <view className="header">
        <text className="title">{debt.name}</text>
        <text className="subtitle">Debt details</text>
      </view>

      <view className="debts-container" style={{ marginBottom: 20 }}>
        <view style={{ marginBottom: 15 }}>
          <text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
            Amount:
          </text>
          <text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
            ${debt.amount.toFixed(2)}
          </text>
        </view>

        <view style={{ marginBottom: 15 }}>
          <text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
            Date:
          </text>
          <text style={{ color: 'white', fontSize: 18 }}>{debt.dueDate}</text>
        </view>

        <view style={{ marginBottom: 15 }}>
          <text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
            Who:
          </text>
          <text style={{ color: 'white', fontSize: 18 }}>{debt.creditor}</text>
        </view>

        <view style={{ marginBottom: 15 }}>
          <text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
            Description:
          </text>
          <text style={{ color: 'white', fontSize: 18 }}>
            {debt.description}
          </text>
        </view>
      </view>

      <view
        bindtap={handleGoBack}
        style={{
          backgroundColor: '#4A90E2',
          padding: 10,
          borderRadius: 5,
          width: '100%',
        }}
      >
        <text style={{ color: 'white', textAlign: 'center' }}>Go back</text>
      </view>
    </view>
  );
};

export default DebtDetails;
