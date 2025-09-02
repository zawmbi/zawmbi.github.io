import { useState } from "react";
import "../contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const onSubmit = (e) => {
e.preventDefault();

const subject = encodeURIComponent(
    `Portfolio inquiry from ${form.name || "(no name)"}`
);
const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);

// cache-buster so the URL is always unique
const nonce = Date.now(); // or a simple counter you increment
const href = `mailto:LJMansour02@gmail.com?subject=${subject}&body=${body}&t=${nonce}`;

// use a temporary <a> to ensure a fresh user-gesture navigation
const a = document.createElement("a");
a.href = href;
a.style.display = "none";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// optional: also assign as a fallback (some browsers prefer this)
setTimeout(() => {
    // only try if no focus change happened; harmless if it did
    try { window.location.assign(href); } catch {}
}, 50);

setSent(true);
};

  return (
    <section className="contact-container">
      <div className="contact-backdrop" aria-hidden="true" />

      <div className="contact-header">
        <h1 className="contact-title">let's build something together!</h1>
        <p className="contact-subtitle">
          If you've got any questions, feedback, or want to collaborate— I'd love to hear from you, send me a note below!
        </p>
      </div>

      <hr className="faint-divider" />

      <div className="contact-block">
        {/* INFO + FORM in one block */}
        <ul className="contact-list">
  <li>
    <img className="icon" src="/icons/gmail.png" alt="Gmail" />
    <a className="link-underline" href="mailto:LJMansour02@gmail.com">
      LJMansour02@gmail.com
    </a>
  </li>
  <li>
    <img className="icon" src="/icons/github.png" alt="GitHub" />
    <a
      className="link-underline"
      href="https://github.com/zawmbi"
      target="_blank"
      rel="noreferrer"
    >
      github.com/zawmbi
    </a>
  </li>
  <li>
    <img className="icon" src="/icons/linkedin.png" alt="LinkedIn" />
    <a
      className="link-underline"
      href="https://www.linkedin.com/in/lindamansourr/"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/lindamansourr
    </a>
  </li>
  <li>
    <img className="icon" src="/icons/leaf.png" alt="Website" />
    <a
      className="link-underline"
      href="https://lindascomputing.xyz"
      target="_blank"
      rel="noreferrer"
    >
      lindascomputing.xyz
    </a>
  </li>
</ul>

        <div className="contact-section">
          <h2>send a note</h2>
          {sent && (
            <div className="sent-banner" role="status">
              thanks! your email client should have opened. if not, copy the message below.
            </div>
          )}
          <form onSubmit={onSubmit} className="form-grid" autoComplete="on">
            <label className="field">
              <span>name</span>
              <input type="text" placeholder="your name" name="name" value={form.name} onChange={onChange} required />
            </label>

            <label className="field">
              <span>email</span>
              <input type="email" placeholder="you@domain.com" name="email" value={form.email} onChange={onChange} required />
            </label>

            <label className="field field-full">
              <span>message</span>
              <textarea rows={5} placeholder="tell me about your project, a bug, or an idea…" name="message" value={form.message} onChange={onChange} required />
            </label>

            <button type="submit" className="primary-btn">send</button>
          </form>
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- STYLES ----------------------------- */
const style = document.createElement("style");
style.innerHTML = `
:root {
--background-light-green: #8AC16A;
--dark-green: #249C54;
--ink: #0b2216;
--ink-muted: #335444;
--card: #ffffff;
}


.contact-container { position: relative; padding: 56px 20px 40px; text-align: center; isolation: isolate; }


.contact-backdrop { position: absolute; inset: 0; background: radial-gradient(1000px 500px at 10% -10%, var(--background-light-green), transparent), radial-gradient(700px 400px at 100% 10%, var(--dark-green), transparent); opacity: 0.3; z-index: -1; }


.contact-header { max-width: 860px; margin: 0 auto 8px; }
.contact-title { font-size: clamp(28px, 4.5vw, 44px); margin: 0; color: var(--ink); text-transform: lowercase; }
.contact-subtitle { margin: 8px 0 0; font-size: clamp(16px, 2vw, 18px); color: var(--ink-muted); }


.faint-divider { width: min(820px, 92%); height: 1px; margin: 16px auto 20px; background-color: rgba(0,0,0,0.08); border: none; }


.contact-block { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 860px; margin: 0 auto; background: var(--card); border: 1px solid rgba(0,0,0,0.06); border-radius: 18px; box-shadow: 0 10px 28px rgba(0,0,0,0.08); padding: 24px; }
@media (min-width: 900px) { .contact-block { grid-template-columns: 1fr 1fr; } }


.contact-section { display: flex; flex-direction: column; gap: 14px; text-align: left; }
.contact-section h2 { margin: 0 0 8px; font-size: 20px; color: var(--ink); text-transform: lowercase; }

.contact-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.link-underline { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--dark-green); }
.link-underline:hover { border-bottom-width: 2px; }


.pill-row { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px; }
.pill { background: var(--background-light-green); color: var(--ink); border-radius: 999px; padding: 5px 10px; font-size: 12px; text-transform: lowercase; }


.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; max-width: 500px; margin: 0 auto; }
.field { display: grid; gap: 4px; }
.field span { font-size: 13px; color: var(--ink-muted); text-transform: lowercase; }
.field input, .field textarea { width: 100%; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); padding: 10px 12px; font-size: 15px; }
.field-full { grid-column: 1 / -1; }
.field textarea { resize: vertical; min-height: 120px; max-height: 200px; }


.button-row { grid-column: 1 / -1; display: flex; justify-content: center; margin-top: 10px; }
.primary-btn { border: none; background: var(--dark-green); color: white; padding: 10px 20px; font-size: 15px; border-radius: 10px; cursor: pointer; box-shadow: 0 4px 12px rgba(36,156,84,0.3); }


.sent-banner { background: var(--background-light-green); border: 1px dashed var(--dark-green); padding: 8px 10px; border-radius: 8px; font-size: 14px; }
`;
document.head.appendChild(style);