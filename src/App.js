import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createContext } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import Onboarding from './components/Onboarding';
import BitcoinWallet from './components/BitcoinWallet';
import Password1 from './components/Password1';
import SeedPhrase from './components/SeedPhrase';
import Deposit from './components/Deposit';
import Password2 from './components/Password2';
import Liquidity from './components/Liquidity';
import Loader1 from './components/Loader1';
import Loader2 from './components/Loader2';
import Scanner from './components/Scanner';
import ToDashboard from './components/ToDashboard';
import MissionControl from './pages/MissionControl';
import Policy from './pages/Policy';
import Accounting from './pages/Accounting';
import Security from './pages/Security';
import Peer from './pages/Peer';
import FundChannel from './pages/FundChannel';
import LightningNode from './components/LightningNode';

const store = createContext()
const { Provider } = store
export { store }
function App() {
  return (
    <div className="App">
      <Provider>
          <HashRouter basename='/'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/wallet" element={<BitcoinWallet />} />
              <Route path="/password" element={<Password1 />} />
              <Route path="/seedphrase" element={<SeedPhrase />} />
              <Route path="/lightningnode" element={<LightningNode />} />
              <Route path="/pswd" element={<Password2 />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/scan" element={<Scanner />} />
              <Route path="/transactionloading" element={<Loader2 />} />
              <Route path="/peer" element={<Peer />} />
              <Route path="/fundchannel" element={<FundChannel />} />
              <Route path="/liquidity" element={<Liquidity />} />
              <Route path="/loading" element={<Loader1 />} />
              <Route path="/todashboard" element={<ToDashboard />} />
              <Route path="/dashboard" element={<MissionControl />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/accounting" element={<Accounting />} />
              <Route path="/security" element={<Security />} />
              
             
          
            </Routes>
          </HashRouter>
        </Provider>
      
    </div>
  );
}

export default App;
