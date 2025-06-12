import { useEffect, useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) {
      pass += "0123456789";
    }

    if (char) {
      pass += "!@#$%^&*()_+:?>{}[]";
    }
pass=pass+chars;
   
    let sendPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pass.length);
      sendPassword += pass[randomIndex];
    }

    setPassword(sendPassword);
  }, [length, num, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length,num,char]);

  return (
    <>
      <h1 >Password Generator</h1>
      <input
        type="text"
        id="input"
        value={password}
        readOnly
        placeholder="password"
      />
      <button
        type="button"
        onClick={passwordGenerator}
      >
        Generate Password
      </button>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(password);
          alert("random password coppyed")
        }}
      >
        Copy
      </button>
      <div>
        <input
          type="range"
          min="1"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <label htmlFor="range">Length: {length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="num"
          checked={num}
          onChange={(e) => setNum(e.target.checked)}
        />
        <label htmlFor="num">Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="char"
          checked={char}
          onChange={(e) => setChar(e.target.checked)}
        />
        <label htmlFor="char">Special Characters</label>
      </div>
    </>
  );
}

export default App;
