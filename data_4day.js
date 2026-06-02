// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — 5th Program: 4-Day Strength + Fat Loss (cardio at end)
//  Loaded after data.js and data_tba.js; appends a new program onto
//  window.WORKOUT_DATA.programs.
//  Single weekly template (Mon / Tue / Wed / Thu) + 3 rest days.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  const s  = (title, notes=[]) => ({ type:'strength',     title, notes });
  const r  = (title, notes=[]) => ({ type:'run',          title, notes });
  const c  = (title, notes=[]) => ({ type:'conditioning', title, notes });
  const re = ()                => ({ type:'rest',         title:'Rest & Recovery', notes:[] });

  // ── MONDAY — Lower Power + Upper Push/Pull + Chest + Abs (70 min) ────────
  const monday = {
    label: 'Monday — Lower Power + Upper Push/Pull + Chest + Abs',
    exercises: [
      s('Plyometric Warm-up (5 min)', [
        'Jump squats: 2 × 6',
        'Push-up to shoulder tap: 2 × 5 each side',
        'Lateral bounds: 2 × 5 each side',
      ]),
      c('Sprints: 6 × 10m (6 min)', [
        'Max effort, full recovery between reps',
      ]),
      s('Squats: 3 × 5 @ 8.5/10 intensity (8 min)', [
        'Heavy working sets',
        'Rest 2-3 min between sets',
      ]),
      s('Superset A (2 Rounds, 60 sec rest) — 12 min', [
        'A1. Lat Pulldown: 2 × 6-8 @ 8/10',
        'A2. Push Press: 2 × 5-6 @ 8/10',
      ]),
      s('Superset B (2 Rounds, 60 sec rest) — 10 min', [
        'B1. Incline Dumbbell Press: 2 × 6-8',
        'B2. Chest-supported Row: 2 × 8',
      ]),
      s('Ab Work (1 Round) — 2 min', [
        'Ab wheel rollouts: 1 × 6-8',
        'Weighted cable crunches: 1 × 10-12',
      ]),
      c('Cardio Finisher (30 min)', [
        'KB swing finisher: 30 swings (2 min)',
        'Incline walk: 25 min (15-20% incline)',
      ]),
    ],
  };

  // ── TUESDAY — Lower Plyometric + Upper Push/Pull (70 min) ────────────────
  const tuesday = {
    label: 'Tuesday — Lower Plyometric + Upper Push/Pull',
    exercises: [
      s('Plyometric Warm-up (5 min)', [
        'High knees: 1 × 20m',
        'Bounding: 1 × 20m',
        'Tuck jumps: 2 × 5',
      ]),
      c('Single-leg hops: 5 × 8 (4 min)', [
        'Focus on max height and clean landings',
      ]),
      c('Max effort jumps: 15 reps (3 min)', [
        'Full recovery between reps',
      ]),
      s('Superset A (2 Rounds, 60 sec rest) — 12 min', [
        'A1. Military Press: 2 × 5-6',
        'A2. Weighted Pull-ups or Lat Pulldown: 2 × 5-6',
      ]),
      s('Superset B (1 Round) — 5 min', [
        'B1. Push-ups (weighted or decline): 1 × 8-10',
        'B2. Dumbbell floor press: 1 × 8',
      ]),
      s('Superset C (2 Rounds) — 6 min', [
        'C1. Landmine rotations: 2 × 8 each side',
        'C2. Cable fly: 2 × 8-10',
      ]),
      c('Cardio (30 min)', [
        'Threshold intervals: 3 min on / 1 min off × 5 sets (20 min)',
        'Burpees: 2 × 6 (2 min)',
        'Easy walk: 8 min',
      ]),
    ],
  };

  // ── WEDNESDAY — Long Run Day (70 min) ────────────────────────────────────
  const wednesday = {
    label: 'Wednesday — Long Run Day',
    exercises: [
      s('Strength / Mobility Work (15-20 min)', [
        'Dynamic stretching',
        'Foam rolling',
        'Core activation (bird dogs, glute bridges)',
      ]),
      r('Long Run: 45-50 min @ easy/moderate pace', [
        'Conversational effort, Zone 2 cardio',
        'HR around 120-140 bpm',
        'Focus on steady fat loss work',
      ]),
    ],
  };

  // ── THURSDAY — Lower Strength + Upper Pull/Chest + Abs (70 min) ──────────
  const thursday = {
    label: 'Thursday — Lower Strength + Upper Pull/Chest + Abs',
    exercises: [
      s('Plyometric Warm-up (5 min)', [
        'Jump lunges: 2 × 5 each leg',
        'Box jumps: 2 × 3',
        'Light jump rope: 1 × 15',
      ]),
      c('Single-leg hops: 5 × 5 (4 min)', [
        'Max height, clean landings',
      ]),
      s('RDL or Deadlift: 3 × 5 @ 8.5/10 (8 min)', [
        'Heavy working sets',
        'Rest 2-3 min between sets',
      ]),
      s('Superset A (2 Rounds, 75 sec rest) — 14 min', [
        'A1. Bench Press: 2 × 5-8 @ 8/10',
        'A2. Pendulum Row: 2 × 6-8',
      ]),
      s('Superset B (2 Rounds, 60 sec rest) — 10 min', [
        'B1. Dumbbell Bench Press: 2 × 8',
        'B2. Close-grip Push-ups: 2 × 8-10',
      ]),
      s('Ab Work (1 Round) — 2 min', [
        'Cable wood chops: 1 × 8 each side',
        'Decline sit-ups: 1 × 10',
      ]),
      c('Cardio Finisher (30 min)', [
        'Jump rope finisher: 50 doubles (2 min)',
        'Incline walk: 25 min (15% incline)',
      ]),
    ],
  };

  const week1Days = [
    monday,
    tuesday,
    wednesday,
    thursday,
    { label: 'Friday — Rest',   exercises:[re()] },
    { label: 'Saturday — Rest', exercises:[re()] },
    { label: 'Sunday — Rest',   exercises:[re()] },
  ];

  const program = {
    id: 'fatloss_4day',
    name: '4-Day Strength + Fat Loss',
    subtitle: '4 days/week · Strength + Cardio at End',
    color: '#E07B00',
    emoji: '🔥',
    weeks: [
      {
        weekNum: 1,
        blockLabel: 'Weekly Template',
        label: 'Weekly Template',
        note: 'Repeatable 4-day week. ~70 min per session. All cardio/conditioning moved to the end of each session. Total weekly commitment: ~280 min (4.7 hrs).',
        days: week1Days,
      },
    ],
  };

  if (window.WORKOUT_DATA && Array.isArray(window.WORKOUT_DATA.programs)) {
    window.WORKOUT_DATA.programs.push(program);
  }
})();
