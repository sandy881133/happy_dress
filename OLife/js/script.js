  // Nav scroll state
  const nav=document.getElementById('nav');
  const stickyBar=document.getElementById('stickyBar');
  const hero=document.querySelector('.hero');
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    nav.classList.toggle('scrolled',y>40);
    stickyBar.classList.toggle('show',y>hero.offsetHeight*0.75);
  });

  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement;
      const wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen)item.classList.add('open');
    });
  });

  // Capsule scenes
  const scenes=[
    {time:'06:45 AM',title:'提案開會日｜俐落而不失溫度',
     desc:'挺拔的抗皺西裝外套搭配高腰直筒西褲，簡約金屬耳環收斂整體氣勢。走進會議室的那一刻，專業感已經先妳一步發言。',
     items:['抗皺西裝外套','高腰直筒西褲','極簡金屬耳環','結構手提包'],img:'imgs/f2d609eb-f941-4c0c-8b55-85695e4a72ef.jfif'},
    {time:'13:00 PM',title:'日常辦公日｜鬆弛的專業感',
     desc:'卸下外套，微彈針織上衣讓久坐一整天依然自在呼吸。一條細緻項鍊點亮領口，舒適與精緻在辦公桌前完美共存。',
     items:['微彈針織上衣','西裝寬褲','細鍊墜飾','舒適樂福鞋'],img:'imgs/76a6ed44-4a59-4f1d-81ca-c8554b20918f.png'},
    {time:'19:30 PM',title:'下班約會日｜同一套，另一種心情',
     desc:'同樣的膠囊單品，換上垂墜耳飾與斜背小包，俐落西褲瞬間切換晚宴模式。不必回家換裝，優雅無縫接軌妳的夜晚。',
     items:['垂墜寶石耳飾','絲質細肩上衣','斜背小方包','尖頭高跟鞋'],img:'imgs/a8ae7e19-98da-4f1e-bee9-ad384b5a146b.png'},
  ];
  const panel=document.getElementById('capsulePanel');
  function renderScene(i){
    const s=scenes[i];
    panel.innerHTML=`
      <div class="capsule-img fade-in-panel"><img src="${s.img}" alt="${s.title}"></div>
      <div class="capsule-detail fade-in-panel">
        <span class="clock-tag"><b>${s.time.split(' ')[0]}</b>${s.time.split(' ')[1]||''}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="capsule-items">${s.items.map(it=>`<span class="item">${it}</span>`).join('')}</div>
        <a href="#offer" class="btn btn-primary">一鍵打包這套穿搭 <span class="arrow">→</span></a>
      </div>`;
  }
  renderScene(0);
  document.querySelectorAll('.tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      renderScene(+tab.dataset.scene);
    });
  });

  // Countdown
  let total=5*3600+23*60+47;
  const h=document.getElementById('cd-h'),m=document.getElementById('cd-m'),s=document.getElementById('cd-s');
  setInterval(()=>{
    if(total<=0)total=5*3600+23*60+47;
    total--;
    const H=Math.floor(total/3600),M=Math.floor((total%3600)/60),S=total%60;
    h.textContent=String(H).padStart(2,'0');
    m.textContent=String(M).padStart(2,'0');
    s.textContent=String(S).padStart(2,'0');
  },1000);
