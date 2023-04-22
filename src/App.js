import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
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
import useAuthToken from './context/useAuthToken';
import ConnectNode from './components/ConnectNode';
import { mapDispatchToProps, mapStateToProps } from "./redux_reducer/props_and_dispatch";
import { connect } from "react-redux";

const ConnectedConnectNode = connect(mapStateToProps,mapDispatchToProps)(ConnectNode);

function App() {
  const {setToken, token} = useAuthToken();
  // if (!token) {
   
  //   return (
  //     <div className="App">
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Registration setToken={setToken}/>}/> 
  //         <Route path="/register" element={<Registration setToken={setToken}/>} />
  //         <Route path="/login" element={<Login setToken={setToken}/>} />
  //         <Route path="/register" element={<Registration />} />
  //         <Route path="/dashboard" element={<MissionControl />} />
  //         <Route path="/connect" element={<ConnectNode />} />
  //         <Route path="/tailwind" element={<TWComponent />} />
  //         <Route path="/exampletwo" element={<ExampleTwo />} />
  //         <Route path="*" element={<Navigate to="/" />} /> 
  //       </Routes>
  //     </BrowserRouter>
  //     </div>
  //   );
  // }


  return (
    <div className="App">
          <BrowserRouter basename='/'>
            <Routes>
              
              <Route path="/" element={<Login />} />
              <Route path="/connect" element={<ConnectedConnectNode />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/wallet" element={<BitcoinWallet />} />
              <Route path="/seedphrase" element={<SeedPhrase />} />
              <Route path="/lightningnode" element={<LightningNode />} />
              <Route path="/password" element={<Password1 />} />
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
          </BrowserRouter>  
    </div>
  );
}

export default App;
