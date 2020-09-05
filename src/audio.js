// create the audio context
var ac = typeof AudioContext !== 'undefined' ? new AudioContext : new webkitAudioContext,
  // get the current Web Audio timestamp (this is when playback should begin)
  when = ac.currentTime,
  // set the tempo
  tempo = 160,
  // initialize some vars
  sequence1,
  sequence2,
  sequence3,
  walkSequence,
  knockSequence,
  elevatorSequence
  // create an array of "note strings" that can be passed to a sequence
  lead = [
    'G4 e',
    '-  e',
    'C4 e',
    'D4  e',
    'E4  e',
    'G5  e',
    'F4  e',
    'C4  e',
    'G4 e',
    '-  e',
    'C4 e',
    'D4  e',
    'E4  e',
    'G5  e',
    'F4  e',
    'C4  e',
    'G3  e',
    '-  e',
    'A3  e',
    '-  e',
    'B3  e',
    '-  e',
    'C4  e',
    '-  e',
    'D4  e',
    '-  e',
    'E4  e',
    '-  e',
    'C4  e',
    'D4  e',
    'E3  e',
    'C4  e',
    'C4  e',
  ],
  harmony = [
    
  ],
  bass = [
    'CG  e',
    '-  e',
    '-  e',
    'C2  e',
    'C2  e',
    'E2  e',
    'G2  e',
    'E2  e',

    'G2  e',
    'B2  e',
    'D3  e',
    'B2  e',
    'G2  e',
    'B2  e',
    'D3  e',
    'B2  e',

    'F2  e',
    'A2  e',
    'C3  e',
    'A2  e',
    'F2  e',
    'A2  e',
    'C3  e',
    'A2  e',

    'A2  e',
    'C3  e',
    'E3  e',
    'C3  e',
    'A2  e',
    'C3  e',
    'E3  e',
    'C3  e',  

    'F2  e',
    'A2  e',
    'C3  e',
    'A2  e',
    'F2  e',
    'A2  e',
    'C3  e',
    'A2  e',

    'G2  e',
    'B2  e',
    'D3  e',
    'B2  e',
    'G2  e',
    'B2  e',
    'D3  e',
    'B2  e',
  ];
  walk = ['D3  q']
  knock = ['D5  q']
  elevator = ['G5  q']
  select = ['C5  q']

// create 3 new sequences (one for lead, one for harmony, one for bass)
sequence1 = new TinyMusic.Sequence( ac, tempo, lead );
sequence2 = new TinyMusic.Sequence( ac, tempo, harmony );
sequence3 = new TinyMusic.Sequence( ac, tempo, bass );
walkSequence = new TinyMusic.Sequence(ac,tempo, walk)
knockSequence = new TinyMusic.Sequence(ac,tempo, knock)
elevatorSequence = new TinyMusic.Sequence(ac,tempo, elevator)
selectSequence = new TinyMusic.Sequence(ac,tempo, select)

// set staccato and smoothing values for maximum coolness
sequence1.staccato = 0.55;
sequence2.staccato = 0.55;
sequence3.staccato = 0.25;
//sequence3.smoothing = 0.4;

// adjust the levels so the bass and harmony aren't too loud
sequence1.gain.gain.value = .1;
sequence2.gain.gain.value = 0.8 / 8;
sequence3.gain.gain.value = 0.5 / 8;
walkSequence.gain.gain.value = .1
knockSequence.gain.gain.value = .1
elevatorSequence.gain.gain.value = .1
selectSequence.gain.gain.value = .1

// apply EQ settings
sequence1.mid.frequency.value = 800;
sequence1.mid.gain.value = 3;
sequence2.mid.frequency.value = 1200;
sequence3.mid.gain.value = 3;
sequence3.bass.gain.value = 6;
sequence3.bass.frequency.value = 80;
sequence3.mid.gain.value = -6;
sequence3.mid.frequency.value = 500;
sequence3.treble.gain.value = -2;
sequence3.treble.frequency.value = 1400;

// play
document.querySelector("#welcome").addEventListener('click', function() {
  when = ac.currentTime;
  //start the lead part immediately
  sequence1.play( when );
  // delay the harmony by 16 beats
  sequence2.play( when + ( 60 / tempo ) * 16 );
  // start the bass part immediately
  sequence3.play( when );
}, false );

function walkSoundPlay() {
  when = ac.currentTime;
  //start the lead part immediately
  walkSequence.play( when );

  setTimeout(() => walkSequence.stop(), 100)
}

function knockSoundPlay() {
  when = ac.currentTime;
  //start the lead part immediately
  knockSequence.play( when );

  setTimeout(() => knockSequence.stop(), 100)
}

function elevatorSoundPlay() {
  when = ac.currentTime;
  //start the lead part immediately
  elevatorSequence.play( when );

  setTimeout(() => elevatorSequence.stop(), 100)
}

function selectSoundPlay() {
  when = ac.currentTime;
  //start the lead part immediately
  selectSequence.play( when );

  setTimeout(() => selectSequence.stop(), 100)
}

function playFinalSound() {
  when = ac.currentTime;
  //start the lead part immediately
  sequence1.play( when );
}

/*
document.querySelector('#play').addEventListener('click', function() {
  when = ac.currentTime;
  //start the lead part immediately
  sequence1.play( when );
  // delay the harmony by 16 beats
  sequence2.play( when + ( 60 / tempo ) * 16 );
  // start the bass part immediately
  sequence3.play( when );
}, false );

// pause
document.querySelector('#stop').addEventListener('click', function() {
  sequence1.stop();
  sequence2.stop();
  sequence3.stop();
}, false );*/