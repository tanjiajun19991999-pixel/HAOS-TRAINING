// ─────────────────────────────────────────────────────────────────────────────
//  HAOS TRAINING — Workout Data
//  To add a workout: add a new object to the relevant program's weeks array.
//  Each week: { weekNum, blockLabel, label, note, days: [ ...dayObjects ] }
//  Each day:  { label, exercises: [ ...exerciseObjects ] }
//  Each exercise: { type, title, notes }
//  Types: 'strength' | 'run' | 'bike' | 'conditioning' | 'rest'
// ─────────────────────────────────────────────────────────────────────────────

const s  = (title, notes=[]) => ({ type:'strength',     title, notes });
const r  = (title, notes=[]) => ({ type:'run',          title, notes });
const b  = (title, notes=[]) => ({ type:'bike',         title, notes });
const c  = (title, notes=[]) => ({ type:'conditioning', title, notes });
const re = ()                => ({ type:'rest',         title:'Rest & Recovery', notes:[] });

// ── SPS WEEK TEMPLATES ────────────────────────────────────────────────────────
function spsWeek(prog) {
  const dl = prog==='deload';
  return [
    { label:'Monday — Lower Body',
      exercises:[
        s(dl?'3×6 Back Squat':'8×4 Back Squat',
          dl?['60-70% of peak weight. Full ROM, controlled']:['Rest: 2-3 min between sets','Last 2 sets near failure']),
        s(dl?'3×6 Lay Flat Hamstring Curl':'8×4 Lay Flat Hamstring Curl',
          dl?['60-70% weight. Clean ROM']:['Rest 2 min between sets','Last set near failure with clean ROM']),
        s('Superset (3 Rounds)',['A. 3×8 Leg Extension','B. 3×8 Seated Hamstring Curl','— Rest 90s between rounds']),
        s(dl?'4×6 Seated DB Shoulder Press':'6×6 Seated DB Shoulder Press',['— Rest 90s between sets. Increase weight each set']),
        s('3×8 DB Front Raise',['— Rest 60-90s between sets. Increase weight each set']),
        c(`Power Drills (${dl?'3':'5'} Rounds)`,['Every 2 minutes:','— 0:00-0:15 max effort ski sprint','— 0:15-2:00 rest']),
      ]
    },
    { label:'Tuesday — Easy Run',
      exercises:[ r(`${dl?'40':'60'} Min Easy Run`,['Conversational pace','Aerobic base building — keep heart rate low']) ]
    },
    { label:'Wednesday — Upper Body',
      exercises:[
        s(dl?'3×6 Bench Press':(prog==='base'?'8×4 Bench Press — establish working weight':(prog==='mid'?'8×4 Bench Press — add 5-10 lbs vs Week 1':'8×4 Bench Press — peak weight')),
          dl?['60-70% of peak weight. Rest 2 min']:['Rest: 2-3 min between sets','Last 2 sets near failure']),
        s('8×4 Cable Row',['— Rest 2 min. Last set near failure']),
        s('Superset (3 Rounds)',['A. 3×8 Cable Fly','B. 3×8 Lat Pull Down','— Rest 90s between rounds']),
        s(dl?'4×6 DB Lateral Raise':'6×4 DB Lateral Raise',['— Rest 90s between sets. Increase weight each set']),
        s('3×8 Barbell Upright Row',['— Rest 60-90s between sets. Increase weight each set']),
        c('Power Drills — 4×100m Run',['— 3 minutes rest between sprints','— 90%+ effort each sprint','— Fully warm up before starting']),
      ]
    },
    { label:'Thursday — Intervals',
      exercises:[ r(dl?'3×1km Intervals (reduced)':'5×1km Intervals',
        dl?['2 min rest between. Recovery week — easy effort']:['2 min rest between each km','Hard, controlled effort']) ]
    },
    { label:'Friday — Full Body',
      exercises:[
        s(dl?'3×6 Deadlift':'8×4 Deadlift', dl?['60-70% of peak. Focus on form']:['Rest: 2-3 min between sets']),
        s('3×8 Hip Thrust',['— Rest 60-90s between sets']),
        s('Superset (3 Rounds)',['A. 6×6 Cable Overhead Tricep Extension','B. 6×6 Barbell Curl','— Rest 60-90s between rounds']),
        s('Superset (3 Rounds)',['A. 3×8 Rope Tricep Extension Pull Down','B. 3×8 DB Curl','— Rest 60-90s between rounds']),
        s('4×20 DB Cable Crunch',['— Rest 60s between sets. Increase weight each set']),
        c(dl?'3 Rounds Sandbag Carry':'4-6 Rounds For Time',['— 50m sandbag front-load carry (heavy)','— Recovery: 400m jog OR 2:00 full rest','— Score = sandbag weight']),
      ]
    },
    { label:'Saturday — Rest', exercises:[re()] },
    { label:'Sunday — Rest',   exercises:[re()] },
  ];
}

