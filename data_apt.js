// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — Daily Anterior Pelvic Tilt Routine
//  5-10 minutes, every day. Two halves that matter equally:
//    (1) MOBILITY  — lengthen what is short: hip flexors, rectus femoris, TFL,
//                    lumbar erectors, lats.
//    (2) ACTIVATION — strengthen what is not doing its job: glute max, deep
//                    abdominals (posterior pelvic tilt control), hamstrings.
//  Stretching alone does not hold a pelvis in place. The activation half is
//  what makes the change stick.
//  Loaded after data_4day.js; inserted directly beneath it in the list.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  const m  = (title, notes=[]) => ({ type:'mobility', title, notes });
  const a  = (title, notes=[]) => ({ type:'strength', title, notes });

  // Progression across the 4 weeks — same movements, more time under tension.
  const P = {
    1: { hold:'30 sec', bridge:12, deadbug:8,  ppt:'8 × 5 sec', plank:'20 sec', rounds:2 },
    2: { hold:'40 sec', bridge:15, deadbug:10, ppt:'10 × 5 sec', plank:'30 sec', rounds:2 },
    3: { hold:'45 sec', bridge:15, deadbug:12, ppt:'10 × 8 sec', plank:'40 sec', rounds:2 },
    4: { hold:'60 sec', bridge:20, deadbug:12, ppt:'12 × 8 sec', plank:'45 sec', rounds:3 },
  };

  // ── ROUTINE A — Mobility Priority (~6 min) ───────────────────────────────
  function routineA(wk) {
    const p = P[wk];
    return {
      label: 'Routine A — Mobility Priority (6 min)',
      exercises: [
        m('1. Couch Stretch — ' + p.hold + ' each side', [
          'Back knee on floor, back foot up against a wall or couch.',
          'THE WHOLE EXERCISE: squeeze the back glute hard and tuck your tailbone under.',
          'Without that tuck you just arch your lower back and stretch nothing.',
          'If the wall version is too aggressive, do it half-kneeling on flat floor.',
        ]),
        m('2. Half-kneeling Hip Flexor with Overhead Reach — ' + p.hold + ' each side', [
          'Same tucked-pelvis position, then reach the same-side arm overhead and lean away.',
          'Adds the TFL and the lat — both pull the pelvis forward when short.',
          'Breathe out fully at the end of each breath, ribs down.',
        ]),
        m('3. Child\'s Pose with Side Reach — ' + p.hold + ' each side', [
          'Sit hips back to heels, walk both hands to one side.',
          'Targets lumbar erectors and lats — the top half of the tilt.',
        ]),
        m('4. Foam Roll Quads & Hip Flexors — 60-90 sec', [
          'Slow passes down the front of the thigh and the front of the hip.',
          'Pause and breathe on tender spots for 20-30 sec rather than rolling fast.',
        ]),
      ],
    };
  }

  // ── ROUTINE B — Activation Priority (~6 min) ─────────────────────────────
  function routineB(wk) {
    const p = P[wk];
    return {
      label: 'Routine B — Activation Priority (6 min)',
      exercises: [
        a('1. Supine Posterior Pelvic Tilt — ' + p.ppt, [
          'Lie on your back, knees bent. Flatten your lower back into the floor by tilting the pelvis, not by pushing with your legs.',
          'This is the single most important drill here — it teaches the position everything else defends.',
          'Exhale hard as you tuck. Ribs down towards hips.',
        ]),
        a('2. Dead Bug — ' + p.rounds + ' × ' + p.deadbug + ' each side', [
          'Lower back stays glued to the floor the entire set.',
          'The moment your back arches off the floor, the set is over — reduce range, do not push through.',
          'Slow. Exhale as the leg extends.',
        ]),
        a('3. Glute Bridge with Posterior Tilt — ' + p.rounds + ' × ' + p.bridge, [
          'Tuck the pelvis FIRST, then lift. Do not hinge up into a lower-back arch.',
          '2 sec squeeze at the top. You should feel glutes, not hamstrings or lower back.',
          'Progress to single-leg once 20 reps feel easy.',
        ]),
        a('4. RKC Plank — ' + p.plank, [
          'Forearm plank, but actively tuck the tailbone and squeeze glutes and quads hard.',
          'Short and maximally tense beats long and sagging.',
        ]),
      ],
    };
  }

  // ── ROUTINE C — Full Reset (~10 min, Sundays) ────────────────────────────
  function routineC(wk) {
    const p = P[wk];
    return {
      label: 'Routine C — Full Reset (10 min)',
      exercises: [
        m('1. Foam Roll Quads, Hip Flexors & Lats — 2 min', [
          'Slower and longer than the weekday version.',
        ]),
        m('2. Couch Stretch — ' + p.hold + ' × 2 each side', [
          'Glute squeezed, tailbone tucked. Two rounds per side today.',
        ]),
        m('3. 90/90 Hip Switches — 10 slow reps', [
          'Sit in 90/90, rotate knees floor to floor without using hands.',
          'Keeps hip rotation honest so the pelvis is not the only thing that moves.',
        ]),
        a('4. Dead Bug — ' + p.rounds + ' × ' + p.deadbug + ' each side', [
          'Lower back flat throughout.',
        ]),
        a('5. Glute Bridge (single-leg if able) — ' + p.rounds + ' × ' + p.bridge, [
          'Tuck first, then lift. 2 sec squeeze at the top.',
        ]),
        a('6. Standing Wall Drill — ' + p.ppt, [
          'Stand with your back against a wall, heels a few inches out.',
          'Flatten your lower back into the wall using the pelvic tilt, hold, release.',
          'This is where the drill transfers into how you actually stand all day.',
        ]),
        a('7. Hamstring Curl or Nordic Negative — 2 × 8', [
          'Hamstrings are already lengthened by the tilt — they need STRENGTH, not more stretching.',
          'Slider curls, band curls, or slow Nordic negatives all work.',
        ]),
      ],
    };
  }

  function aptWeek(wk) {
    return [
      { label: 'Monday — Mobility',    exercises: routineA(wk).exercises },
      { label: 'Tuesday — Activation', exercises: routineB(wk).exercises },
      { label: 'Wednesday — Mobility', exercises: routineA(wk).exercises },
      { label: 'Thursday — Activation',exercises: routineB(wk).exercises },
      { label: 'Friday — Mobility',    exercises: routineA(wk).exercises },
      { label: 'Saturday — Activation',exercises: routineB(wk).exercises },
      { label: 'Sunday — Full Reset',  exercises: routineC(wk).exercises },
    ];
  }

  const program = {
    id: 'apt_daily',
    name: 'Anterior Pelvic Tilt Fix',
    subtitle: 'Daily · 5-10 min · Mobility + Activation',
    color: '#14b8a6',
    emoji: '🧘',
    daysPerWeek: 7,
    pattern: 'Daily',
    weeks: [
      { weekNum:1, blockLabel:'Daily Routine', label:'Week 1 — Learn the Position',
        note:'Priority this week is the posterior pelvic tilt itself. If you cannot flatten your lower back into the floor on demand, nothing else here will work. Mild anterior tilt is extremely common and not automatically a problem — do this for how you move and feel, not for a number.',
        days: aptWeek(1) },
      { weekNum:2, blockLabel:'Daily Routine', label:'Week 2 — Build the Holds',
        note:'Longer stretch holds, more activation reps. Consistency beats intensity — 6 honest minutes daily beats 30 minutes twice a week.',
        days: aptWeek(2) },
      { weekNum:3, blockLabel:'Daily Routine', label:'Week 3 — Add Tension',
        note:'Holds go to 45 sec and the pelvic tilt drill to 8 sec. Start single-leg glute bridges if 20 reps feel easy.',
        days: aptWeek(3) },
      { weekNum:4, blockLabel:'Daily Routine', label:'Week 4 — Consolidate',
        note:'Three rounds of the activation work and 60 sec stretch holds. After this week, restart at Week 1 with the harder progressions — this is a rolling 4-week loop, not a finish line.',
        days: aptWeek(4) },
    ],
  };

  if (window.WORKOUT_DATA && Array.isArray(window.WORKOUT_DATA.programs)) {
    const list = window.WORKOUT_DATA.programs.filter(p => p.id !== 'apt_daily');
    const i = list.findIndex(p => p.id === 'fatloss_4day');
    list.splice(i >= 0 ? i + 1 : 0, 0, program);   // sit directly under the 4-Day card
    window.WORKOUT_DATA.programs = list;
  }
})();
