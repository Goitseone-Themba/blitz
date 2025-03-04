import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App.tsx'

// ASCII art for Blitz
const blitzAscii = `
  Define Aura ;)

  BBB      L L      IIIIIIII  TTTTTTTT  ZZZZZZZZZ
  B   B    L L         II        TT            Z  
  B    B   L L         II        TT           Z  
  B   B    L L         II        TT          Z   
  BBBB     L L         II        TT         Z    
  B    B   L L         II        TT        Z     
  B     B  L L         II        TT       Z      
  B   B    L L         II        TT      Z       
  BBB      LLLLLLL  IIIIIIII     TT     ZZZZZZZZZ
`;

// Print to console with blue color 
console.log('%c' + blitzAscii, 'color: #1E90FF; font-family: monospace;');

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

