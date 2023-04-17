import React from 'react';
import './SeedPhrase.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const SeedPhrase = () => {
    const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-2">
                <p>Record your seed phrase</p>
                <div class="phrase-div">
                    <p>hotel obvious agent lecture <br /> gadget evil jealous keen <br /> fragile before damp clarify</p>
                </div>
                <button class="next-btn ml-0" type="submit" onClick={() => {
                    navigate("/lightningnode")
                }}>Next</button>
            </div>
        </div>
    )
}

export default SeedPhrase