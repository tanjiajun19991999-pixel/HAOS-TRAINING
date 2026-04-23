// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — 4th Program: Total Body Aesthetic (12 weeks, fully transcribed)
//  Loaded after data.js; appends a new program onto window.WORKOUT_DATA.programs
// ─────────────────────────────────────────────────────────────────────────────
(function() {
  const s  = (title, notes=[]) => ({ type:'strength',     title, notes });
  const c  = (title, notes=[]) => ({ type:'conditioning', title, notes });
  const re = ()                => ({ type:'rest',         title:'Rest & Recovery', notes:[] });

  // ── Strength Day (Day 1 / Mon) ─────────────────────────────────────────────
  function tbaStrengthDay(wk) {
    const sets = {
      1:[4,4,3,3,4,3], 2:[4,4,3,3,4,3], 3:[5,5,4,4,4,3], 4:[2,2,2,2,2,2],
      5:[5,5,4,4,4,3], 6:[5,5,4,4,4,3], 7:[5,5,4,4,4,3],
      9:[5,5,4,4,4,3], 10:[5,5,4,4,4,3], 11:[5,5,4,4,4,3],
    }[wk];
    return {
      label: 'Day 1 (Mon) — Full Body Strength',
      exercises: [
        s('Warm Up',['10 DB curls','5 chin ups','10 TRX rows']),
        s(sets[0]+'×8 DB Chest Press @ tempo 2-1-1-0',['Rest 60s between sets','Add weight each set until final set is 2-3 reps from failure']),
        s(sets[1]+'×10 DB Row (prone on bench) @ tempo 2-1-1-0',['Rest 60s between sets','Last set 2-3 reps from failure — the transformation zone']),
        s(sets[2]+'×20 Alternating Reverse Lunges (total reps) @ tempo 2-1-1-0',['Rest 90s','Smooth tempo, full control','Last set 2-3 reps from failure']),
        s(sets[3]+'×8 Snatch Grip Deadlift @ tempo 3-1-1-0',['Rest 2 min','Controlled down + pause, explode up','Last set 2-3 reps from failure']),
        s(sets[4]+'×10 DB Lateral Raises @ tempo 3-0-1-0',['Increase weight each set until 2-3 reps from failure by the last set']),
        s(sets[5]+'×max Calf Raises @ tempo 3-1-1-0',['Rest 60s','Stop before form breaks']),
        c('Core Circuit — 30/20/10',['GHD sit-ups','Toes-to-bar']),
      ]
    };
  }

  // Special Monday replacements for deload weeks
  const week8Mon = {
    label: 'Day 1 (Mon) — Death By Dumbbells',
    exercises: [
      s('Warm Up',['2K row warm-up (easy → moderate)']),
      c('Death By Dumbbells — 12 Minute EMOM',[
        'Minute 1: 15 DB bicep curls — hold DB by side until end of minute',
        'Minute 2: 12 DB push-up to alternating DB row — hold top of plank until end',
        'Minute 3: 15 DB overhead swing — hold DB overhead until end',
      ]),
      c('Cool Down',['2K row']),
    ]
  };

  const week12Mon = {
    label: 'Day 1 (Mon) — Tight Timing',
    exercises: [
      s('Warm Up',['10 DB curls','5 chin ups','10 TRX rows']),
      c('TIGHT TIMING (10 Rounds WOD)',['10 calorie ski erg','10 strict handstand push up']),
      c('Cool Down (3 Rounds)',['10 DB row (50lb men / 35lb women)','10 DB pullovers (50lb men / 35lb women)']),
    ]
  };

  // ── Recovery Days (Tue / Thu) ──────────────────────────────────────────────
  function tbaRecoveryDay(wk) {
    if (wk <= 2) return c('30-45 Minute StairMaster / Hike',['Keep it steady (aesthetic fat-burn + recovery)']);
    if (wk <= 6) return c('45 Minute Hike',['Keep the effort level low — key for burning fat and aiding recovery']);
    if (wk === 7) return c('60 Minute Hike',['Keep the effort level low. Building endurance base for Block 3.']);
    if (wk === 8) return c('30 Minute Hike',['Short deload hike. Recovery is the priority.']);
    if (wk <= 11) return c('60 Minute Ruck (20-50lb)',[
      'Wear a vest or pack to build strength and conditioning',
      "This isn't a workout — keep the effort level low and enjoy the ride",
      'Key for burning fat and aiding recovery',
    ]);
    return c('30 Minute Ruck (20-50lb)',['Final deload. Keep it easy.']);
  }

  // ── Upper Body Day (Day 3 / Wed) ───────────────────────────────────────────
  function tbaUpperDay(wk, finisher) {
    const sets = {
      1:[4,4,3,3,4,4], 2:[4,4,3,3,4,4], 3:[5,5,4,4,4,4], 4:[2,2,2,2,2,2],
      5:[5,5,4,4,4,4], 6:[5,5,4,4,4,4], 7:[5,5,4,4,4,4], 8:[3,3,2,2,3,3],
      9:[5,5,4,4,4,4], 10:[5,5,4,4,4,4], 11:[5,5,4,4,4,4],
    }[wk];
    return {
      label: 'Day 3 (Wed) — Upper Body',
      exercises: [
        s(sets[0]+'×8 Weighted Pull-Up @ tempo 2-1-2-1',['Rest 60s between sets']),
        s(sets[1]+'×10 Dips @ tempo 2-1-1-0',['Rest 60s between sets']),
        s(sets[2]+'×12 Barbell Thruster @ tempo 1-0-1',['Rest 90s between sets']),
        s(sets[3]+'×15 Weighted Back Extensions @ tempo 2-1-1-0',['Rest 60s between sets']),
        s(sets[4]+'×10 Barbell Curl @ tempo 2-1-2-1',['Rest 45s between sets']),
        s(sets[5]+'×10 Overhead Tricep Extension @ tempo 3-1-1-0',['Rest 60s between sets']),
        finisher,
      ]
    };
  }

  const week12Wed = {
    label: 'Day 3 (Wed) — Skull Buster',
    exercises: [
      s('1 Mile Warm Up Run',[]),
      c('SKULL BUSTER — 4 Rounds In Weighted Vest',[
        '15 KB clean and jerk (50lb women / 35lb men)',
        '8 strict chin up',
        '400m run (do this on a hill if possible)',
      ]),
      c('1 Mile Cool Down Run',[]),
    ]
  };

  // ── Heavy Metal Day (Day 5 / Fri) ──────────────────────────────────────────
  function tbaHeavyMetalDay(wk, core) {
    let exercises, rounds;
    if (wk <= 4) {
      rounds = wk === 4 ? 3 : 4;
      exercises = [
        '5 Deadlift (heavy, 70-80% max)',
        '5 Bench Press (heavy, 70-80% max)',
        '5 Front Squat (heavy, 70-80% max)',
        '5 Barbell Row (heavy, 70-80% max)',
        '3 min rest between rounds',
      ];
    } else if (wk <= 7) {
      rounds = 4;
      exercises = [
        '5 Power Clean (heavy, 70-80% max)',
        '5 Shoulder Press (heavy, 70-80% max)',
        '12 Alternating Weighted Lunges (heavy, 70-80% max)',
        '5 Weighted Chin Ups (heavy, 70-80% max)',
        '3 min rest between rounds',
      ];
    } else {
      rounds = 5;
      exercises = [
        '5 Banded Deadlift (heavy, 70-80% max)',
        '5 Clean and Jerk (heavy, 70-80% max)',
        '5 DB Chest Press (heavy, 70-80% max)',
        '5 DB Row (heavy, 70-80% max)',
        '3 min rest between rounds',
      ];
    }
    return {
      label: 'Day 5 (Fri) — Heavy Metal + Core',
      exercises: [
        c('Heavy Metal Circuit ('+rounds+' Rounds)', exercises),
        core,
      ]
    };
  }

  const week8Fri = {
    label: 'Day 5 (Fri) — Deload WODs',
    exercises: [
      s('Warm Up',['50 banded good mornings','50 push ups']),
      c('WOD — 15/12/9',['Deadlift (315lbs men / 225lbs women)','Weighted dips @ 30% body weight']),
      c('WOD — 15/12/9',['Front Squat (215lbs men / 165lbs women)','Barbell Row (215lbs men / 165lbs women)']),
    ]
  };

  const week12Fri = {
    label: 'Day 5 (Fri) — Fran',
    exercises: [
      s('Warm Up (3 Rounds)',['15 air squats','10 push ups']),
      c('Fran — 21/15/9',['Thruster (95lb men / 65lb women)','Pull ups']),
      c('10 Minute Cardio Cool Down',['Pick any machine of choice']),
    ]
  };

  // ── Weekly upper-day finishers ─────────────────────────────────────────────
  const upperFinisher = {
    1:  c('30/20/10 Sprint',['Double KB snatch 50lb men / 35lb women','Calorie row']),
    2:  c('30/20/10 Sprint',['Double KB snatch 50lb men / 35lb women','Calorie row']),
    3:  c('30/25/20/15/10 Cal Assault Bike',['10 burpee pull ups between each round']),
    4:  c('HIIT WOD (5 Rounds)',['20 wall balls (30lb men / 20lb women)','10 pull ups']),
    5:  c('HIIT WOD — 10-1 Descending Rep Ladder',['DB shoulder press','Chin ups']),
    6:  c('HIIT WOD — 30/20/10',['Sumo deadlift high pull (135lbs men / 95lbs women)','Push press (135lbs men / 95lbs women)']),
    7:  c('HIIT WOD — 8 Minute AMRAP',['5 Deadlift (315lbs men / 225lbs women)','20 wall balls','Then: 4 minute max rep burpee box jump over']),
    8:  c('Hill Sprints (6 Rounds)',['30 second max effort hill sprint (10-15% grade)']),
    9:  c('HIIT WOD — 10 Minute AMRAP',['Max rep bench press at body weight (~205)','Every time you break: 20 box jump — step down each rep']),
    10: c('12/15/9 WOD',['Deadlift (225lb men / 155lb women)','Bench press (155lb men / 115lb women)','Calorie row']),
    11: c('HIIT WOD — 15 Minute AMRAP',['5 C2B pull ups','10 push ups','15 air squats','40 double unders']),
  };

  // ── Weekly Heavy Metal core work ───────────────────────────────────────────
  const coreByWk = {
    1:  c('Core Circuit (4 Rounds)',['30s bicycle crunches','30s max sit-ups','30s leg raises','30s rest']),
    2:  c('Core Circuit (4 Rounds)',['30s bicycle crunches','30s max sit-ups','30s leg raises','30s rest']),
    3:  c('100 GHD Sit Ups For Time',['Every time you break: 15 toes-to-bar']),
    4:  c('Core Circuit',['100 weighted sit ups (35lb men / 20lb women)','100 weighted russian twists (35lb men / 20lb women)']),
    5:  c('100 GHD Sit Ups For Time',['Every time you break: 15 toes-to-bar']),
    6:  c('Core WOD — 40/30/20/10',['GHD sit up','Back extensions','Complete 50 bicycle crunches after each number bracket']),
    7:  c('Core WOD (4 Rounds)',['90 second plank','60 second wall sit','30 second max toes-to-bar']),
    9:  c('Core WOD (3 Rounds)',['Max time plank hold','60 second rest between rounds']),
    10: c('Core Work (4 Rounds)',['20 weighted cable crunches','20 weighted hanging knee raises']),
    11: c('Core Work — 100 GHD Sit Ups',['Every time you break: complete 10 pull ups and 20 push ups']),
  };

  // ── Day 6 (Sat) Conditioning WODs ──────────────────────────────────────────
  const wodW1 = {
    label:'Day 6 (Sat) — Conditioning',
    exercises:[
      s('Warm Up',['3×15 KB overhead swings — build weight each set','15 cals on the bike between sets']),
      c('100 Calorie Challenge',['100 cal row','100 cal bike','100 cal SkiErg','EMOM: 5 KB overhead swings 70lb men / 50lb women (every minute)']),
      c('Cool Down',['10-minute walk']),
    ]
  };
  const wodW2 = {
    label:'Day 6 (Sat) — Row Bar Chipper',
    exercises:[
      c('Row Bar Chipper (For Time)',['2000m row','50 pull-ups','1000m row','30 C2B pull-ups','500m row','20 chin-ups','250m row','10 bar muscle-ups']),
      c('Cool Down',['10-minute walk']),
    ]
  };
  const wodW3 = {
    label:'Day 6 (Sat) — Row Test',
    exercises:[
      c('Row Test — 5000m For Time',['30s hard row / 30s rest','Try to complete 5000m in under 30 minutes','Completely stop rowing during rest','Sprint as hard as possible during work rounds']),
      c('Cool Down',['10-minute walk']),
    ]
  };
  const wodW4 = { label:'Day 6 (Sat) — Rest', exercises:[re()] };
  const wodW5 = { label:'Day 6 (Sat) — 60 Minute Hike',
    exercises:[c('60 Minute Hike',['Keep the effort level low and enjoy the ride','Key for burning fat and aiding recovery'])] };
  const wodW6 = {
    label:"Day 6 (Sat) — Don't Give Up",
    exercises:[
      s('Warm Up',['1500m bike','500m ski']),
      c("DON'T GIVE UP — 20 Minute EMOM",['Minute 1: Ski erg (calories)','Minute 2: Bike erg (calories)']),
      c('Cool Down',['10-minute walk']),
    ]
  };
  const wodW7 = {
    label:'Day 6 (Sat) — Row Bar Chipper',
    exercises:[
      c('Row Bar Chipper (For Time)',['2000m row','50 pull-ups','1000m row','30 C2B pull-ups','500m row','20 chin-ups','250m row','10 bar muscle-ups']),
      c('1 Mile Cool Down Run',['Optional: swap for a 15 minute cool down bike']),
    ]
  };
  const wodW8 = { label:'Day 6 (Sat) — 60 Minute Hike',
    exercises:[c('60 Minute Hike',['Keep the effort level low. ENJOY THE WEEKEND!!'])] };
  const wodW9 = {
    label:'Day 6 (Sat) — Dog Fight',
    exercises:[
      s('Warm Up',['50 banded good mornings','50 air squats']),
      c('DOG FIGHT — 5 Rounds @ 200lbs men / 135lbs women',['5 ground to shoulder','5 front rack squat','50m front rack carry']),
      c('2k Row Cool Down',[]),
    ]
  };
  const wodW10 = {
    label:'Day 6 (Sat) — Burpee Mountain',
    exercises:[
      s('Warm Up (3 Rounds)',['250m row','10 judo push ups']),
      c('BURPEE MOUNTAIN — 16 Minute AMRAP',['*Reps build by 2 each round: 2, 4, 6, 8…','Box step over (1x 50lb men / 35lb women)','Burpee box jump over (24" men / 20" women)']),
      c('1 Mile Cool Down Run',[]),
    ]
  };
  const wodW11 = {
    label:'Day 6 (Sat) — Murder March',
    exercises:[
      c('MURDER MARCH — 60 Minute Run',[
        'Fill a sandbag with half your body weight',
        'Run as far and hard as you can — pass the bag to a partner when you get tired (work/rest 1:1)',
        'Cover as much distance as possible in the 60 minutes']),
    ]
  };
  const wodW12 = { label:'Day 6 (Sat) — Rest', exercises:[re()] };

  // ── Week assembler ─────────────────────────────────────────────────────────
  const buildWeek = (wk, wod, monOverride, wedOverride, friOverride) => ([
    monOverride || tbaStrengthDay(wk),
    { label:'Day 2 (Tue) — Recovery', exercises:[tbaRecoveryDay(wk)] },
    wedOverride || tbaUpperDay(wk, upperFinisher[wk]),
    { label:'Day 4 (Thu) — Recovery', exercises:[tbaRecoveryDay(wk)] },
    friOverride || tbaHeavyMetalDay(wk, coreByWk[wk]),
    wod,
    { label:'Day 7 (Sun) — Rest', exercises:[re()] },
  ]);

  const tbaProgram = {
    id: 'tba',
    name: 'Total Body Aesthetic',
    subtitle: '6 days/week · Strength + Conditioning + Recovery',
    color: '#7A3FB5',
    emoji: '🔥',
    weeks: [
      // ── Block 1 — Foundation ─────────────────────────────────────────────
      { weekNum:1, blockLabel:'Block 1 — Foundation', label:'Foundation — Base Sets',
        note:'Establish baseline weights. Focus on form and tempo — last set 2-3 reps from failure.',
        days: buildWeek(1, wodW1) },
      { weekNum:2, blockLabel:'Block 1 — Foundation', label:'Foundation — Build',
        note:'Same volume as Week 1, push heavier. New conditioning test: Row Bar Chipper.',
        days: buildWeek(2, wodW2) },
      { weekNum:3, blockLabel:'Block 1 — Foundation', label:'Foundation — Peak',
        note:'+1 set on most lifts. Hike extends to 45 min. Max effort 5k Row Test on Day 6.',
        days: buildWeek(3, wodW3) },
      { weekNum:4, blockLabel:'Block 1 — Foundation', label:'Recovery / Deload',
        note:'All strength cut to 2 sets. Heavy Metal drops to 3 rounds. Day 6 becomes rest.',
        days: buildWeek(4, wodW4) },

      // ── Block 2 — Development (Olympic flavor) ───────────────────────────
      { weekNum:5, blockLabel:'Block 2 — Development', label:'Development — Base',
        note:'Restart at Block 1 peak volume. Heavy Metal shifts to power clean / shoulder press / weighted lunges / weighted chin ups.',
        days: buildWeek(5, wodW5) },
      { weekNum:6, blockLabel:'Block 2 — Development', label:'Development — Build',
        note:"Same volume, push heavier. New test: Don't Give Up 20 Min EMOM (Ski/Bike).",
        days: buildWeek(6, wodW6) },
      { weekNum:7, blockLabel:'Block 2 — Development', label:'Development — Peak',
        note:'Recovery extends to 60 min. Heaviest week of Block 2 — Row Bar Chipper returns on Sat.',
        days: buildWeek(7, wodW7) },
      { weekNum:8, blockLabel:'Block 2 — Development', label:'Recovery / Deload',
        note:'Full deload week. Mon = Death By Dumbbells EMOM, Wed = light upper + Hill Sprints, Fri = 15/12/9 WODs.',
        days: buildWeek(8, wodW8, week8Mon, null, week8Fri) },

      // ── Block 3 — Performance (weighted rucking + hybrid peak) ───────────
      { weekNum:9, blockLabel:'Block 3 — Performance', label:'Performance — Base',
        note:'Heavy Metal evolves: banded DL / clean & jerk / heavy DB press & row (5 rounds). Recovery = 60 min Ruck (20-50lb).',
        days: buildWeek(9, wodW9) },
      { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance — Build',
        note:'12/15/9 WOD finisher. Saturday = Burpee Mountain 16-min AMRAP.',
        days: buildWeek(10, wodW10) },
      { weekNum:11, blockLabel:'Block 3 — Performance', label:'Performance — PEAK',
        note:'Final peak. Saturday = Murder March (60 min run with half-body-weight sandbag).',
        days: buildWeek(11, wodW11) },
      { weekNum:12, blockLabel:'Block 3 — Performance', label:'Final Deload',
        note:'Close out the program. Mon = Tight Timing, Wed = Skull Buster (weighted vest), Fri = Fran, Sat = Rest.',
        days: buildWeek(12, wodW12, week12Mon, week12Wed, week12Fri) },
    ]
  };

  if (window.WORKOUT_DATA && Array.isArray(window.WORKOUT_DATA.programs)) {
    window.WORKOUT_DATA.programs.push(tbaProgram);
  }
})();