// ── HAOS PRO WEEK TEMPLATES ───────────────────────────────────────────────────
const proW1 = [
  { label:'Monday — Running Tempo + Intervals', exercises:[
    r('10 Min Warm Up Run',['Build pace slowly; reach interval pace for final 30s']),
    r('3×8 Min Tempo Effort',['2 min easy jog between efforts','Hold 10k pace or slightly faster (8/10 effort)','Only continue past Round 2 if holding pace']),
    r('5×45 Seconds at Mile Pace',['9/10 effort. 60s rest between sets']),
    r('10 Min Cool Down Run',['Jog or walk; flush legs']),
  ]},
  { label:'Tuesday — PM Strength', exercises:[
    r('1 Mile Warm Up Run',[]),
    s('2× 5/3/1 — Front Squat',['Increase weight each set to heavy single','Last rep = near-max effort','2-3 min rest between sets']),
    c('Strongman Session (4 Rounds)',['— 45 sec weighted sandbag carry','— 25m sled pull','— 25m max weight farmer carry, 1 arm, both sides']),
    s('Core Work: 100 Back Extensions',[]),
  ]},
  { label:'Wednesday — Endurance + Wall Balls', exercises:[
    r('60 Min Endurance Run',['Comfortable pace you could sustain for 2 hours']),
    c('100 Wall Balls at Moderate Pace',[]),
  ]},
  { label:'Thursday — AM Run + PM Bike', exercises:[
    r('AM — 75 Min Endurance Run',['Comfortable sustained pace']),
    r('4×20 Sec Strides at Mile Pace',[]),
    b('PM — 90 Min Bike Session',['Same comfortable sustained effort']),
  ]},
  { label:'Friday — Heavy Strength', exercises:[
    s('Warm Up (3 Rounds)',['5 single leg deadlift each side','10 reverse flys','15 sec iso deadlift hold']),
    s('2× 5/3/1 — Deadlift',['Increase weight to heavy single. 2-3 min rest']),
    s('2× 3/2/1 — Push Press',['Increase weight to heavy single. 2-3 min rest']),
    c('100 Calories — Assault Bike',['Rest 3 min after']),
    c('15-18 Min EMOM (5-6 Rounds)',['Min 1: 45s max cal bike','Min 2: Max power cleans (115lb/75lb)','Min 3: Full rest']),
  ]},
  { label:'Saturday — Long Run', exercises:[
    r('2 Hour Long Run',['Allow pace to flow 60-80% effort','Pick up when strong; jog or power hike when needed']),
  ]},
  { label:'Sunday — Rest', exercises:[re()] },
];

