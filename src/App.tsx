import './App.css';
import { Stars } from './components/Stars';
import { useState } from 'react';

export default function App() {
  const [count] = useState<number>(4);

  return count < 1 || count > 5 || isNaN(count) ? null : (
    <Stars count={count} />
  );
}