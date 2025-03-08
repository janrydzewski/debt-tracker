import React from 'react';
import './Debt.css';
import { useNavigate } from 'react-router';

interface DebtProps {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

const Debt: React.FC<DebtProps> = ({ id, name, amount, dueDate }) => {
  const navigate = useNavigate();
  
  const handleDebtClick = () => {
    navigate(`/debt/${id}`);
  };
  
  return (
    <view className="debt-container" bindtap={handleDebtClick}>
      <text className="debt-name">{name}</text>
      <text className="debt-amount">Amount: ${amount.toFixed(2)}</text>
      <text className="debt-due-date">Due Date: {dueDate}</text>
    </view>
  );
};

export default Debt;
