import { useEffect } from '@lynx-js/react';
import './App.css';
import Home from './pages/Home.jsx';
import { useNavigate } from 'react-router';

export function App() {
  const nav = useNavigate();

  return (
    <view
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <text bindtap={() => nav('/home')}>Navigate to Home</text>
    </view>
  );
}
