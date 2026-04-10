// ── State ─────────────────────────────────────────────────────────────────────
const State = {
  programId: null,
  weekIndex:  null,
  dayIndex:   0,
  get program()  { return WORKOUT_DATA.programs.find(p => p.id === State.programId); },
  get week()     { return State.program?.weeks[State.weekIndex]; },
  get day()      { return State.week?.days[State.dayIndex]; },
};

// ── Persistence ───────────────────────────────────────────────────────────────
const Store = {
  key: (pid, wi, di, ei) => `haos:${pid}:w${wi}:d${di}:e${ei}`,
  isDone(pid, wi, di, ei) { return localStorage.getItem(Store.key(pid,wi,di,ei)) === '1'; },
  toggle(pid, wi, di, ei) {
    const k = Store.key(pid,wi,di,ei);
    localStorage.getItem(k)==='1' ? localStorage.removeItem(k) : localStorage.setItem(k,'1');
  },
  dayProgress(pid, wi, di, total) {
    let done = 0;
    for (let i=0; i<total; i++) if (Store.isDone(pid,wi,di,i)) done++;
    return { done, total };
  }
};

// ── Screen Navigation ─────────────────────────────────────────────────────────
const App = {
  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active','slide-out');
    });
    document.getElementById(id).classList.add('active');
  },

  renderPrograms() {
    const list = document.getElementById('program-list');
    list.innerHTML = '';
    WORKOUT_DATA.programs.forEach(prog => {
      const el = document.createElement('div');
      el.className = 'program-card';
      el.innerHTML = `
        <div class="program-card-header">
          <div class="program-emoji">${prog.emoji}</div>
          <div class="program-info">
            <div class="program-name">${prog.name}</div>
            <div class="program-sub">${prog.subtitle}</div>
          </div>
        </div>
        <div class="program-card-footer">
          <div class="program-stat">
            <div class="program-stat-val" style="color:${prog.color||'#cc2200'}">${prog.weeks.length}</div>
            <div class="program-stat-key">Weeks</div>
          </div>
          <div class="program-stat">
            <div class="program-stat-val" style="color:${prog.color||'#cc2200'}">${prog.weeks[0]?.days.length||7}</div>
            <div class="program-stat-key">Days/Week</div>
          </div>
          <div class="program-stat">
            <div class="program-stat-val" style="color:${prog.color||'#cc2200'}">3+1</div>
            <div class="program-stat-key">Pattern</div>
          </div>
          <div class="program-arrow">›</div>
        </div>
      `;
      el.addEventListener('click', () => App.openProgram(prog.id));
      list.appendChild(el);
    });
  },

  openProgram(id) {
    State.programId = id;
    App.renderWeeks();
    App.showScreen('screen-weeks');
  },

  renderWeeks() {
    const prog = State.program;
    document.getElementById('weeks-program-name').textContent = prog.name;
    const list = document.getElementById('week-list');
    list.innerHTML = '';
    let lastBlock = '';
    prog.weeks.forEach((week, i) => {
      if (week.blockLabel !== lastBlock) {
        lastBlock = week.blockLabel;
        const lbl = document.createElement('div');
        lbl.className = 'block-section-label';
        lbl.textContent = week.blockLabel;
        list.appendChild(lbl);
      }
      const isRecovery = week.label.toLowerCase().includes('recovery') || week.label.toLowerCase().includes('deload');
      const isPeak     = week.label.toLowerCase().includes('peak');
      const el = document.createElement('div');
      el.className = `week-card${isRecovery?' is-recovery':isPeak?' is-peak':''}`;
      el.innerHTML = `
        <div class="week-card-left">
          <div class="week-num">Week ${week.weekNum}</div>
          <div class="week-label">${week.label}</div>
          ${week.note ? `<div class="week-note">${week.note}</div>` : ''}
        </div>
        <div class="week-arrow">›</div>
      `;
      el.addEventListener('click', () => App.openWeek(i));
      list.appendChild(el);
    });
  },

  openWeek(weekIndex) {
    State.weekIndex = weekIndex;
    State.dayIndex  = 0;
    App.renderDayView();
    App.showScreen('screen-days');
  },

  renderDayView() {
    const week = State.week;
    document.getElementById('days-week-label').textContent = `Wk ${week.weekNum} — ${week.label}`;
    App.renderDayTabs();
    App.renderDayContent();
  },

  renderDayTabs() {
    const tabs = document.getElementById('day-tabs');
    tabs.innerHTML = '';
    State.week.days.forEach((day, i) => {
      const short = day.label.split('—')[0].trim().split(' ')[0]; // MON, TUE etc
      const btn = document.createElement('button');
      btn.className = `day-tab${i===State.dayIndex?' active':''}`;
      btn.textContent = short;
      btn.addEventListener('click', () => {
        State.dayIndex = i;
        App.renderDayTabs();
        App.renderDayContent();
      });
      tabs.appendChild(btn);
    });
  },

  renderDayContent() {
    const day = State.day;
    const pid = State.programId;
    const wi  = State.weekIndex;
    const di  = State.dayIndex;
    const prog = State.week?.days[di]?.exercises || [];
    const { done, total } = Store.dayProgress(pid, wi, di, prog.length);
    const pct = total ? Math.round((done/total)*100) : 0;

    const content = document.getElementById('day-content');
    content.innerHTML = `
      <div class="day-header">${day.label}</div>
      <div class="day-progress">${done} of ${total} completed</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    `;

    day.exercises.forEach((ex, ei) => {
      const isDone = Store.isDone(pid, wi, di, ei);
      const card = document.createElement('div');
      card.className = `exercise-card type-${ex.type}${isDone?' done':''}`;
      card.dataset.ei = ei;

      const typeLabel = { strength:'Strength', run:'Run', bike:'Bike', conditioning:'Conditioning', rest:'Rest' }[ex.type] || ex.type;
      const logIcon   = isDone ? '✓ Completed' : '+ Log Result';

      card.innerHTML = `
        <div class="type-badge type-${ex.type}">${typeLabel}</div>
        <div class="exercise-title">${ex.title}</div>
        ${ex.notes.length ? `<ul class="exercise-notes">${ex.notes.map(n=>`<li>${n}</li>`).join('')}</ul>` : ''}
        ${ex.type!=='rest' ? `<button class="log-btn">${logIcon}</button>` : ''}
      `;

      if (ex.type !== 'rest') {
        card.querySelector('.log-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          Store.toggle(pid, wi, di, ei);
          App.renderDayContent();
          // scroll back to same position
        });
      }

      content.appendChild(card);
    });
  },

  back() {
    App.showScreen('screen-programs');
  },

  goToWeeks() {
    App.showScreen('screen-weeks');
  },
};

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  App.renderPrograms();
  App.showScreen('screen-programs');

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});
