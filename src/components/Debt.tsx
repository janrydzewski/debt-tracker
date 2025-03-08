import React from 'react';

interface DebtProps {
  name: string;
  amount: number;
  dueDate: string;
}

const Debt: React.FC<DebtProps> = ({ name, amount, dueDate }) => {
  return (
    <view className="bg-white/5 p-4 rounded-lg mb-2">
      <text className="font-bold text-xl text-white mb-2">{name}</text>
      <text className="text-white/80 mb-1">Amount: ${amount.toFixed(2)}</text>
      <text className="text-white/80">Due Date: {dueDate}</text>
    </view>
  );
};

export default Debt;