const proW2 = [
  { label:'Monday — Tempo + PM Strength', exercises:[
    r('4×8 Min Tempo Effort',['2 min easy jog between efforts','Hold 10k pace or slightly faster']),
    r('10 Min Cool Down Run',[]),
    r('1 Mile Warm Up Run',[]),
    s('2× 5/3/1 — Front Squat',['Increase weight to heavy single. 2-3 min rest']),
    c('Strongman Session (4 Rounds)',['— 45 sec sandbag carry','— 25m sled pull','— 25m farmer carry, 1 arm']),
    s('Core Work: 100 Back Extensions',[]),
  ]},
  { label:'Tuesday — Endurance + Wall Balls', exercises:[
    r('60 Min Endurance Run',['Comfortable sustained pace']),
    c('100 Wall Balls at Moderate Pace',[]),
  ]},
  { label:'Wednesday — Upper Body Strength + Ski', exercises:[
    s('5/3/1 Superset ×2 — Bench Press + Weighted C2B Pull Up',[]),
    s('Strength Circuit (4 Rounds NFT)',['12 DB pullovers','12 DB pec flys','12 DB reverse flys']),
    c('1000m Max Effort Ski Erg',['Rest 3 minutes after']),
  ]},
  { label:'Thursday — Conditioning + PM Run', exercises:[
    c('Go Every 4 Min (4 Rounds)',['50/30 cal at 85% test pace','Max KB swings until 2:30','Rest remaining time']),
    c('4×25 Wall Ball (30/20lb)',['60s rest between sets']),
    r('PM — 30 Min Recovery Run',['60-70% effort']),
  ]},
  { label:'Friday — Bike Endurance', exercises:[
    b('90 Min Bike Session',['60-70% effort','Feel as good or better at the end']),
    c('Optional: 3×50m Burpee Broad Jump',['Only if feeling strong. 90s rest between rounds']),
  ]},
  { label:'Saturday — Deadlift + Push Press + AMRAP', exercises:[
    s('Warm Up (3 Rounds)',['5 single leg deadlift each side','10 reverse flys','15 sec iso deadlift hold']),
    s('2× 5/3/1 — Deadlift',['Increase weight to heavy single. 2-3 min rest']),
    s('2× 3/2/1 — Push Press',['Increase weight to heavy single. 2-3 min rest']),
    c('20 Min AMRAP',['10m sled push max weight','15 cal assault bike','20 alternating DB snatch (50/35lb)']),
    r('Immediately: 1 Mile at 85% Effort',[]),
  ]},
  { label:'Sunday — Rest', exercises:[re()] },
];

const proW3 = [
  { label:'Monday — Peak Tempo + Intervals', exercises:[
    r('10 Min Warm Up Run',['Build pace; reach interval pace for final 30s']),
    r('3×8 Min Tempo Effort — PEAK',['Biggest push this week: fastest pace yet','10k pace or faster. 2 min easy jog between.']),
    r('5×60 Sec On / 60 Sec Off',['5k pace or slightly faster. Keep controlled.']),
    r('10 Min Cool Down Run',[]),
  ]},
  { label:'Tuesday — Front Squat + Accessories + Core', exercises:[
    s('2× 5/3/1 — Front Squat (PEAK)',['Heaviest week: push to true max effort single','2-3 min rest']),
    s('NOT FOR TIME (4 Rounds)',['10 DB RDL','15 weighted back extensions','20 alternating reverse DB lunges']),
    c('Core Work (4 Rounds)',['15-20 tibialis raises','30 weighted Russian twists','60s plank']),
  ]},
  { label:'Wednesday — EMOM + IWT + PM Run', exercises:[
    c('14 Min EMOM',['Min 1: 15-25 push ups','Min 2: 15-20 overhead KB swing','As heavy as possible without multiple drops']),
    c('IWT Intensity Session (5 Rounds)',['2 min work / 1 min rest','25 cal row, then max reps remaining time','Lactate training — learn pacing here']),
    r('1 Mile Cool Down Run',[]),
    r('PM — 30 Min Recovery Run',['60-70% effort']),
  ]},
  { label:'Thursday — Bike Endurance', exercises:[
    b('75 Min Bike Session',['60-70% effort throughout']),
  ]},
  { label:'Friday — Full Strength + Peak Conditioning', exercises:[
    s('2× 5/3/1 — Deadlift (PEAK)',['Heaviest week. 2-3 min rest']),
    s('3 Rounds NFT',['8 single leg deadlift each leg','8 box step up each leg','8 heavy tempo RDL']),
    c('5×30 Sec All Out Bike Sprints',['Warm up 10 min first']),
    c('Intensity Session (4 Rounds)',['1 min thruster max reps (65lb men/45lb women)','1 min burpee box jump over max reps','90s rest between rounds. Hold or increase each round.']),
  ]},
  { label:'Saturday — Upper Body + Strongman + PM Run', exercises:[
    s('5/3/1 Superset ×2 — Bench Press + Weighted C2B Pull Up',['Peak week: push to max effort']),
    s('Strength Circuit (4 Rounds NFT)',['12 DB shoulder press','12 DB lateral raises','15 DB barbell upright rows']),
    c('Strong Man Reps Pyramid',['5 / 10 / 15 / 10 / 5 reps','Sandbag clean & jerk (100lb men / 70lb women)']),
    r('PM — 30 Min Easy Run',['60-70% effort']),
  ]},
  { label:'Sunday — Long Run', exercises:[
    r('75 Min Long Run',['Replace with bike if too sore']),
  ]},
];

