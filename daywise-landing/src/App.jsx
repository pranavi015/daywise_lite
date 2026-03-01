import { useState, useEffect } from "react";

// ─── Google Fonts ───────────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --vanilla:  #D78DA6;
      --caramel:  #AB7743;
      --almond:   #B7957F;
      --coffee:   #6D3914;
      --mocha:    #84593D;
      --espresso: #4C2B08;
      --cream:    #FAF6F1;
      --milk:     #F2EBE3;
      --text:     #2C1A0E;
      --muted:    #8C6A52;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--cream);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb { background: var(--almond); border-radius: 3px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-10px); }
    }
    @keyframes pulseRing {
      0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(171,119,67,0.5); }
      70%  { transform: scale(1);    box-shadow: 0 0 0 12px rgba(171,119,67,0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(171,119,67,0); }
    }

    .anim-fade-up  { animation: fadeUp 0.7s ease forwards; }
    .anim-float    { animation: float 4s ease-in-out infinite; }
    .d1 { animation-delay: 0.05s; }
    .d2 { animation-delay: 0.2s; }
    .d3 { animation-delay: 0.35s; }
    .d4 { animation-delay: 0.5s; }
    .d5 { animation-delay: 0.65s; }
    .op0 { opacity: 0; }



    .feat-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(76,43,8,0.1) !important; }
    .feat-card { transition: all 0.3s ease; }

    .nav-link { color: var(--mocha); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
    .nav-link:hover { color: var(--espresso); }

    input:focus, textarea:focus { border-color: var(--caramel) !important; }

    @media (max-width: 640px) {
      .nav-desktop { display: none !important; }
      .pricing-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);



// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 68,
      padding: "0 clamp(1.5rem,5vw,4rem)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(250,246,241,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(183,149,127,0.2)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--caramel), var(--espresso))",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
        }}>☕</div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "var(--espresso)", letterSpacing: "-0.02em" }}>Daywise</span>
      </div>

      <div className="nav-desktop" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {["Features","Pricing","Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
        ))}
        <a href="#contact" style={{
          background: "var(--espresso)", color: "var(--cream)",
          padding: "9px 22px", borderRadius: 100, textDecoration: "none",
          fontSize: "0.875rem", fontWeight: 500, transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="scale(1.03)"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="scale(1)"; }}
        >Get started</a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", textAlign: "center",
      padding: "100px clamp(1.5rem,8vw,6rem) 60px",
      position: "relative", overflow: "hidden",
    }}>
      {/* bg orbs */}
      <div style={{ position:"absolute", top:"10%", left:"5%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle, rgba(215,141,166,0.18) 0%, transparent 70%)", filter:"blur(40px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"5%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle, rgba(171,119,67,0.15) 0%, transparent 70%)", filter:"blur(40px)", pointerEvents:"none" }} />

      {/* badge */}
      <div className="anim-fade-up op0 d1" style={{ animationFillMode:"forwards", marginBottom:"2rem" }}>
        <span style={{
          display:"inline-flex", alignItems:"center", gap:7,
          background:"rgba(171,119,67,0.1)", border:"1px solid rgba(171,119,67,0.3)",
          color:"var(--caramel)", padding:"6px 16px", borderRadius:100,
          fontSize:"0.78rem", fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase",
        }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--caramel)", display:"inline-block", animation:"pulseRing 2s infinite" }} />
          Now in Beta
        </span>
      </div>

      {/* headline */}
      <h1 className="anim-fade-up op0 d2" style={{
        fontFamily:"'Playfair Display', serif",
        fontSize:"clamp(2.8rem,7vw,5.5rem)", fontWeight:700,
        lineHeight:1.1, letterSpacing:"-0.03em", color:"var(--espresso)",
        maxWidth:820, marginBottom:"1.5rem", animationFillMode:"forwards",
      }}>
        Stop planning.<br />
        <em style={{ color:"var(--caramel)", fontStyle:"italic" }}>Start learning.</em>
      </h1>

      {/* subheadline */}
      <p className="anim-fade-up op0 d3" style={{
        fontSize:"clamp(1rem,2.2vw,1.2rem)", color:"var(--muted)",
        maxWidth:520, lineHeight:1.75, fontWeight:300,
        marginBottom:"2.5rem", animationFillMode:"forwards",
      }}>
        Daywise builds your personalized learning plan, then hands you a single focused to-do list — just for today. No overwhelm. No decision fatigue.
      </p>

      {/* CTAs */}
      <div className="anim-fade-up op0 d4" style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center", marginBottom:"4rem", animationFillMode:"forwards" }}>
        <a href="#contact" style={{
          background:"var(--espresso)", color:"var(--cream)",
          padding:"15px 36px", borderRadius:100, textDecoration:"none",
          fontSize:"1rem", fontWeight:500, transition:"all 0.25s",
          boxShadow:"0 8px 30px rgba(76,43,8,0.25)",
          display:"inline-flex", alignItems:"center", gap:8,
        }}
        onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(76,43,8,0.3)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(76,43,8,0.25)"; }}
        >
          Start for free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="#features" style={{
          background:"transparent", color:"var(--coffee)",
          padding:"15px 36px", borderRadius:100, textDecoration:"none",
          fontSize:"1rem", fontWeight:400, border:"1.5px solid rgba(109,57,20,0.25)",
          transition:"all 0.25s",
        }}
        onMouseEnter={e => e.currentTarget.style.background="rgba(109,57,20,0.06)"}
        onMouseLeave={e => e.currentTarget.style.background="transparent"}
        >
          See how it works
        </a>
      </div>

      {/* Mock card */}
      <div className="anim-float anim-fade-up op0 d5" style={{
        animationFillMode:"forwards",
        background:"white", borderRadius:24, padding:28,
        boxShadow:"0 32px 80px rgba(76,43,8,0.15), 0 4px 12px rgba(76,43,8,0.08)",
        maxWidth:420, width:"100%", border:"1px solid rgba(183,149,127,0.15)",
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <div>
            <div style={{ fontSize:"0.72rem", color:"var(--muted)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:3 }}>Monday, June 9</div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:600, color:"var(--espresso)", fontSize:"1.1rem" }}>Today's Focus</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(171,119,67,0.1)", padding:"6px 12px", borderRadius:100 }}>
            <span style={{ fontSize:14 }}>🔥</span>
            <span style={{ fontSize:"0.8rem", color:"var(--caramel)", fontWeight:600 }}>7 day streak</span>
          </div>
        </div>

        {[
          { done:true,  label:"Intro to Neural Networks",       time:"45 min", badge:null },
          { done:true,  label:"Backpropagation review",          time:"20 min", badge:"Review" },
          { done:false, label:"Activation Functions deep-dive",  time:"30 min", badge:null },
          { done:false, label:"Practice: code a perceptron",     time:"40 min", badge:null },
        ].map((task, i) => (
          <div key={i} style={{
            display:"flex", alignItems:"center", gap:12,
            padding:"12px 14px", borderRadius:12, marginBottom:8,
            background: task.done ? "rgba(171,119,67,0.06)" : "rgba(250,246,241,0.8)",
            border:`1px solid ${task.done ? "rgba(171,119,67,0.2)" : "rgba(183,149,127,0.12)"}`,
            opacity: task.done ? 0.7 : 1,
          }}>
            <div style={{
              width:20, height:20, borderRadius:6, flexShrink:0,
              border: task.done ? "none" : "2px solid rgba(183,149,127,0.5)",
              background: task.done ? "var(--caramel)" : "transparent",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              {task.done && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <div style={{ flex:1, textAlign:"left" }}>
              <div style={{ fontSize:"0.85rem", color: task.done ? "var(--muted)" : "var(--text)", fontWeight:400, textDecoration: task.done ? "line-through" : "none" }}>
                {task.label}
              </div>
            </div>
            {task.badge && (
              <span style={{ fontSize:"0.65rem", background:"rgba(215,141,166,0.2)", color:"var(--vanilla)", padding:"3px 8px", borderRadius:100, fontWeight:500, letterSpacing:"0.04em" }}>
                {task.badge}
              </span>
            )}
            <span style={{ fontSize:"0.72rem", color:"var(--muted)", whiteSpace:"nowrap" }}>{task.time}</span>
          </div>
        ))}

        <button style={{
          width:"100%", marginTop:8,
          background:"var(--espresso)", color:"var(--cream)",
          border:"none", borderRadius:12, padding:13,
          fontSize:"0.875rem", fontWeight:500, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", gap:8,
          fontFamily:"'DM Sans', sans-serif",
        }}>▶ Start Focus Session</button>
      </div>

      <p style={{ marginTop:"2.5rem", fontSize:"0.82rem", color:"var(--muted)" }}>
        Trusted by <strong style={{ color:"var(--coffee)" }}>2,400+</strong> self-learners in beta
      </p>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon:"📋", title:"Syllabus, your way",       desc:"Type topics manually, paste a goal for AI generation, or upload a PDF. Daywise converts any input into a clean structured roadmap." },
    { icon:"☀️", title:"Only today. Nothing else.", desc:"Your dashboard shows one thing: what to do today. No week-long calendars. No future anxiety. Just your next focused steps." },
    { icon:"🔄", title:"Adapts to real life",        desc:"Missed a day? Mark it as an exception. Daywise silently rearranges your roadmap — nothing is ever permanently behind." },
    { icon:"🍅", title:"Built-in Pomodoro",          desc:"Start a focus session directly from your task list. Time tracking happens automatically — no extra setup needed." },
    { icon:"📈", title:"Progress that motivates",    desc:"Streaks, topics mastered, adherence rate. Metrics designed to build confidence, not guilt." },
    { icon:"🧠", title:"Spaced repetition built in", desc:"Toggle on spaced repetition and Daywise automatically surfaces older topics for review at the perfect intervals." },
  ];

  return (
    <section id="features" style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--milk)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--caramel)", fontWeight:500 }}>What's inside</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--espresso)", marginTop:12, letterSpacing:"-0.02em" }}>
            The app does the thinking.<br />You do the learning.
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:24 }}>
          {features.map((f, i) => (
            <div key={i} className="feat-card" style={{
              background:"white", borderRadius:20, padding:"32px 28px",
              border:"1px solid rgba(183,149,127,0.15)", cursor:"default",
            }}>
              <div style={{ fontSize:"2rem", marginBottom:16 }}>{f.icon}</div>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.15rem", fontWeight:600, color:"var(--espresso)", marginBottom:10 }}>{f.title}</h3>
              <p style={{ fontSize:"0.9rem", color:"var(--muted)", lineHeight:1.7, fontWeight:300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n:"01", title:"Set your learning goal",  desc:"Tell Daywise what you want to learn. Type it, describe it, or upload a syllabus PDF." },
    { n:"02", title:"Define your schedule",     desc:"How many hours a day? Which days? Any breaks? One-minute setup, forever remembered." },
    { n:"03", title:"Open today's list",        desc:"Wake up, open Daywise. Your tasks are already there — curated, timed, and ready." },
    { n:"04", title:"Learn, track, repeat",     desc:"Check off tasks. Daywise logs your time, updates your streak, and adjusts tomorrow." },
  ];

  return (
    <section style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--cream)" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--caramel)", fontWeight:500 }}>How it works</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--espresso)", marginTop:12, letterSpacing:"-0.02em" }}>
            Four steps to consistent learning
          </h2>
        </div>

        {steps.map((s, i) => (
          <div key={i} style={{
            display:"flex", gap:32, alignItems:"flex-start",
            padding:"32px 0",
            borderBottom: i < steps.length - 1 ? "1px solid rgba(183,149,127,0.2)" : "none",
          }}>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"2.5rem", fontWeight:700, color:"rgba(171,119,67,0.2)", flexShrink:0, lineHeight:1, minWidth:60 }}>
              {s.n}
            </div>
            <div>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.25rem", fontWeight:600, color:"var(--espresso)", marginBottom:8 }}>{s.title}</h3>
              <p style={{ fontSize:"0.95rem", color:"var(--muted)", lineHeight:1.7, fontWeight:300, maxWidth:500 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    { name:"Priya M.",  role:"CS Student",             text:"I've tried Notion, Todoist, everything. Daywise is the first app that actually made me consistent. The 'only today' approach is genius." },
    { name:"James R.",  role:"Self-taught developer",   text:"Set up my 3-month JavaScript roadmap in 5 minutes. Now I just open the app and work. It's like having a coach who never judges you." },
    { name:"Sara K.",   role:"Language learner",        text:"The streak counter alone keeps me coming back. But it's the focus sessions that changed things — I actually sit down and do the work now." },
  ];

  return (
    <section style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--espresso)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(215,141,166,0.7)", fontWeight:500 }}>Learners love it</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--cream)", marginTop:12, letterSpacing:"-0.02em" }}>
            Real people. Real progress.
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:24 }}>
          {quotes.map((q, i) => (
            <div key={i} style={{
              background:"rgba(255,255,255,0.05)", borderRadius:20,
              padding:32, border:"1px solid rgba(255,255,255,0.08)",
              transition:"background 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.09)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.05)"}
            >
              <div style={{ fontSize:"1.5rem", marginBottom:16, color:"var(--caramel)" }}>"</div>
              <p style={{ fontSize:"0.95rem", color:"rgba(250,246,241,0.8)", lineHeight:1.75, fontWeight:300, marginBottom:24 }}>{q.text}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{
                  width:38, height:38, borderRadius:"50%",
                  background:"linear-gradient(135deg, var(--caramel), var(--vanilla))",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"0.9rem", fontWeight:600, color:"white",
                }}>{q.name[0]}</div>
                <div>
                  <div style={{ fontSize:"0.875rem", fontWeight:500, color:"var(--cream)" }}>{q.name}</div>
                  <div style={{ fontSize:"0.75rem", color:"rgba(250,246,241,0.5)" }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name:"Free", price:{ monthly:0, annual:0 },
      desc:"Perfect to start your learning journey.",
      cta:"Get started free", ctaFilled:false,
      features:["1 active learning goal","Daily task view","Streak tracking","Basic progress stats","Pomodoro timer"],
      missing:["AI syllabus generation","PDF upload","Adaptive roadmap"],
    },
    {
      name:"Pro", price:{ monthly:9, annual:7 },
      desc:"For serious self-learners who want it all.",
      cta:"Start 14-day free trial", ctaFilled:true, badge:"Most popular",
      features:["Unlimited learning goals","AI syllabus generation","PDF upload & parsing","Adaptive roadmap","Spaced repetition","Calendar integration","Full analytics","Priority support"],
      missing:[],
    },
    {
      name:"Lifetime", price:{ monthly:79, annual:79 },
      desc:"One payment. Learn forever.",
      cta:"Buy lifetime access", ctaFilled:false, note:"One-time payment",
      features:["Everything in Pro","Lifetime updates","Early v2 access","Founder badge"],
      missing:[],
    },
  ];

  return (
    <section id="pricing" style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--milk)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--caramel)", fontWeight:500 }}>Pricing</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--espresso)", marginTop:12, letterSpacing:"-0.02em" }}>
            Simple, honest pricing
          </h2>
          <p style={{ color:"var(--muted)", fontSize:"1rem", marginTop:12, fontWeight:300 }}>No dark patterns. No surprise charges.</p>

          {/* billing toggle */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginTop:28 }}>
            <span style={{ fontSize:"0.875rem", color: annual ? "var(--muted)" : "var(--coffee)", fontWeight:500 }}>Monthly</span>
            <div onClick={() => setAnnual(!annual)} style={{
              width:48, height:26, borderRadius:100, cursor:"pointer",
              background: annual ? "var(--caramel)" : "rgba(183,149,127,0.3)",
              position:"relative", transition:"background 0.3s",
            }}>
              <div style={{
                position:"absolute", top:3, left: annual ? 25 : 3,
                width:20, height:20, borderRadius:"50%", background:"white",
                transition:"left 0.3s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)",
              }} />
            </div>
            <span style={{ fontSize:"0.875rem", color: annual ? "var(--coffee)" : "var(--muted)", fontWeight:500 }}>
              Annual{" "}
              <span style={{ background:"rgba(171,119,67,0.15)", color:"var(--caramel)", padding:"2px 8px", borderRadius:100, fontSize:"0.7rem", fontWeight:600 }}>Save 22%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24, alignItems:"stretch" }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.ctaFilled ? "var(--espresso)" : "white",
              borderRadius:24, padding:"36px 32px",
              border: plan.ctaFilled ? "none" : "1px solid rgba(183,149,127,0.2)",
              position:"relative", display:"flex", flexDirection:"column",
              boxShadow: plan.ctaFilled ? "0 20px 60px rgba(76,43,8,0.3)" : "none",
              transform: plan.ctaFilled ? "scale(1.02)" : "scale(1)",
            }}>
              {plan.badge && (
                <div style={{
                  position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)",
                  background:"var(--vanilla)", color:"white",
                  padding:"5px 16px", borderRadius:100, fontSize:"0.72rem", fontWeight:600, whiteSpace:"nowrap",
                }}>{plan.badge}</div>
              )}

              <div style={{ marginBottom:8 }}>
                <span style={{ fontSize:"0.8rem", fontWeight:500, letterSpacing:"0.04em", textTransform:"uppercase", color: plan.ctaFilled ? "rgba(215,141,166,0.8)" : "var(--caramel)" }}>
                  {plan.name}
                </span>
              </div>

              <div style={{ display:"flex", alignItems:"flex-end", gap:4, marginBottom:8 }}>
                <span style={{ fontFamily:"'Playfair Display', serif", fontSize:"3rem", fontWeight:700, lineHeight:1, color: plan.ctaFilled ? "var(--cream)" : "var(--espresso)" }}>
                  ${plan.name === "Lifetime" ? plan.price.monthly : (annual ? plan.price.annual : plan.price.monthly)}
                </span>
                {plan.name !== "Lifetime" && (
                  <span style={{ fontSize:"0.85rem", color: plan.ctaFilled ? "rgba(250,246,241,0.5)" : "var(--muted)", paddingBottom:8 }}>/mo</span>
                )}
                {plan.note && (
                  <span style={{ fontSize:"0.75rem", color:"var(--muted)", paddingBottom:8, marginLeft:4 }}>{plan.note}</span>
                )}
              </div>

              <p style={{ fontSize:"0.875rem", color: plan.ctaFilled ? "rgba(250,246,241,0.6)" : "var(--muted)", marginBottom:28, fontWeight:300 }}>{plan.desc}</p>

              <a href="#contact" style={{
                display:"block", textAlign:"center", padding:13, borderRadius:12,
                textDecoration:"none", fontWeight:500, fontSize:"0.9rem", marginBottom:28,
                background: plan.ctaFilled ? "var(--caramel)" : "transparent",
                color: plan.ctaFilled ? "white" : "var(--coffee)",
                border: plan.ctaFilled ? "none" : "1.5px solid rgba(109,57,20,0.3)",
                transition:"all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}
              >{plan.cta}</a>

              <div style={{ flex:1 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
                    <span style={{ color:"var(--caramel)", fontSize:"0.9rem", flexShrink:0, marginTop:1 }}>✓</span>
                    <span style={{ fontSize:"0.875rem", color: plan.ctaFilled ? "rgba(250,246,241,0.8)" : "var(--text)", fontWeight:300 }}>{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, j) => (
                  <div key={j} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
                    <span style={{ color:"rgba(183,149,127,0.4)", fontSize:"0.9rem", flexShrink:0, marginTop:1 }}>✗</span>
                    <span style={{ fontSize:"0.875rem", color:"rgba(183,149,127,0.5)", fontWeight:300 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q:"What makes Daywise different from a regular to-do app?",   a:"A to-do app is a blank canvas — you still have to plan everything. Daywise is an execution engine. Input your goal once; Daywise figures out the structure, timeline, and daily breakdown. You just show up and work." },
    { q:"Can I use it for any subject?",                             a:"Yes. Programming, languages, music, design, writing, science — any learning goal works. Enter topics manually, describe your goal for AI generation, or upload a PDF curriculum." },
    { q:"What happens if I miss a day?",                             a:"Nothing breaks. Mark the day as an exception and Daywise quietly adjusts your roadmap. Your streak resets but your progress stays intact — no guilt design here." },
    { q:"Is there a free trial for Pro?",                            a:"Yes. 14-day free trial on Pro, no credit card required. After that, continue on Free or upgrade anytime." },
    { q:"When does the full app launch?",                            a:"Currently in beta. Sign up to get early access and a special launch discount when we go live." },
  ];

  return (
    <section style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--cream)" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--caramel)", fontWeight:500 }}>FAQ</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--espresso)", marginTop:12, letterSpacing:"-0.02em" }}>
            Questions answered
          </h2>
        </div>

        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom:"1px solid rgba(183,149,127,0.2)" }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width:"100%", background:"none", border:"none", cursor:"pointer",
              display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"22px 0", textAlign:"left", gap:16,
            }}>
              <span style={{ fontFamily:"'Playfair Display', serif", fontSize:"1rem", fontWeight:600, color:"var(--espresso)" }}>{f.q}</span>
              <span style={{
                width:28, height:28, borderRadius:"50%", flexShrink:0,
                background: open === i ? "var(--espresso)" : "rgba(183,149,127,0.15)",
                color: open === i ? "white" : "var(--mocha)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"1.1rem", transition:"all 0.3s",
                transform: open === i ? "rotate(45deg)" : "none",
              }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? "300px" : "0", overflow:"hidden", transition:"max-height 0.4s ease" }}>
              <p style={{ fontSize:"0.9rem", color:"var(--muted)", lineHeight:1.75, paddingBottom:22, fontWeight:300 }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  };

  const inputStyle = {
    width:"100%", padding:"13px 16px", borderRadius:12,
    border:"1.5px solid rgba(183,149,127,0.3)",
    background:"var(--cream)", fontSize:"0.9rem",
    color:"var(--text)", outline:"none",
    fontFamily:"'DM Sans', sans-serif",
    transition:"border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding:"100px clamp(1.5rem,8vw,6rem)", background:"var(--milk)" }}>
      <div style={{ maxWidth:600, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--caramel)", fontWeight:500 }}>Get in touch</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"var(--espresso)", marginTop:12, letterSpacing:"-0.02em" }}>
            Join the waitlist
          </h2>
          <p style={{ color:"var(--muted)", marginTop:12, fontSize:"0.95rem", fontWeight:300, lineHeight:1.7 }}>
            Be among the first to get early access and a special launch discount. No spam — ever.
          </p>
        </div>

        <div style={{
          background:"white", borderRadius:24, padding:"48px",
          boxShadow:"0 8px 40px rgba(76,43,8,0.08)",
          border:"1px solid rgba(183,149,127,0.15)",
        }}>
          {status === "sent" ? (
            <div style={{ textAlign:"center", padding:"32px 0" }}>
              <div style={{ fontSize:"3rem", marginBottom:16 }}>☕</div>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.5rem", color:"var(--espresso)", marginBottom:8 }}>You're on the list!</h3>
              <p style={{ color:"var(--muted)", fontSize:"0.9rem", fontWeight:300 }}>We'll reach out when Daywise is ready for you.</p>
            </div>
          ) : (
            <>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:20 }}>
                {[
                  { label:"Your name", key:"name", type:"text", placeholder:"Alex Chen" },
                  { label:"Email address", key:"email", type:"email", placeholder:"alex@example.com" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display:"block", fontSize:"0.8rem", fontWeight:500, color:"var(--coffee)", marginBottom:8, letterSpacing:"0.02em" }}>{field.label}</label>
                    <input
                      type={field.type} placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom:28 }}>
                <label style={{ display:"block", fontSize:"0.8rem", fontWeight:500, color:"var(--coffee)", marginBottom:8, letterSpacing:"0.02em" }}>
                  What do you want to learn?{" "}
                  <span style={{ color:"var(--muted)", fontWeight:300 }}>(optional)</span>
                </label>
                <textarea
                  placeholder="e.g. Machine learning fundamentals, Spanish B2, Music theory..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  style={{ ...inputStyle, resize:"none" }}
                />
              </div>

              <button onClick={handleSubmit} disabled={status === "sending"} style={{
                width:"100%", padding:15,
                background: status === "sending" ? "var(--almond)" : "var(--espresso)",
                color:"var(--cream)", border:"none", borderRadius:12,
                fontSize:"0.95rem", fontWeight:500, cursor:"pointer",
                transition:"all 0.25s", fontFamily:"'DM Sans', sans-serif",
                display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              }}
              onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.opacity="0.88"; }}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}
              >
                {status === "sending" ? "Sending…" : "Join the waitlist →"}
              </button>

              <p style={{ textAlign:"center", fontSize:"0.75rem", color:"rgba(183,149,127,0.7)", marginTop:16 }}>
                No spam, no pressure. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{
      padding:"100px clamp(1.5rem,8vw,6rem)",
      background:"linear-gradient(135deg, var(--coffee) 0%, var(--espresso) 100%)",
      textAlign:"center", position:"relative", overflow:"hidden",
    }}>
      <div style={{ position:"absolute", top:-60, right:-60, width:300, height:300, borderRadius:"50%", background:"rgba(215,141,166,0.1)", pointerEvents:"none" }} />
      <div>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:700, color:"var(--cream)", letterSpacing:"-0.02em", marginBottom:20 }}>
          Your learning goal is<br />
          <em style={{ color:"var(--vanilla)", fontStyle:"italic" }}>one step away.</em>
        </h2>
        <p style={{ fontSize:"1.05rem", color:"rgba(250,246,241,0.65)", fontWeight:300, maxWidth:480, margin:"0 auto 36px", lineHeight:1.7 }}>
          Stop bookmarking courses and building Notion systems. Start actually learning — today.
        </p>
        <a href="#contact" style={{
          display:"inline-flex", alignItems:"center", gap:8,
          background:"var(--caramel)", color:"white",
          padding:"16px 40px", borderRadius:100,
          textDecoration:"none", fontWeight:500, fontSize:"1rem",
          boxShadow:"0 8px 30px rgba(0,0,0,0.25)", transition:"all 0.25s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(0,0,0,0.3)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 30px rgba(0,0,0,0.25)"; }}
        >Get early access — it's free</a>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:"var(--espresso)", padding:"48px clamp(1.5rem,8vw,6rem) 32px", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:32, marginBottom:48 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div style={{ width:30, height:30, borderRadius:"50%", background:"linear-gradient(135deg, var(--caramel), var(--vanilla))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>☕</div>
              <span style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:"1.15rem", color:"var(--cream)" }}>Daywise</span>
            </div>
            <p style={{ fontSize:"0.85rem", color:"rgba(250,246,241,0.45)", maxWidth:240, lineHeight:1.6, fontWeight:300 }}>A daily execution engine for self-learners.</p>
          </div>
          <div style={{ display:"flex", gap:64, flexWrap:"wrap" }}>
            {[
              { title:"Product", links:["Features","Pricing","Roadmap"] },
              { title:"Company", links:["About","Blog","Contact"] },
              { title:"Legal",   links:["Privacy","Terms"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(250,246,241,0.35)", marginBottom:16, fontWeight:500 }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ marginBottom:10 }}>
                    <a href="#" style={{ fontSize:"0.875rem", color:"rgba(250,246,241,0.55)", textDecoration:"none", fontWeight:300, transition:"color 0.2s" }}
                    onMouseEnter={e => e.target.style.color="rgba(250,246,241,0.9)"}
                    onMouseLeave={e => e.target.style.color="rgba(250,246,241,0.55)"}
                    >{l}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:"0.78rem", color:"rgba(250,246,241,0.3)", fontWeight:300 }}>© 2025 Daywise. All rights reserved.</p>
          <p style={{ fontSize:"0.78rem", color:"rgba(250,246,241,0.3)", fontWeight:300 }}>Made with ☕ for learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function DaywiseLanding() {
  return (
    <>
      <FontLoader />
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
