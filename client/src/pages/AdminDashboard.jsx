import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Helper for authenticated requests
const apiFetch = async (url, options = {}) => {
  return fetch(`https://my-portfolio-ek2r.onrender.com${url}`, {
    ...options,
    credentials: "include", // Send cookies!
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [data, setData] = useState({ projects: [], experience: [], education: [], skills: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAllData = async () => {
    try {
      const [p, e, ed, s] = await Promise.all([
        fetch('https://my-portfolio-ek2r.onrender.com/api/projects').then(r => r.json()),
        fetch('https://my-portfolio-ek2r.onrender.com/api/experience').then(r => r.json()),
        fetch('https://my-portfolio-ek2r.onrender.com/api/education').then(r => r.json()),
        fetch('https://my-portfolio-ek2r.onrender.com/api/skills').then(r => r.json())
      ]);
      setData({
        projects: Array.isArray(p) ? p : [],
        experience: Array.isArray(e) ? e : [],
        education: Array.isArray(ed) ? ed : [],
        skills: Array.isArray(s) ? s : []
      });
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiFetch('/api/auth/check')
      .then(res => {
        if (!res.ok) navigate('/admin/login');
        else {
          fetchAllData().then(() => setLoading(false));
        }
      })
      .catch(() => navigate('/admin/login'));
  }, [navigate]);

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Loading...</div>;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-muted/20 pb-8">
          <div>
            <h1 className="text-4xl font-serif">Director's Dashboard</h1>
            <p className="text-muted mt-2 text-lg">Manage your cinematic portfolio content instantly.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={async () => { await apiFetch('/api/logout', { method: 'POST' }); navigate('/admin/login'); }} className="px-6 py-3 bg-[#0f172a] text-muted rounded-full font-bold uppercase tracking-widest text-sm hover:text-foreground transition-colors">
              Logout
            </button>
            <a href="/" target="_blank" className="px-6 py-3 bg-accent text-background rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent/80 transition-colors">
              View Live Site
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["projects", "experience", "education", "skills"].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-colors ${activeTab === tab ? "bg-accent text-background shadow-[0_0_15px_rgba(56,189,248,0.3)]" : "bg-[#0f172a]/40 border border-muted/30 text-muted hover:text-foreground"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "projects" && <ProjectsTab data={data.projects} refresh={fetchAllData} />}
        {activeTab === "experience" && <ExperienceTab data={data.experience} refresh={fetchAllData} />}
        {activeTab === "education" && <EducationTab data={data.education} refresh={fetchAllData} />}
        {activeTab === "skills" && <SkillsTab data={data.skills} refresh={fetchAllData} />}
      </div>
    </div>
  );
}

function ProjectsTab({ data, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", year: "", problem: "", approach: "", impact: "", link: "" });

  const handleSave = async () => {
    if (editingId === "new") {
      await apiFetch('/api/projects', { method: 'POST', body: JSON.stringify(formData) });
    } else {
      await apiFetch(`/api/projects/${editingId}`, { method: 'PUT', body: JSON.stringify(formData) });
    }
    setEditingId(null);
    refresh();
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this project?")) {
      await apiFetch(`/api/projects/${id}`, { method: 'DELETE' });
      refresh();
    }
  };

  const openEdit = (p) => {
    setEditingId(p._id);
    setFormData({ title: p.title, year: p.year, problem: p.problem, approach: p.approach, impact: p.impact, link: p.link });
  };

  const openNew = () => {
    setEditingId("new");
    setFormData({ title: "", year: "", problem: "", approach: "", impact: "", link: "" });
  };

  if (editingId) return (
    <div className="bg-[#0f172a]/20 p-8 rounded-xl border border-muted/10 flex flex-col gap-4 shadow-xl">
      <h2 className="text-2xl text-accent font-serif mb-4">{editingId === "new" ? "New Project" : "Edit Project"}</h2>
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Year" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
      <textarea className="bg-background/50 border border-muted/30 p-3 rounded h-24 focus:border-accent outline-none" placeholder="Problem" value={formData.problem} onChange={e => setFormData({...formData, problem: e.target.value})} />
      <textarea className="bg-background/50 border border-muted/30 p-3 rounded h-24 focus:border-accent outline-none" placeholder="Approach" value={formData.approach} onChange={e => setFormData({...formData, approach: e.target.value})} />
      <textarea className="bg-background/50 border border-muted/30 p-3 rounded h-24 focus:border-accent outline-none" placeholder="Impact" value={formData.impact} onChange={e => setFormData({...formData, impact: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="GitHub Link" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />
      <div className="flex gap-4 mt-4">
        <button onClick={handleSave} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Save Scene</button>
        <button onClick={() => setEditingId(null)} className="bg-muted/20 px-6 py-2 rounded font-bold uppercase tracking-wider hover:bg-muted/30">Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end"><button onClick={openNew} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Add Project</button></div>
      {data.map(p => (
        <div key={p._id} className="p-6 border border-muted/20 rounded-xl bg-[#0f172a]/20 flex justify-between items-start shadow-md hover:border-accent/30 transition-colors">
          <div>
            <h3 className="font-bold text-xl">{p.title} <span className="font-normal text-muted">({p.year})</span></h3>
            <p className="text-muted mt-2 text-sm max-w-3xl line-clamp-2">{p.problem}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => openEdit(p)} className="text-accent hover:underline font-medium">Edit</button>
            <button onClick={() => handleDelete(p._id)} className="text-red-400 hover:underline font-medium">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceTab({ data, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ role: "", company: "", period: "", description: "" });

  const handleSave = async () => {
    if (editingId === "new") await apiFetch('/api/experience', { method: 'POST', body: JSON.stringify(formData) });
    else await apiFetch(`/api/experience/${editingId}`, { method: 'PUT', body: JSON.stringify(formData) });
    setEditingId(null);
    refresh();
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this experience?")) {
      await apiFetch(`/api/experience/${id}`, { method: 'DELETE' });
      refresh();
    }
  };

  const openEdit = (e) => {
    setEditingId(e._id);
    setFormData({ role: e.role, company: e.company, period: e.period, description: e.description });
  };

  const openNew = () => {
    setEditingId("new");
    setFormData({ role: "", company: "", period: "", description: "" });
  };

  if (editingId) return (
    <div className="bg-[#0f172a]/20 p-8 rounded-xl border border-muted/10 flex flex-col gap-4 shadow-xl">
      <h2 className="text-2xl text-accent font-serif mb-4">{editingId === "new" ? "New Experience" : "Edit Experience"}</h2>
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Role" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Period (e.g. 2025 - Present)" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} />
      <textarea className="bg-background/50 border border-muted/30 p-3 rounded h-32 focus:border-accent outline-none" placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
      <div className="flex gap-4 mt-4">
        <button onClick={handleSave} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Save Entry</button>
        <button onClick={() => setEditingId(null)} className="bg-muted/20 px-6 py-2 rounded font-bold uppercase tracking-wider hover:bg-muted/30">Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end"><button onClick={openNew} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Add Experience</button></div>
      {data.map(e => (
        <div key={e._id} className="p-6 border border-muted/20 rounded-xl bg-[#0f172a]/20 flex justify-between items-start shadow-md hover:border-accent/30 transition-colors">
          <div>
            <h3 className="font-bold text-xl">{e.role} <span className="text-accent">@ {e.company}</span></h3>
            <p className="text-muted mt-2 text-sm max-w-3xl line-clamp-2">{e.period}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => openEdit(e)} className="text-accent hover:underline font-medium">Edit</button>
            <button onClick={() => handleDelete(e._id)} className="text-red-400 hover:underline font-medium">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function EducationTab({ data, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ degree: "", school: "", period: "", details: "" });

  const handleSave = async () => {
    if (editingId === "new") await apiFetch('/api/education', { method: 'POST', body: JSON.stringify(formData) });
    else await apiFetch(`/api/education/${editingId}`, { method: 'PUT', body: JSON.stringify(formData) });
    setEditingId(null);
    refresh();
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this education entry?")) {
      await apiFetch(`/api/education/${id}`, { method: 'DELETE' });
      refresh();
    }
  };

  const openEdit = (e) => {
    setEditingId(e._id);
    setFormData({ degree: e.degree, school: e.school, period: e.period, details: e.details });
  };

  const openNew = () => {
    setEditingId("new");
    setFormData({ degree: "", school: "", period: "", details: "" });
  };

  if (editingId) return (
    <div className="bg-[#0f172a]/20 p-8 rounded-xl border border-muted/10 flex flex-col gap-4 shadow-xl">
      <h2 className="text-2xl text-accent font-serif mb-4">{editingId === "new" ? "New Education" : "Edit Education"}</h2>
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Degree / Class" value={formData.degree} onChange={e => setFormData({...formData, degree: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="School / University" value={formData.school} onChange={e => setFormData({...formData, school: e.target.value})} />
      <input className="bg-background/50 border border-muted/30 p-3 rounded focus:border-accent outline-none" placeholder="Period" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} />
      <textarea className="bg-background/50 border border-muted/30 p-3 rounded h-24 focus:border-accent outline-none" placeholder="Details (CGPA, etc)" value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
      <div className="flex gap-4 mt-4">
        <button onClick={handleSave} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Save Entry</button>
        <button onClick={() => setEditingId(null)} className="bg-muted/20 px-6 py-2 rounded font-bold uppercase tracking-wider hover:bg-muted/30">Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end"><button onClick={openNew} className="bg-accent text-background px-6 py-2 rounded font-bold uppercase tracking-wider">Add Education</button></div>
      {data.map(e => (
        <div key={e._id} className="p-6 border border-muted/20 rounded-xl bg-[#0f172a]/20 flex justify-between items-start shadow-md hover:border-accent/30 transition-colors">
          <div>
            <h3 className="font-bold text-xl">{e.degree}</h3>
            <p className="text-muted mt-2 text-sm">{e.school} ({e.period})</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => openEdit(e)} className="text-accent hover:underline font-medium">Edit</button>
            <button onClick={() => handleDelete(e._id)} className="text-red-400 hover:underline font-medium">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillsTab({ data, refresh }) {
  const [newSkill, setNewSkill] = useState("");

  const handleAdd = async () => {
    if(!newSkill) return;
    await apiFetch('/api/skills', { method: 'POST', body: JSON.stringify({ name: newSkill }) });
    setNewSkill("");
    refresh();
  };

  const handleDelete = async (id) => {
    await apiFetch(`/api/skills/${id}`, { method: 'DELETE' });
    refresh();
  };

  return (
    <div className="flex flex-col gap-8 bg-[#0f172a]/20 p-8 rounded-xl border border-muted/10 shadow-xl">
      <div className="flex gap-4">
        <input 
          className="bg-background/50 border border-muted/30 p-3 rounded flex-1 focus:border-accent outline-none" 
          placeholder="Add a new skill (e.g. Node.js)" 
          value={newSkill} 
          onChange={e => setNewSkill(e.target.value)} 
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd} className="bg-accent text-background px-8 py-2 rounded font-bold uppercase tracking-wider hover:bg-accent/80">Add</button>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4">
        {data.map(s => (
          <div key={s._id} className="px-5 py-2 border border-muted/30 rounded-full flex items-center gap-4 bg-background/50 shadow-sm">
            <span className="font-medium">{s.name}</span>
            <button onClick={() => handleDelete(s._id)} className="text-red-400 hover:text-red-300 font-bold text-lg leading-none hover:scale-110 transition-transform">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