const proW4 = [
  { label:'Monday — Recovery Strength', exercises:[
    s('Front Squat + Bench Press — 2 Rounds 3/2/1 (DELOAD)',['60-70% of peak weight only','2-3 min rest']),
    c('Sandbag Strongman (4 Rounds)',['50m sandbag bear hug carry','10 sandbag RDL','20 sandbag walking lunges']),
    c('Bikes and Balls (5 Rounds)',['30 wall ball (30lb/20lb)','30 calorie bike']),
  ]},
  { label:'Tuesday — Recovery Run', exercises:[r('45 Min Easy Run',['Recovery week — very easy pace'])]},
  { label:'Wednesday — Bike + EMOM', exercises:[
    b('10 Min Warm Up Bike',[]),
    c("Don't Give Up — 20 Min EMOM",['Min 1: 22/18 cal ski','Min 2: 22/18 cal bike']),
    b('10 Min Cool Down Bike',[]),
  ]},
  { label:'Thursday — Recovery Run', exercises:[r('45 Min Easy Run',['Recovery week — take it easy'])]},
  { label:'Friday — Light Strength', exercises:[
    s('Deadlift / Push Press — 2 Rounds 3/2/1 Only',['60-70% of peak weight. Focus on feel and form']),
  ]},
  { label:'Saturday — Rest', exercises:[re()] },
  { label:'Sunday — Rest', exercises:[re()] },
];

// ── MARATHON WEEK TEMPLATES ───────────────────────────────────────────────────
function mWeek({inOuts, amPm, longMin, longInterval, bikeMin=90}) {
  return [
    { label:'Monday — In & Outs', exercises:[
      r('5 Min Warm Up Run',['Use first mile as extra warm up if needed']),
      r(`In & Outs (${inOuts} Rounds)`,['1 mile @ 1:00 slower than TT pace','1 mile @ TT pace','Lock in on pace from the very first mile']),
      r('10 Min Cool Down Run',['Walking is fine. Part of recovery.']),
    ]},
    { label:'Tuesday — Cross Training (Bike)', exercises:[
      b(`${bikeMin} Min Cross Training (Bike)`,['60-70% effort. Sustained pace.','Fuel well before and during']),
    ]},
    { label:'Wednesday — Bike + Run', exercises:[
      b('45 Min Bike',['60-70% effort']),
      r('45 Min Run',['2-3 min slower than TT pace','Controlled aerobic volume']),
    ]},
    { label:'Thursday — Double Run', exercises:[
      r(`AM Run — ${amPm} Miles`,['2-3 min slower than race pace','Easy. Stacking volume without damage.']),
      r(`PM Run — ${amPm} Miles`,['2-3 min slower. These should feel easy.']),
    ]},
    { label: longInterval ? 'Friday — Long Run Intervals' : 'Friday — Long Run', exercises: longInterval
      ? [r(`Long Run Intervals (${longInterval.rounds} Rounds)`,[
          `${longInterval.easyMin} min @ 2-3 min slower than test pace`,
          `${longInterval.fastMin} min @ ${longInterval.faster||'test pace'}`,
          'Form first, speed second'])]
      : [r(`${longMin} Min Long Run`,[
          '2-3 min slower than TT pace',
          `At ${longMin-10} min: hit a 90% effort mile. Form first.`,
          'Use remaining time as cool down'])]
    },
    { label:'Saturday — Rest', exercises:[re()] },
    { label:'Sunday — Rest',   exercises:[re()] },
  ];
}

