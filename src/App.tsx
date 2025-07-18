import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        oi
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        officia ab velit debitis tempore, suscipit tempora doloribus nisi rerum
        quia at similique nam excepturi repellendus veritatis alias dicta itaque
        architecto.
      </p>
    </>
  );
}
