import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, molestiae
        reprehenderit! Deleniti impedit esse eos maxime quas dignissimos, porro
        autem suscipit illum magni doloremque minus magnam molestiae quibusdam,
        error nobis?
      </p>
    </>
  );
}
