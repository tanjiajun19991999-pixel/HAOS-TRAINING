// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — 5th Program: 4-Day Strength + Fat Loss
//  12-week periodised program with 3 blocks of 4 weeks (week 4 of each block
//  is a recovery / deload week). All cardio/conditioning sits at the END of
//  each session. Exercises vary slightly between blocks but always target the
//  same muscle group and movement pattern.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  const s  = (title, notes=[]) => ({ type:'strength',     title, notes });
  const r  = (title, notes=[]) => ({ type:'run',          title, notes });
  const c  = (title, notes=[]) => ({ type:'conditioning', title, notes });
  const re = ()                => ({ type:'rest',         title:'Rest & Recovery', notes:[] });

  const intensityNote = {
    base:   'Establish working weight. Last set ~2 reps in reserve.',
    mid:    'Add 5-10 lbs vs Week 1. Last set 1-2 reps in reserve.',
    peak:   'Peak weight of the block. Last set 0-1 reps in reserve.',
    deload: 'Drop to 60-70% of peak weight. Smooth, controlled, full ROM.',
  };
  const rpe = { base:'8/10', mid:'8.5/10', peak:'9/10', deload:'60-70%' };

  const lib = {
    1: {
      squat:        'Back Squat',
      vertPull:     'Lat Pulldown',
      vertPush:     'Push Press',
      incPress:     'Incline Dumbbell Press',
      cssRow:       'Chest-supported Row',
      abRoll:       'Ab Wheel Rollouts',
      abCrunch:     'Weighted Cable Crunches',
      ohPress:      'Military Press',
      vertPullHvy:  'Weighted Pull-ups (or Lat Pulldown)',
      pushVar:      'Weighted Push-ups',
      floorPress:   'Dumbbell Floor Press',
      rotation:     'Landmine Rotations',
      fly:          'Cable Fly',
      hinge:        'Romanian Deadlift',
      bench:        'Bench Press',
      pendRow:      'Pendulum Row',
      dbBench:      'Dumbbell Bench Press',
      cgPush:       'Close-grip Push-ups',
      abChop:       'Cable Wood Chops',
      abSit:        'Decline Sit-ups',
      tueIntervals: 'Threshold intervals: 3 min on / 1 min off × 5 sets (20 min)',
      monFinish:    'KB Swing Finisher: 30 swings',
      thuFinish:    'Jump Rope Finisher: 50 doubles',
      longRun:      '45-50 min',
    },
    2: {
      squat:        'Front Squat',
      vertPull:     'Wide-grip Lat Pulldown',
      vertPush:     'Seated Dumbbell Shoulder Press',
      incPress:     'Flat Dumbbell Press',
      cssRow:       'Seal Row',
      abRoll:       'Hanging Knee Raises',
      abCrunch:     'Weighted Cable Crunches',
      ohPress:      'Push Press (strict → jerk on last rep)',
      vertPullHvy:  'Chin-ups (weighted if able)',
      pushVar:      'Decline Push-ups',
      floorPress:   'Neutral-grip DB Floor Press',
      rotation:     'Landmine 180s',
      fly:          'Pec Deck Fly',
      hinge:        'Conventional Deadlift',
      bench:        'Close-grip Bench Press',
      pendRow:      'Seated Cable Row',
      dbBench:      'Incline Dumbbell Press',
      cgPush:       'Diamond Push-ups',
      abChop:       'Pallof Press',
      abSit:        'Hanging Leg Raises',
      tueIntervals: 'Threshold intervals: 4 min on / 2 min off × 4 sets (24 min)',
      monFinish:    'Single-arm KB Swing Finisher: 20 each side',
      thuFinish:    'Jump Rope Finisher: 70 doubles',
      longRun:      '50 min',
    },
    3: {
      squat:        'Pause Back Squat (3 sec pause)',
      vertPull:     'Neutral-grip Lat Pulldown',
      vertPush:     'Behind-the-neck Push Press',
      incPress:     'Decline Dumbbell Press',
      cssRow:       'Pendlay Row',
      abRoll:       'Weighted Ab Wheel Rollouts',
      abCrunch:     'Decline Weighted Crunches',
      ohPress:      'Push Jerk',
      vertPullHvy:  'Weighted Pull-ups',
      pushVar:      'Plyometric Push-ups',
      floorPress:   'Heavy DB Floor Press',
      rotation:     'Hanging Windshield Wipers',
      fly:          'High-to-low Cable Fly',
      hinge:        'Deficit Deadlift (1-2" deficit)',
      bench:        'Pause Bench Press (2 sec pause)',
      pendRow:      'T-bar Row',
      dbBench:      'Spoto Press',
      cgPush:       'Archer Push-ups',
      abChop:       'Pallof Press (anti-rotation hold)',
      abSit:        'Dragon Flag Negatives',
      tueIntervals: '5 × 1 km @ tempo pace (2 min rest between)',
      monFinish:    'Heavy KB Swing Finisher: 40 swings',
      thuFinish:    'Jump Rope Finisher: 100 doubles',
      longRun:      '55 min',
    },
  };

  const setsOf = (intensity, normal, deload) => intensity === 'deload' ? deload : normal;

  function flMonday(block, intensity) {
    const ex = lib[block];
    const dl = intensity === 'deload';
    return {
      label: 'Monday — Lower Power + Upper Push/Pull + Chest + Abs',
      exercises: [
        s('Plyometric Warm-up (5 min)', [
          'Jump squats: 2 × 6',
          'Push-up to shoulder tap: 2 × 5 each side',
          'Lateral bounds: 2 × 5 each side',
        ]),
        c(dl ? 'Sprints: 4 × 10m (4 min)' : 'Sprints: 6 × 10m (6 min)', [
          dl ? 'Submax effort. Focus on clean acceleration.' : 'Max effort. Full recovery between reps.',
        ]),
        s(ex.squat + ': ' + setsOf(intensity, '3 × 5', '2 × 6') + ' @ ' + rpe[intensity], [
          intensityNote[intensity],
          'Rest 2-3 min between sets.',
        ]),
        s('Superset A (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '6' : '12') + ' min', [
          'A1. ' + ex.vertPull + ': ' + (dl ? '1' : '2') + ' × 6-8 @ ' + rpe[intensity],
          'A2. ' + ex.vertPush + ': ' + (dl ? '1' : '2') + ' × 5-6 @ ' + rpe[intensity],
        ]),
        s('Superset B (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '5' : '10') + ' min', [
          'B1. ' + ex.incPress + ': ' + (dl ? '1' : '2') + ' × 6-8',
          'B2. ' + ex.cssRow + ': ' + (dl ? '1' : '2') + ' × 8',
        ]),
        s('Ab Work (1 Round) — 2 min', [
          ex.abRoll + ': 1 × ' + (dl ? '5' : '6-8'),
          ex.abCrunch + ': 1 × ' + (dl ? '8' : '10-12'),
        ]),
        c('Cardio Finisher (' + (dl ? '20' : '30') + ' min)', [
          ex.monFinish + ' (' + (dl ? '1.5' : '2') + ' min)',
          'Incline walk: ' + (dl ? '18' : '25') + ' min (' + (dl ? '10-12' : '15-20') + '% incline)',
        ]),
      ],
    };
  }

  function flTuesday(block, intensity) {
    const ex = lib[block];
    const dl = intensity === 'deload';
    const cardioNotes = dl
      ? ['3 × 800m @ easy pace (1 min rest)', 'Easy walk: 6 min']
      : [ex.tueIntervals, 'Burpees: 2 × 6 (2 min)', 'Easy walk: 8 min'];
    return {
      label: 'Tuesday — Lower Plyometric + Upper Push/Pull',
      exercises: [
        s('Plyometric Warm-up (5 min)', [
          'High knees: 1 × 20m',
          'Bounding: 1 × 20m',
          'Tuck jumps: 2 × 5',
        ]),
        c('Single-leg hops: ' + (dl ? '3' : '5') + ' × 8 (' + (dl ? '3' : '4') + ' min)', [
          'Focus on max height and clean landings.',
        ]),
        c('Max effort jumps: ' + (dl ? '8' : '15') + ' reps (' + (dl ? '2' : '3') + ' min)', [
          'Full recovery between reps.',
        ]),
        s('Superset A (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '6' : '12') + ' min', [
          'A1. ' + ex.ohPress + ': ' + (dl ? '1' : '2') + ' × 5-6 @ ' + rpe[intensity],
          'A2. ' + ex.vertPullHvy + ': ' + (dl ? '1' : '2') + ' × 5-6 @ ' + rpe[intensity],
          intensityNote[intensity],
        ]),
        s('Superset B (1 Round) — 5 min', [
          'B1. ' + ex.pushVar + ': 1 × 8-10',
          'B2. ' + ex.floorPress + ': 1 × 8',
        ]),
        s('Superset C (' + (dl ? '1 Round' : '2 Rounds') + ') — ' + (dl ? '3' : '6') + ' min', [
          'C1. ' + ex.rotation + ': ' + (dl ? '1' : '2') + ' × 8 each side',
          'C2. ' + ex.fly + ': ' + (dl ? '1' : '2') + ' × 8-10',
        ]),
        c('Cardio (' + (dl ? '20' : '30') + ' min)', cardioNotes),
      ],
    };
  }

  function flWednesday(block, intensity) {
    const ex = lib[block];
    const dl = intensity === 'deload';
    return {
      label: 'Wednesday — Long Run Day',
      exercises: [
        s('Strength / Mobility Work (15-20 min)', [
          'Dynamic stretching',
          'Foam rolling',
          'Core activation (bird dogs, glute bridges)',
        ]),
        r('Long Run: ' + (dl ? '30 min' : ex.longRun) + ' @ easy/moderate pace', [
          'Conversational effort, Zone 2 cardio.',
          'HR around 120-140 bpm.',
          dl ? 'Recovery week — keep it relaxed, no pushing.' : 'Focus on steady fat loss work.',
        ]),
      ],
    };
  }

  function flThursday(block, intensity) {
    const ex = lib[block];
    const dl = intensity === 'deload';
    return {
      label: 'Thursday — Lower Strength + Upper Pull/Chest + Abs',
      exercises: [
        s('Plyometric Warm-up (5 min)', [
          'Jump lunges: 2 × 5 each leg',
          'Box jumps: 2 × 3',
          'Light jump rope: 1 × 15',
        ]),
        c('Single-leg hops: ' + (dl ? '3' : '5') + ' × 5 (' + (dl ? '3' : '4') + ' min)', [
          'Max height. Clean landings.',
        ]),
        s(ex.hinge + ': ' + setsOf(intensity, '3 × 5', '2 × 6') + ' @ ' + rpe[intensity], [
          intensityNote[intensity],
          'Rest 2-3 min between sets.',
        ]),
        s('Superset A (' + (dl ? '1 Round' : '2 Rounds') + ', 75s rest) — ' + (dl ? '7' : '14') + ' min', [
          'A1. ' + ex.bench + ': ' + (dl ? '1' : '2') + ' × 5-8 @ ' + rpe[intensity],
          'A2. ' + ex.pendRow + ': ' + (dl ? '1' : '2') + ' × 6-8',
        ]),
        s('Superset B (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '5' : '10') + ' min', [
          'B1. ' + ex.dbBench + ': ' + (dl ? '1' : '2') + ' × 8',
          'B2. ' + ex.cgPush + ': ' + (dl ? '1' : '2') + ' × 8-10',
        ]),
        s('Ab Work (1 Round) — 2 min', [
          ex.abChop + ': 1 × ' + (dl ? '6' : '8') + ' each side',
          ex.abSit + ': 1 × ' + (dl ? '8' : '10'),
        ]),
        c('Cardio Finisher (' + (dl ? '20' : '30') + ' min)', [
          ex.thuFinish + ' (2 min)',
          'Incline walk: ' + (dl ? '18' : '25') + ' min (' + (dl ? '10-12' : '15') + '% incline)',
        ]),
      ],
    };
  }

  function flWeek(block, intensity) {
    return [
      flMonday(block, intensity),
      flTuesday(block, intensity),
      flWednesday(block, intensity),
      flThursday(block, intensity),
      { label: 'Friday — Rest',   exercises: [re()] },
      { label: 'Saturday — Rest', exercises: [re()] },
      { label: 'Sunday — Rest',   exercises: [re()] },
    ];
  }

  const program = {
    id: 'fatloss_4day',
    name: '4-Day Strength + Fat Loss',
    subtitle: '4 days/week · Strength + Cardio at End',
    color: '#E07B00',
    emoji: '🔥',
    weeks: [
      { weekNum:1,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Base Weights',
        note:'Establish working weights for Back Squat, RDL, Bench, Military Press. Form > load.',
        days: flWeek(1, 'base') },
      { weekNum:2,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Progress',
        note:'Add 5-10 lbs vs Week 1 on compound lifts. Last sets 1-2 RIR.',
        days: flWeek(1, 'mid') },
      { weekNum:3,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Peak',
        note:'Heaviest week of Block 1. Push compounds to 0-1 RIR on last set.',
        days: flWeek(1, 'peak') },
      { weekNum:4,  blockLabel:'Block 1 — Foundation',  label:'Recovery Week',
        note:'Drop to 60-70% of Week 3 weight. Reduced sets and conditioning volume. Rest is training.',
        days: flWeek(1, 'deload') },

      { weekNum:5,  blockLabel:'Block 2 — Development', label:'Development — Re-establish',
        note:'New exercise variations (Front Squat, Conventional DL, etc.). Restart slightly above Block 1 starting point.',
        days: flWeek(2, 'base') },
      { weekNum:6,  blockLabel:'Block 2 — Development', label:'Development — Progress',
        note:'Continue adding 5-10 lbs. Push last sets of every compound.',
        days: flWeek(2, 'mid') },
      { weekNum:7,  blockLabel:'Block 2 — Development', label:'Development — Peak',
        note:'Peak intensity for Block 2. Conditioning at maximum volume.',
        days: flWeek(2, 'peak') },
      { weekNum:8,  blockLabel:'Block 2 — Development', label:'Recovery Week',
        note:'Full deload. Recovery before the final block.',
        days: flWeek(2, 'deload') },

      { weekNum:9,  blockLabel:'Block 3 — Performance', label:'Performance — Build',
        note:'Advanced variations (Pause Squat, Deficit DL, Pause Bench). Start with heaviest weights used to date.',
        days: flWeek(3, 'base') },
      { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance — Progress',
        note:'Add 5-10 lbs. Conditioning rounds at maximum volume.',
        days: flWeek(3, 'mid') },
      { weekNum:11, blockLabel:'Block 3 — Performance', label:'Performance — Peak',
        note:'Highest intensity week of the program. Leave everything on the floor.',
        days: flWeek(3, 'peak') },
      { weekNum:12, blockLabel:'Block 3 — Performance', label:'Final Deload',
        note:'Active recovery. Consolidate all gains.',
        days: flWeek(3, 'deload') },
    ],
  };

  if (window.WORKOUT_DATA && Array.isArray(window.WORKOUT_DATA.programs)) {
    window.WORKOUT_DATA.programs = window.WORKOUT_DATA.programs.filter(p => p.id !== 'fatloss_4day');
    window.WORKOUT_DATA.programs.push(program);
  }
})();
