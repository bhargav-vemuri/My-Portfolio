import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://my-portfolio-ek2r.onrender.com/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });

    if (res.ok) {
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <form onSubmit={handleLogin} className="p-8 bg-[#0f172a]/30 border border-muted/20 rounded-2xl w-full max-w-sm flex flex-col gap-6 backdrop-blur-md shadow-2xl">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Director's Cut</h1>
          <p className="text-muted text-sm mt-2 font-mono uppercase tracking-widest">Admin Access</p>
        </div>
        
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        
        <input 
          type="password" 
          placeholder="Enter Passcode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-background/50 border border-muted/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
        />
        
        <button type="submit" className="w-full bg-accent text-background font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-accent/90 transition-colors">
          Enter
        </button>
      </form>
    </div>
  );
}