function mRecovery({inOuts=3,bikeMin=60,runMin=30,amPm=3,longMin=60}) {
  return [
    { label:'Monday — In & Outs (Reduced)', exercises:[
      r('5 Min Warm Up Run',[]),
      r(`In & Outs (${inOuts} Rounds) — RECOVERY`,['1 mile @ 1:00 slower than TT pace','1 mile @ TT pace','Pull back on effort slightly this week']),
      r('10 Min Cool Down Run',[]),
    ]},
    { label:'Tuesday — Recovery Bike', exercises:[b(`${bikeMin} Min Easy Bike`,['Easy effort. Flush the legs, not tax them.'])]},
    { label:'Wednesday — Short Bike + Short Run', exercises:[
      b(`${runMin} Min Bike`,['60-70% effort']),
      r(`${runMin} Min Run`,['2-3 min slower than TT pace. Very easy.']),
    ]},
    { label:'Thursday — Double Run (Reduced)', exercises:[
      r(`AM Run — ${amPm} Miles`,['2-3 min slower. Easy.']),
      r(`PM Run — ${amPm} Miles`,['Very easy. Stack the volume.']),
    ]},
    { label:'Friday — Long Run (Recovery Length)', exercises:[
      r(`${longMin} Min Long Run`,['2-3 min slower than TT pace','No interval push this week. Just time on feet.']),
    ]},
    { label:'Saturday — Rest', exercises:[re()] },
    { label:'Sunday — Rest',   exercises:[re()] },
  ];
}

function mTempoWeek({rounds,amPm,longInterval}) {
  return [
    { label:'Monday — Tempo Intervals', exercises:[
      r('15 Min Warm Up Run',['Build up to time trial pace']),
      r(`Tempo Intervals (${rounds} Rounds)`,['1 Min @ 10-20s faster than TT pace','1 Min @ 60s slower than TT pace','Control the intensity — this is precision work']),
      r('15 Min Cool Down Run',['Walking is fine. Full recovery.']),
    ]},
    { label:'Tuesday — Cross Training (Bike)', exercises:[b('90 Min Cross Training (Bike)',['60-70% sustained effort'])]},
    { label:'Wednesday — Bike + Run', exercises:[
      b('45 Min Bike',['60-70% effort']),
      r('45 Min Run',['2-3 min slower than TT pace']),
    ]},
    { label:'Thursday — Double Run', exercises:[
      r(`AM Run — ${amPm} Miles`,['2-3 min slower than race pace']),
      r(`PM Run — ${amPm} Miles`,['Easy. Stack the volume.']),
    ]},
    { label:'Friday — Long Run Intervals', exercises:[
      r(`Long Run Intervals (${longInterval.rounds} Rounds)`,[
        `${longInterval.easyMin} min @ 2-3 min slower than test pace`,
        `${longInterval.fastMin} min @ 10-20s per mile faster than test pace`,
        'Form first, speed second']),
    ]},
    { label:'Saturday — Rest', exercises:[re()] },
    { label:'Sunday — Rest',   exercises:[re()] },
  ];
}

