// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — 4-Day Strength + Fat Loss — CYCLE 2
//  Same architecture as Cycle 1 (12 weeks, 3 blocks of 4, week 4 = deload,
//  identical sets / reps / RPE / timings / cardio structure) but every lift is
//  a fresh variation of the same movement pattern and muscle group.
//
//  EQUIPMENT CONSTRAINTS THIS CYCLE:
//    · Smith machine only — no free-weight barbell, no trap bar, no landmine
//    · Dumbbells cap at 22 kg
//    · Available: cables + lat pulldown, pull-up bar, leg press / hack squat,
//      kettlebells, treadmill, rower
//    · NOT available: sled, battle ropes, assault bike, med ball
//
//  Because 22 kg is light for pressing and rowing, every dumbbell slot uses a
//  density tool instead of load — tempo, pauses, deficits, 1.5-reps or
//  unilateral work — so the target RPE is still reachable.
//
//  All cardio/conditioning sits at the END of each session.
//  Loaded after data.js / data_tba.js; placed FIRST in the program list.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  const s  = (title, notes=[]) => ({ type:'strength',     title, notes });
  const r  = (title, notes=[]) => ({ type:'run',          title, notes });
  const c  = (title, notes=[]) => ({ type:'conditioning', title, notes });
  const re = ()                => ({ type:'rest',         title:'Rest & Recovery', notes:[] });

  const intensityNote = {
    base:   'Establish working weight. Last set ~2 reps in reserve.',
    mid:    'Add 2.5-5 kg vs Week 1. Last set 1-2 reps in reserve.',
    peak:   'Peak weight of the block. Last set 0-1 reps in reserve.',
    deload: 'Drop to 60-70% of peak weight. Smooth, controlled, full ROM.',
  };
  const rpe = { base:'8/10', mid:'8.5/10', peak:'9/10', deload:'60-70%' };

  const SQUAT_ALT = 'Leg press or hack squat is a fine swap if the fixed Smith bar path bothers your knees or lower back.';
  const DB_CAP    = 'Dumbbells cap at 22 kg — the tempo/pause is what makes this hard, not the load. Do not rush it.';

  // ── CYCLE 2 EXERCISE LIBRARY (Smith + 22 kg DB + cables + pull-up bar) ────
  const lib = {
    1: {
      squat:        'Smith Machine Squat',
      vertPull:     'Close-grip V-bar Pulldown',
      vertPush:     'Smith Machine Push Press',
      incPress:     'Low-incline Dumbbell Press (15-30°)',
      cssRow:       'Chest-supported Dumbbell Row (incline bench)',
      abRoll:       'Tall-kneeling Cable Rollout (rope overhead)',
      abCrunch:     'Weighted Sit-up (plate on chest)',
      ohPress:      'Seated Smith Machine Overhead Press',
      vertPullHvy:  'Neutral-grip Pull-ups (weighted if able)',
      pushVar:      'Deficit Push-ups (hands on dumbbells)',
      floorPress:   'Dumbbell Floor Press',
      rotation:     'Half-kneeling Cable Chop',
      fly:          'Low-to-high Cable Fly',
      hinge:        'Smith Machine Romanian Deadlift',
      bench:        'Smith Machine Bench Press (feet up on bench)',
      pendRow:      'Smith Machine Bent-over Row',
      dbBench:      'Neutral-grip Dumbbell Bench Press',
      cgPush:       'Tempo Close-grip Push-ups (3s down)',
      abChop:       'Half-kneeling Cable Lift (low-to-high)',
      abSit:        'Reverse Crunch (hips off bench)',
      tueIntervals: 'Rower threshold intervals: 3 min on / 1 min off × 5 sets (20 min)',
      monFinish:    'Rower Sprint Finisher: 4 × 250m (60s rest)',
      thuFinish:    'Kettlebell Swing Finisher: 3 × 15 (heavy)',
      longRun:      '45-50 min',
      dbCue:        DB_CAP,
    },
    2: {
      squat:        'Tempo Smith Machine Squat (3s eccentric)',
      vertPull:     'Half-kneeling Single-arm Lat Pulldown',
      vertPush:     'Dumbbell Push Press',
      incPress:     'Incline Dumbbell Press (2s pause at chest)',
      cssRow:       'Seated Cable Row (wide grip)',
      abRoll:       'Ab Wheel Rollouts',
      abCrunch:     'Kneeling Cable Crunch (heavy)',
      ohPress:      'Standing Dumbbell Overhead Press (3s eccentric)',
      vertPullHvy:  'Wide-grip Pull-ups (weighted if able)',
      pushVar:      'Feet-elevated Push-ups (weighted)',
      floorPress:   'Single-arm Dumbbell Floor Press',
      rotation:     'Standing Cable Rotational Press',
      fly:          'Incline Dumbbell Fly',
      hinge:        'Smith Machine Deadlift (from pins, mid-shin)',
      bench:        'Tempo Smith Machine Bench Press (3s down)',
      pendRow:      'Single-arm Dumbbell Row (2s pause at top)',
      dbBench:      'Dumbbell Squeeze Press',
      cgPush:       'Deficit Diamond Push-ups',
      abChop:       'Standing Cable Anti-rotation Hold',
      abSit:        'Hanging Knee Raises',
      tueIntervals: 'Rower threshold intervals: 4 min on / 2 min off × 4 sets (24 min)',
      monFinish:    'Rower Sprint Finisher: 5 × 250m (60s rest)',
      thuFinish:    'Single-arm KB Swing Finisher: 3 × 12 each side',
      longRun:      '50 min',
      dbCue:        DB_CAP,
    },
    3: {
      squat:        'Smith Machine Anderson Squat (from pins)',
      vertPull:     'Reverse-grip Lat Pulldown',
      vertPush:     'Smith Machine Push Press (dead-stop from pins)',
      incPress:     'Incline Dumbbell Press (1.5 reps)',
      cssRow:       'Chest-supported Dumbbell Row (3s eccentric)',
      abRoll:       'Weighted Hollow Body Rocks',
      abCrunch:     'Weighted Decline Crunch (plate overhead)',
      ohPress:      'Seated Dumbbell Z-Press (on floor)',
      vertPullHvy:  'Weighted Chin-ups (heavy)',
      pushVar:      'Weighted Deficit Push-ups (plate on back)',
      floorPress:   'Dumbbell Floor Press (3s down, 2s pause)',
      rotation:     'Explosive Cable Rotational Chop',
      fly:          'Decline Dumbbell Fly',
      hinge:        'Smith Machine Rack Pull (just below knee)',
      bench:        'Smith Machine Pin Press (from mid-chest)',
      pendRow:      'Smith Machine Pendlay Row (dead-stop each rep)',
      dbBench:      'Dumbbell Bench Press (2s pause)',
      cgPush:       'Weighted Close-grip Push-ups (plate on back)',
      abChop:       'Half-kneeling Pallof Press with Overhead Reach',
      abSit:        'Hanging Leg Raise to Toes-to-Bar',
      tueIntervals: '6 × 800m @ tempo pace (90 sec rest between)',
      monFinish:    'Rower Sprint Finisher: 6 × 250m (45s rest)',
      thuFinish:    'KB Complex: 4 × (10 swings + 10 goblet squats)',
      longRun:      '55 min',
      dbCue:        DB_CAP,
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
          SQUAT_ALT,
        ]),
        s('Superset A (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '6' : '12') + ' min', [
          'A1. ' + ex.vertPull + ': ' + (dl ? '1' : '2') + ' × 6-8 @ ' + rpe[intensity],
          'A2. ' + ex.vertPush + ': ' + (dl ? '1' : '2') + ' × 5-6 @ ' + rpe[intensity],
        ]),
        s('Superset B (' + (dl ? '1 Round' : '2 Rounds') + ', 60s rest) — ' + (dl ? '5' : '10') + ' min', [
          'B1. ' + ex.incPress + ': ' + (dl ? '1' : '2') + ' × 6-8',
          'B2. ' + ex.cssRow + ': ' + (dl ? '1' : '2') + ' × 8',
          ex.dbCue,
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
          'Light jump rope or 60 sec easy row: 1 × 15',
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
          ex.dbCue,
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
    subtitle: 'Cycle 2 · Smith + DB · Cardio at End',
    color: '#E07B00',
    emoji: '🔥',
    daysPerWeek: 4,
    pattern: '3+1',
    weeks: [
      { weekNum:1,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Base Weights',
        note:'New cycle, built around the Smith machine and 22 kg dumbbells. Re-establish working weights on Smith Squat, Smith RDL, Smith Bench and Seated Smith OHP. Where dumbbells are the tool, tempo and pauses do the work that load cannot.',
        days: flWeek(1, 'base') },
      { weekNum:2,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Progress',
        note:'Add 2.5-5 kg vs Week 1 on the Smith lifts. Dumbbell slots stay at 22 kg — add a rep or slow the eccentric instead.',
        days: flWeek(1, 'mid') },
      { weekNum:3,  blockLabel:'Block 1 — Foundation',  label:'Foundation — Peak',
        note:'Heaviest week of Block 1. Push the Smith compounds to 0-1 RIR on the last set.',
        days: flWeek(1, 'peak') },
      { weekNum:4,  blockLabel:'Block 1 — Foundation',  label:'Recovery Week',
        note:'Drop to 60-70% of Week 3 weight. Reduced sets and conditioning volume. Rest is training.',
        days: flWeek(1, 'deload') },

      { weekNum:5,  blockLabel:'Block 2 — Development', label:'Development — Re-establish',
        note:'Tempo block. 3-second eccentrics on Smith Squat and Smith Bench, pauses on the dumbbell work. Loads drop, effort does not — that is the whole point.',
        days: flWeek(2, 'base') },
      { weekNum:6,  blockLabel:'Block 2 — Development', label:'Development — Progress',
        note:'Add 2.5-5 kg to the Smith lifts. Hold the tempo honestly — count it out.',
        days: flWeek(2, 'mid') },
      { weekNum:7,  blockLabel:'Block 2 — Development', label:'Development — Peak',
        note:'Peak intensity for Block 2. Conditioning at maximum volume.',
        days: flWeek(2, 'peak') },
      { weekNum:8,  blockLabel:'Block 2 — Development', label:'Recovery Week',
        note:'Full deload. Recovery before the final block.',
        days: flWeek(2, 'deload') },

      { weekNum:9,  blockLabel:'Block 3 — Performance', label:'Performance — Build',
        note:'Partial-range overload block — the Smith pins make Anderson Squats, Rack Pulls and Pin Presses easy to set up. Heaviest absolute loads of the cycle. Dumbbell slots switch to 1.5-reps and long pauses.',
        days: flWeek(3, 'base') },
      { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance — Progress',
        note:'Add 2.5-5 kg. Conditioning rounds at maximum volume.',
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
    window.WORKOUT_DATA.programs.unshift(program);   // pin to the top of the list
  }
})();
