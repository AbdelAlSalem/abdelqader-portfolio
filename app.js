(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const icon = (name) => `<svg aria-hidden="true"><use href="#ic-${name}"/></svg>`;
  const cvUrl = 'assets/Abdelqader_Al-Salem_CV_2026.docx';
  const gh = 'https://github.com/AbdelAlSalem';
  const linkedin = 'https://www.linkedin.com/in/abdelqader-al-salem-1bb22b366/';
  const email = 'a.mhd.alsalem@gmail.com';
  const subject = 'Portfolio inquiry — Hello Abdelqader';
  const composeInGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
  const composeInOutlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}`;
  const photos = [
    ['office-thoughtful.webp', 'Portrait at the office'],
    ['galataport-suit.webp', 'A professional day at Galataport'],
    ['graduation-day.webp', 'Graduation celebration at Üsküdar University'],
    ['giza-visit.webp', 'Visiting the Great Sphinx in Giza'],
    ['bosphorus-night.webp', 'An evening overlooking the Bosphorus'],
    ['pool-evening.webp', 'Evening portrait in a gray suit'],
    ['cruise-terrace.webp', 'An afternoon at the waterfront'],
    ['workshop.webp', 'Working on a laptop during a professional workshop'],
    ['office-profile.webp', 'At the office'],
  ];
  const photoUrl = (filename) => `assets/photos/${filename}`;

  const header = (eyebrow, title, subtitle, symbol) => `
    <div class="dialog-header">
      ${symbol ? `<div class="header-icon">${icon(symbol)}</div>` : ''}
      <div class="eyebrow">${eyebrow}</div>
      <h2>${title}</h2>
      ${subtitle ? `<p class="subline">${subtitle}</p>` : ''}
    </div>`;
  const feature = (symbol, title, text) => `<div class="feature-card">${icon(symbol)}<h4>${title}</h4><p>${text}</p></div>`;
  const tag = (label, kind = '') => `<span class="skill-tag ${kind}"><i aria-hidden="true"></i>${label}</span>`;
  const details = {
    about() {
      return `<section aria-label="About Abdelqader">
        <div class="photo-deck" id="photoDeck" aria-label="Photo carousel">
          <div class="deck-stage">${photos.map(([filename, caption], i) => `<button type="button" class="deck-card" data-photo="${i}" aria-label="View photo ${i + 1}: ${caption}"><img src="${photoUrl(filename)}" alt="${caption}" loading="${i < 4 ? 'eager' : 'lazy'}"></button>`).join('')}</div>
          <div class="deck-nav"><button class="deck-arrow" id="deckPrev" aria-label="Previous photo">${icon('chevron-left')}</button><div class="deck-dots">${photos.map((_, i) => `<button class="deck-dot" data-deck-to="${i}" aria-label="Go to photo ${i + 1}"></button>`).join('')}</div><button class="deck-arrow" id="deckNext" aria-label="Next photo">${icon('chevron-right')}</button></div>
          <p class="deck-hint">Swipe to explore · Tap a photo to enlarge</p>
        </div>
        <div class="about-content">
          ${header('The person behind the projects', "Who's Abdelqader?", 'Software Engineer · Networks · AI')}
          <p class="about-meta">Istanbul, Türkiye · Jeddah, Saudi Arabia · Open to EMEA</p>
          <div class="about-profile">
            <p class="prose">I’m a <strong>Software Engineering graduate from Üsküdar University</strong> with a passion for building useful technology — from polished user interfaces and full-stack applications to AI-assisted network diagnostics.</p>
            <p class="prose">I work with <strong>React, TypeScript, Node.js, PostgreSQL, and REST APIs</strong>. My networking foundation includes Cisco routing and switching, subnetting and Azure networking; I’m also learning how to design evidence-backed AI agents that solve real technical problems.</p>
            <p class="prose">Outside coding, I’ve worked directly with clients in real estate consulting and co-founded a software startup. Those experiences helped me connect engineering decisions with what people actually need.</p>
          </div>
          <div class="feature-grid">
            ${feature('code','Full-stack development','React · TypeScript · Node.js · PostgreSQL')}
            ${feature('layers','Networking','Cisco · Routing & switching · Azure')}
            ${feature('sparkles','AI & agents','LLM tools · Retrieval · Diagnostics')}
            ${feature('briefcase','Client-facing work','Consulting · Communication · Problem solving')}
          </div>
          <p class="kicker">Currently focused on</p>
          <p class="prose">Growing as a software and networking engineer, building practical AI tools, and pursuing engineering opportunities in both Istanbul and Jeddah, with a strong interest in working in Saudi Arabia.</p>
          <div class="dialog-cta-row"><button class="action-primary" data-open="projects">${icon('cpu')} See my projects</button><a class="action-secondary" href="${cvUrl}" download="Abdelqader_Al-Salem_CV_2026.docx">${icon('download')} Download CV</a></div>
        </div>
      </section>`;
    },
    experience() {
      return `<section>${header('My journey','Experience','A mix of engineering, product-building and real client work.','briefcase')}
        <div class="timeline">
          <article class="timeline-card"><div class="timeline-date">Jul 2025 — Present</div><h3>Real Estate Sales Consultant</h3><div class="timeline-org">Property Experts Pazarlama · Türkiye</div><p>Advise clients on property options, understand their requirements, explain trade-offs, negotiate and follow up throughout the sales process. I’ve learned to communicate technical and complex information clearly, build trust and make decisions with customer needs in mind.</p></article>
          <article class="timeline-card"><div class="timeline-date">Jan 2026 — Apr 2026</div><h3>Co-Founder & Software Engineer</h3><div class="timeline-org">Dardeshly · Startup</div><p>Co-founded a WhatsApp marketing product for restaurants, real-estate professionals and e-commerce teams. Built React interfaces and Node.js API integrations and explored ways to turn customer workflows into a practical digital product.</p></article>
          <article class="timeline-card"><div class="timeline-date">Jun 2024 — Sep 2024</div><h3>Front-End Developer Intern</h3><div class="timeline-org">Futeric · Amman, Jordan</div><p>Developed responsive React interfaces, improved performance and cross-browser behavior, and collaborated with the team using an Agile development workflow.</p></article>
        </div>
        <div class="highlight-panel"><div class="highlight-top"><span class="highlight-icon">${icon('sparkles')}</span><h3>Engineering meets people</h3></div><p>I enjoy the space between code and communication: discovering a real need, designing a solution, and making sure it works for the people using it.</p></div>
        <div class="dialog-cta-row"><button data-open="projects" class="action-primary">${icon('layers')} Explore projects</button><button data-open="contact" class="action-secondary">${icon('mail')} Get in touch</button></div>
      </section>`;
    },
    projects() {
      const project = (symbol,title,descr,stack,links) => `<article class="project-card"><div class="project-card-top"><div class="project-symbol">${icon(symbol)}</div><h3>${title}</h3></div><p>${descr}</p><div class="project-stack">${stack}</div><div class="project-actions">${links.map(([label,url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ${icon('arrow')}</a>`).join('')}</div></article>`;
      return `<section>${header('Built & shipped','Featured Projects','Selected work in software engineering, networking and AI.','cpu')}
        <div class="highlight-panel"><div class="highlight-top"><span class="highlight-icon">${icon('layers')}</span><h3>NetPilot AI</h3></div><p><strong>AI-powered network troubleshooting assistant.</strong> A React/TypeScript and Node.js platform that parses Cisco CLI output, correlates evidence across devices and generates troubleshooting guidance. It includes rule-based diagnostics and an optional, privately configured tool-calling AI agent.</p>
          <div class="dialog-cta-row"><a class="action-primary" href="https://netpilot-ai.onrender.com/" target="_blank" rel="noopener noreferrer">${icon('arrow')} Live demo</a><a class="action-secondary" href="https://github.com/AbdelAlSalem/netpilot-ai" target="_blank" rel="noopener noreferrer">${icon('github')} Source code</a></div>
        </div>
        <div class="project-grid">
          ${project('code','Full-Stack Notes Application','A complete notes experience with create, read, update and delete APIs backed by a persistent relational database.','React · TypeScript · Express · Prisma · PostgreSQL', [['GitHub', 'https://github.com/AbdelAlSalem/fullstack-notes-app']])}
          ${project('location','Real Estate Web Application','A browsable real-estate interface with property details, favorites and booking-oriented views.','React · Front-end development · Responsive design', [['GitHub', 'https://github.com/AbdelAlSalem/Real-Estate-Website']])}
          ${project('cap','Resit Exam Declaration System','Role-based student, instructor and faculty secretary interfaces for declaring and administering resit examinations.','Django · Web application · Education systems', [['GitHub', 'https://github.com/AbdelAlSalem/Software-Project-Management-']])}
          ${project('sparkles','Dardeshly','An entrepreneurial product concept for WhatsApp-driven communication and marketing, built with front-end and API work.','React · Node.js · Product design', [])}
        </div>
        <p class="subtle-note">NetPilot’s public demo supports its demo features; optional private AI capabilities require an appropriately configured provider API key.</p>
        <div class="dialog-cta-row"><button data-open="skills" class="action-secondary">${icon('code')} My toolkit</button><button data-open="contact" class="action-primary">${icon('mail')} Work together</button></div>
      </section>`;
    },
    skills() {
      return `<section>${header('What I work with','Skills & Tools','Technologies I use, study and build with.','layers')}
        <div class="skill-group"><h3>Frontend & application development</h3><div class="skill-list">${['JavaScript (ES6+)','TypeScript','React','HTML5','CSS3','Responsive design','REST APIs'].map(t => tag(t)).join('')}</div></div>
        <div class="skill-group"><h3>Backend & data</h3><div class="skill-list">${['Node.js','Express','PostgreSQL','Prisma ORM','Git / GitHub'].map(t => tag(t,'green')).join('')}</div></div>
        <div class="skill-group"><h3>Networks & cloud</h3><div class="skill-list">${['IPv4 / IPv6','TCP/IP','Subnetting','VLANs','Routing & switching','Cisco Packet Tracer','Azure networking'].map(t => tag(t,'purple')).join('')}</div></div>
        <div class="skill-group"><h3>AI, security & tools</h3><div class="skill-list">${['LLM tool calling','Groq API integration','Evidence retrieval','AI agent workflows','Splunk searches & alerts','Python fundamentals'].map(t => tag(t,'orange')).join('')}</div></div>
        <div class="highlight-panel"><div class="highlight-top"><span class="highlight-icon">${icon('cpu')}</span><h3>How I learn</h3></div><p>Through projects, targeted training and hands-on labs. NetPilot AI brings my software, networking and AI interests together in one deployed product.</p></div>
        <div class="dialog-cta-row"><button class="action-primary" data-open="projects">${icon('arrow')} View projects</button><button class="action-secondary" data-open="education">${icon('cap')} Education & certificates</button></div>
      </section>`;
    },
    education() {
      return `<section>${header('Academic background','Education & Training','Software Engineering · Networking · Cloud · Cybersecurity','cap')}
        <div class="education-big"><div class="header-icon">${icon('cap')}</div><div class="eyebrow">Graduated July 2026</div><h3>B.Sc. Software Engineering</h3><p>Üsküdar University · Istanbul, Türkiye</p><div class="grade">GPA 3.64 / 4.00</div></div>
        <p class="kicker">Certifications & learning</p>
        <div class="certificate">${icon('award')}<div><strong>Microsoft Applied Skills</strong><p>Configure secure access to your workloads using Azure networking · September 2026</p></div></div>
        <div class="certificate">${icon('award')}<div><strong>Cisco Networking Academy</strong><p>Network Technician Career Path Exam, networking fundamentals, network support & security, Packet Tracer, Introduction to Cybersecurity and Python Essentials 1 · 2026. CCNA training ongoing.</p></div></div>
        <div class="certificate">${icon('award')}<div><strong>Splunk eLearning</strong><p>Intro to Splunk, Using Fields, Scheduling Reports & Alerts, and Visualizations · May–June 2026</p></div></div>
        <div class="certificate">${icon('award')}<div><strong>Professional workshop</strong><p>AI & Emotional Intelligence for Inclusive Decision-Making · January 2026</p></div></div>
        <div class="dialog-cta-row"><a class="action-primary" href="${cvUrl}" download="Abdelqader_Al-Salem_CV_2026.docx">${icon('download')} Download full CV</a><button data-open="skills" class="action-secondary">${icon('layers')} View skills</button></div>
      </section>`;
    },
    location() {
      return `<section>${header('Istanbul · Jeddah','Location & Mobility','Born in Saudi Arabia · Building my career across Türkiye and Saudi Arabia.','location')}
        <div class="location-gallery"><img src="${photoUrl('bosphorus-night.webp')}" alt="Abdelqader overlooking the illuminated Bosphorus bridge"><img src="${photoUrl('giza-visit.webp')}" alt="Abdelqader at the Great Sphinx in Egypt"></div>
        <p class="prose"><strong>Born in Saudi Arabia and currently based in Istanbul, Türkiye</strong>, I have strong ties to both countries. I’m actively pursuing <strong>software engineering, networking, and AI opportunities in Jeddah, Saudi Arabia, and Istanbul</strong>, with a particular interest in building my career in the Kingdom. I’m open to relocating to Jeddah for the right opportunity and to collaborating across EMEA.</p>
        <p class="prose">I hold <strong>Turkish and Jordanian passports</strong> and a <strong>Saudi Iqama</strong>, bringing international mobility and familiarity with the region. I work in <strong>Arabic (native)</strong> and <strong>English (advanced)</strong>, and speak <strong>beginner Turkish</strong>. I value clear communication and working with people from different backgrounds.</p>
        <div class="pill-row"><span class="info-pill">${icon('location')} Istanbul, Türkiye</span><span class="info-pill">${icon('briefcase')} Jeddah, Saudi Arabia</span><span class="info-pill">${icon('globe')} Open to EMEA</span></div>
        <div class="dialog-cta-row"><button data-open="contact" class="action-primary">${icon('mail')} Let's talk opportunities</button><button data-open="about" class="action-secondary">${icon('user')} More about me</button></div>
      </section>`;
    },
    contact() {
      return `<section>${header('Say hello',"Let's build something useful",'Open to engineering opportunities, collaborations and interesting problems.','mail')}
        <div class="contact-box"><div class="header-icon">${icon('sparkles')}</div><h3>Have a project or an opportunity?</h3><p>Whether it’s a software role, a networking challenge, or an AI idea, I’d love to hear what you’re building.</p>
          <div class="email-compose-actions">
            <a class="action-primary" href="${composeInGmail}" target="_blank" rel="noopener noreferrer">${icon('mail')} Send me an email (Gmail)</a>
            <a class="action-secondary" href="${composeInOutlook}" target="_blank" rel="noopener noreferrer">Outlook ${icon('arrow')}</a>
          </div>
          <p class="email-help">Choose Gmail or Outlook to write to me in your browser. Sign in if asked, then click Send. No desktop email application is needed.</p>
        </div>
        <div class="contact-links">
          <a class="contact-link" href="${composeInGmail}" target="_blank" rel="noopener noreferrer"><span class="round-icon">${icon('mail')}</span><span><strong>${email}</strong><small>Write to me using Gmail in your browser</small></span>${icon('arrow')}</a>
          <a class="contact-link" href="${composeInOutlook}" target="_blank" rel="noopener noreferrer"><span class="round-icon">${icon('mail')}</span><span><strong>Compose in Outlook</strong><small>Use Outlook in your browser</small></span>${icon('arrow')}</a>
          <a class="contact-link" href="${linkedin}" target="_blank" rel="noopener noreferrer"><span class="round-icon">${icon('linkedin')}</span><span><strong>LinkedIn</strong><small>Connect professionally</small></span>${icon('arrow')}</a>
          <a class="contact-link" href="${gh}" target="_blank" rel="noopener noreferrer"><span class="round-icon">${icon('github')}</span><span><strong>GitHub</strong><small>Explore the code behind my work</small></span>${icon('arrow')}</a>
          <a class="contact-link" href="tel:+905521511094"><span class="round-icon">${icon('phone')}</span><span><strong>+90 552 151 10 94</strong><small>Call me</small></span>${icon('arrow')}</a>
          <button type="button" class="contact-link copy-email" id="copyEmail"><span class="round-icon">${icon('copy')}</span><span><strong>Copy email address</strong><small>One click to copy</small></span>${icon('copy')}</button>
        </div>
        <div class="contact-footer">Istanbul, Türkiye · Jeddah, Saudi Arabia · Open to EMEA</div>
      </section>`;
    },
  };

  const modal = $('#detailDialog');
  const dialogContent = $('#dialogContent');
  const photoModal = $('#photoDialog');
  let currentSection = null;
  let currentPhoto = 0;
  let toastTimeout;
  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2400);
  }
  function initDeck() {
    const deck = $('#photoDeck', dialogContent);
    if (!deck) return;
    const cards = $$('.deck-card', deck), dots = $$('.deck-dot', deck);
    const isNarrow = () => window.matchMedia('(max-width: 639px)').matches;
    function render() {
      const baseX = isNarrow() ? 119 : 146;
      cards.forEach((card, i) => {
        let distance = i - currentPhoto;
        if (distance > photos.length / 2) distance -= photos.length;
        if (distance < -photos.length / 2) distance += photos.length;
        const abs = Math.abs(distance);
        const position = distance === 0 ? 0 : Math.sign(distance) * (abs === 1 ? baseX : (baseX + (isNarrow() ? 82 : 101)));
        const scale = abs === 0 ? 1 : abs === 1 ? .87 : .72;
        const rotate = distance * (abs === 1 ? 7.5 : 8.5);
        card.style.transform = `translateX(calc(-50% + ${position}px)) rotate(${rotate}deg) scale(${scale})`;
        card.style.zIndex = String(10 - abs);
        card.style.opacity = abs > 2 ? '0' : '1';
        card.style.pointerEvents = abs > 2 ? 'none' : 'auto';
        card.classList.toggle('active', distance === 0);
        card.tabIndex = abs > 2 ? -1 : 0;
      });
      dots.forEach((dot,i) => dot.setAttribute('aria-current', i === currentPhoto ? 'true' : 'false'));
    }
    function next(n) {currentPhoto = (currentPhoto + n + photos.length) % photos.length;render();}
    $('#deckPrev', deck).addEventListener('click', () => next(-1));
    $('#deckNext', deck).addEventListener('click', () => next(1));
    dots.forEach((dot,i) => dot.addEventListener('click', () => {currentPhoto=i;render();}));
    cards.forEach((card,i) => card.addEventListener('click', () => {
      if (i !== currentPhoto) { currentPhoto=i;render();return; }
      const [filename,caption] = photos[i];
      $('#expandedPhoto').src = photoUrl(filename);
      $('#expandedPhoto').alt = caption;
      $('#photoCaption').textContent = caption;
      photoModal.showModal();
    }));
    let initialX = null;
    deck.addEventListener('touchstart', e => {initialX = e.touches[0]?.clientX ?? null;}, {passive:true});
    deck.addEventListener('touchend', e => {
      if(initialX === null) return;
      const delta = (e.changedTouches[0]?.clientX ?? initialX) - initialX;
      if(Math.abs(delta) > 36) next(delta < 0 ? 1 : -1);
      initialX = null;
    }, {passive:true});
    deck.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {e.preventDefault();next(1);}
      if (e.key === 'ArrowLeft') {e.preventDefault();next(-1);}
    });
    window.addEventListener('resize', render, {passive:true, once:true});
    render();
  }
  function openDetail(section, updateHash = true) {
    if (!details[section]) return;
    currentSection = section;
    dialogContent.innerHTML = details[section]();
    if (!modal.open) {modal.showModal(); document.body.classList.add('dialog-open');}
    dialogContent.scrollTop = 0;
    if (section === 'about') { currentPhoto=0; initDeck(); }
    if (updateHash && location.hash !== `#${section}`) {
      try { history.pushState(null, '', `#${section}`); } catch (_) { /* Some embedded previews restrict the History API. */ }
    }
    modal.setAttribute('aria-label', `${section.charAt(0).toUpperCase()}${section.slice(1)} — Abdelqader Al-Salem`);
  }
  function closeDetail(updateUrl = true) {
    if (photoModal.open) photoModal.close();
    if (modal.open) modal.close();
    document.body.classList.remove('dialog-open');
    currentSection = null;
    if (updateUrl && /^#(about|experience|projects|skills|education|location|contact)$/.test(location.hash)) {
      try { history.replaceState(null, '', location.href.split('#')[0]); } catch (_) { /* Keep the UI usable inside restricted previews. */ }
    }
  }
  document.addEventListener('click', async e => {
    const open = e.target.closest('[data-open]');
    if (open) { e.preventDefault();openDetail(open.dataset.open);return; }
    if (e.target.closest('.modal-close,.back-home')) {closeDetail();return;}
    if (e.target.closest('.photo-close')) {photoModal.close();return;}
    if (e.target.closest('#copyEmail')) {
      try {
        if(navigator.clipboard?.writeText) await navigator.clipboard.writeText(email);
        else {
          const input = document.createElement('textarea');input.value=email;document.body.append(input);input.select();
          if (!document.execCommand('copy')) throw new Error('Copy unavailable');
          input.remove();
        }
        showToast('Email address copied');
      } catch (err) {showToast(`Email: ${email}`);}
    }
  });
  modal.addEventListener('click',e => {if(e.target === modal) closeDetail();});
  photoModal.addEventListener('click',e => {if(e.target === photoModal) photoModal.close();});
  modal.addEventListener('close', () => {document.body.classList.remove('dialog-open');currentSection=null;});
  window.addEventListener('hashchange', () => {
    const section = location.hash.slice(1);
    if(details[section]) openDetail(section,false);
    else if (modal.open) closeDetail(false);
  });
  window.addEventListener('popstate', () => {
    const section=location.hash.slice(1);
    if(details[section]) openDetail(section,false);
    else closeDetail(false);
  });
  const initial = location.hash.slice(1);
  if(details[initial]) openDetail(initial,false);

  // Calm, lightweight constellation background. No dependencies or trackers.
  const canvas = $('#ambientCanvas');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let points = [], width = 0, height = 0, dpr = 1, animationFrame = 0, lastDraw = 0;
  function seeded(i) {let n = (i * 9301 + 49297) % 233280;return n / 233280;}
  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); width=window.innerWidth;height=window.innerHeight;
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(Math.max(Math.floor(width*height / 12400),35),112);
    points = Array.from({length:count},(_,i) => ({
      x:seeded(i+17)*width,
      y:seeded(i*7+27)*height,
      vx:(seeded(i*17+5)-.5)*.19,
      vy:(seeded(i*11+14)-.5)*.19,
      glow:i%11===0 || i%19===0,
      size:i%13===0?1.45:.75,
    }));
    draw(false);
  }
  function draw(move=true) {
    ctx.clearRect(0,0,width,height);
    const cutoff=Math.min(155,Math.max(116,width/12));
    for(let i=0;i<points.length;i++) {
      const p=points[i];
      if (move) {p.x+=p.vx;p.y+=p.vy;if(p.x<-20)p.x=width+20;if(p.x>width+20)p.x=-20;if(p.y<-20)p.y=height+20;if(p.y>height+20)p.y=-20;}
      for(let j=i+1;j<points.length;j++) {
        const q=points[j];let dx=q.x-p.x,dy=q.y-p.y,dist=Math.hypot(dx,dy);
        if(dist<cutoff) {
          const alpha=(1-dist/cutoff)*.115;
          ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(99,113,141,${alpha.toFixed(3)})`;ctx.lineWidth=.65;ctx.stroke();
        }
      }
      if(p.glow) {
        const gradient=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,10);
        gradient.addColorStop(0,'rgba(53,120,255,.44)');gradient.addColorStop(.22,'rgba(92,150,255,.2)');gradient.addColorStop(1,'rgba(92,150,255,0)');
        ctx.fillStyle=gradient;ctx.beginPath();ctx.arc(p.x,p.y,10,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='rgba(74,133,250,.65)';ctx.beginPath();ctx.arc(p.x,p.y,1.3,0,Math.PI*2);ctx.fill();
      } else {ctx.fillStyle='rgba(112,122,139,.34)';ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();}
    }
  }
  function animate(time) {animationFrame=requestAnimationFrame(animate);if(time-lastDraw<35)return;lastDraw=time;draw(true);}
  resizeCanvas();
  if(!reduceMotion) animationFrame=requestAnimationFrame(animate);
  let resizeHandle;
  window.addEventListener('resize', () => {clearTimeout(resizeHandle);resizeHandle=setTimeout(resizeCanvas,120);}, {passive:true});
})();