// ── ASSEMBLE PROGRAMS ─────────────────────────────────────────────────────────
window.WORKOUT_DATA = {
  programs: [
    // ── 1. Sports Performance Strength ──────────────────────────────────────
    {
      id: 'sps',
      name: 'Sports Performance Strength',
      subtitle: '6 days/week · Strength + Running',
      color: '#CC2200',
      emoji: '🏋️',
      weeks: [
        // Block 1
        { weekNum:1, blockLabel:'Block 1 — Foundation', label:'Foundation — Base Weights',   note:'Establish all working weights. Focus on form over load.',          days: spsWeek('base')   },
        { weekNum:2, blockLabel:'Block 1 — Foundation', label:'Foundation — Progress',        note:'Add 5-10 lbs to all compound lifts. Last sets near failure.',      days: spsWeek('mid')    },
        { weekNum:3, blockLabel:'Block 1 — Foundation', label:'Foundation — Peak',            note:'Heaviest week of the block. Push last 2 sets to near failure.',    days: spsWeek('peak')   },
        { weekNum:4, blockLabel:'Block 1 — Foundation', label:'Recovery Week',                note:'Drop to 60-70% of Week 3 weight. Reduce reps. Rest is training.',  days: spsWeek('deload') },
        // Block 2
        { weekNum:5, blockLabel:'Block 2 — Development', label:'Development — Re-establish', note:'Restart slightly above Block 1 starting point.',                   days: spsWeek('base')   },
        { weekNum:6, blockLabel:'Block 2 — Development', label:'Development — Progress',     note:'Continue adding 5-10 lbs. Push last sets.',                        days: spsWeek('mid')    },
        { weekNum:7, blockLabel:'Block 2 — Development', label:'Development — Peak',         note:'Peak intensity for this block. Conditioning at maximum volume.',    days: spsWeek('peak')   },
        { weekNum:8, blockLabel:'Block 2 — Development', label:'Recovery Week',              note:'Full deload. Recovery before the final block.',                     days: spsWeek('deload') },
        // Block 3
        { weekNum:9,  blockLabel:'Block 3 — Performance', label:'Performance — Build',       note:'Start with heaviest weights used to date across all blocks.',       days: spsWeek('base')   },
        { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance — Progress',    note:'Add 5-10 lbs. Conditioning rounds at maximum volume.',              days: spsWeek('mid')    },
        { weekNum:11, blockLabel:'Block 3 — Performance', label:'Performance — Peak',        note:'Highest intensity week of the program. Leave everything.',          days: spsWeek('peak')   },
        { weekNum:12, blockLabel:'Block 3 — Performance', label:'Final Deload',              note:'Active recovery. Consolidate all gains.',                           days: spsWeek('deload') },
      ]
    },

    // ── 2. HAOS PRO ─────────────────────────────────────────────────────────
    {
      id: 'haos_pro',
      name: 'HAOS PRO',
      subtitle: '6 days/week · Strength + Endurance + Conditioning',
      color: '#1A1A1A',
      emoji: '⚡',
      weeks: [
        { weekNum:1,  blockLabel:'Block 1 — Foundation',  label:'Foundation Week 1', note:'Establish all weights and paces. Build the aerobic base.', days: proW1 },
        { weekNum:2,  blockLabel:'Block 1 — Foundation',  label:'Foundation Week 2', note:'Add volume on tempo runs. Increase strength weights.',      days: proW2 },
        { weekNum:3,  blockLabel:'Block 1 — Foundation',  label:'Foundation Week 3 — Peak', note:'Highest intensity of Block 1. Push everything hard.', days: proW3 },
        { weekNum:4,  blockLabel:'Block 1 — Foundation',  label:'Recovery Week',     note:'60-70% weights. Reduced run volume. Priority is recovery.', days: proW4 },
        { weekNum:5,  blockLabel:'Block 2 — Development', label:'Development Week 1',note:'Restart heavier. Longer runs, bigger EMOM.',                days: proW1 },
        { weekNum:6,  blockLabel:'Block 2 — Development', label:'Development Week 2',note:'Increase all loads. Tempo runs push to mile pace territory.',days: proW2 },
        { weekNum:7,  blockLabel:'Block 2 — Development', label:'Development Week 3 — Peak',note:'Peak of Block 2. Maximum volume across all domains.', days: proW3 },
        { weekNum:8,  blockLabel:'Block 2 — Development', label:'Recovery Week',     note:'Second deload. Full recovery before final block.',           days: proW4 },
        { weekNum:9,  blockLabel:'Block 3 — Performance', label:'Performance Week 1',note:'Heaviest weights ever used. Fastest tempo paces.',           days: proW1 },
        { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance Week 2',note:'Increase again. All conditioning at maximum volume.',        days: proW2 },
        { weekNum:11, blockLabel:'Block 3 — Performance', label:'Performance Week 3 — PEAK',note:'Absolute peak of the entire program.',               days: proW3 },
        { weekNum:12, blockLabel:'Block 3 — Performance', label:'Final Deload',      note:'Active recovery. Consolidate all gains.',                    days: proW4 },
      ]
    },

    // ── 3. McIntyre Marathon Method ──────────────────────────────────────────
    {
      id: 'marathon',
      name: 'McIntyre Marathon Method',
      subtitle: '5 days/week · Running + Cross Training',
      color: '#1A6CC2',
      emoji: '🏃',
      weeks: [
        // Block 1
        { weekNum:1, blockLabel:'Block 1 — Foundation', label:'Foundation Week 1 — Baseline Test',
          note:'This week sets your Time Trial (TT) pace — the benchmark for all future pacing.',
          days:[
            { label:'Monday — Baseline Test', exercises:[
              r('10-15 Min Warm Up Jog',['Build pace slowly across the warm up']),
              r('30 Min Max Distance Test',['90% effort — treat like a tempo, NOT an all-out sprint','Record your distance — this sets your TT pace for the entire program']),
              r('5-10 Min Recovery Run/Walk',['Walk is fine. Bring HR down and flush legs.']),
            ]},
            { label:'Tuesday — Cross Training (Bike)', exercises:[b('75 Min Cross Training (Bike)',['60-70% effort'])]},
            { label:'Wednesday — Bike + Run', exercises:[b('45 Min Bike',['60-70% effort']),r('45 Min Run',['2-3 min slower than TT pace'])]},
            { label:'Thursday — First In & Outs', exercises:[
              r('5 Min Warm Up Run',[]),
              r('In & Outs (3 Rounds)',['1 mile @ 1:00 slower than TT pace','1 mile @ TT pace','First structured interval — lock in your pacing']),
              r('10 Min Cool Down Run',[]),
            ]},
            { label:'Friday — Cross Training (Bike)', exercises:[b('90 Min Cross Training (Bike)',['Sustained 60-70% effort','Fuel before and during'])]},
            { label:'Saturday — Rest', exercises:[re()] },
            { label:'Sunday — Rest',   exercises:[re()] },
          ]
        },
        { weekNum:2, blockLabel:'Block 1 — Foundation', label:'Foundation Week 2',
          note:'In & Outs increase to 4 rounds. First double-run day.',
          days: mWeek({inOuts:4, amPm:4, longMin:75}) },
        { weekNum:3, blockLabel:'Block 1 — Foundation', label:'Foundation Week 3 — Peak',
          note:'5 rounds In & Outs. Longest long run of the block.',
          days: mWeek({inOuts:5, amPm:5, longMin:85}) },
        { weekNum:4, blockLabel:'Block 1 — Foundation', label:'Recovery Week',
          note:'Pull back all volume. Shorter bike, shorter runs. Flush the legs.',
          days: mRecovery({inOuts:3, bikeMin:60, runMin:30, amPm:3, longMin:60}) },

        // Block 2
        { weekNum:5, blockLabel:'Block 2 — Development', label:'Development Week 1',
          note:'Return to 5 rounds In & Outs. Long run introduces interval pushes.',
          days: mWeek({inOuts:5, amPm:5, longInterval:{rounds:4, easyMin:13, fastMin:7, faster:'test pace'}}) },
        { weekNum:6, blockLabel:'Block 2 — Development', label:'Development Week 2',
          note:'Volume builds further. Long run intervals increase.',
          days: mWeek({inOuts:5, amPm:6, longInterval:{rounds:5, easyMin:12, fastMin:5, faster:'10-20s per mile faster than test pace'}}) },
        { weekNum:7, blockLabel:'Block 2 — Development', label:'Development Week 3 — Peak',
          note:'7 rounds In & Outs. Highest mileage of Block 2.',
          days: mWeek({inOuts:7, amPm:6, longInterval:{rounds:6, easyMin:12, fastMin:6, faster:'10-20s per mile faster than test pace'}}) },
        { weekNum:8, blockLabel:'Block 2 — Development', label:'Recovery Week',
          note:'Second deload. Priority is full recovery.',
          days: mRecovery({inOuts:5, bikeMin:60, runMin:30, amPm:4, longMin:75}) },

        // Block 3
        { weekNum:9, blockLabel:'Block 3 — Performance', label:'Performance Week 1',
          note:'Tempo intervals replace In & Outs. Highest intensity running begins.',
          days: mTempoWeek({rounds:9, amPm:5, longInterval:{rounds:5, easyMin:12, fastMin:6}}) },
        { weekNum:10, blockLabel:'Block 3 — Performance', label:'Performance Week 2',
          note:'Tempo interval rounds increase. Double run volume at peak.',
          days: mTempoWeek({rounds:11, amPm:6, longInterval:{rounds:6, easyMin:12, fastMin:7}}) },
        { weekNum:11, blockLabel:'Block 3 — Performance', label:'Performance Week 3 — PEAK',
          note:'Maximum tempo rounds and maximum long run volume. Full race simulation.',
          days: mTempoWeek({rounds:13, amPm:7, longInterval:{rounds:7, easyMin:12, fastMin:8}}) },
        { weekNum:12, blockLabel:'Block 3 — Performance', label:'Final Deload',
          note:'Active recovery. Protect the gains. Prepare for race day or next cycle.',
          days: mRecovery({inOuts:3, bikeMin:45, runMin:25, amPm:3, longMin:45}) },
      ]
    },
  ]
};
