// TODO Add a couple lines about each project
const data = [
  {
    title: 'Audio-Visual Speech Separation',
    subtitle: 'Dual Path Recurrent Neural Network, Lipnet, TensorFlow',
    image: '/images/projects/nearestdollar.jpg',
    date: '2023-08-01',
    desc:
      'Separating Speech signals of multiple speakers with the help of audio and visual cues (cocktail party problem).'
      + 'Deployed Lipnet Model in Python programming language for facial recognition, trained over 150,000 audio-video samples.'
      + 'Implemented a Dual Path Recurrent Neural Network in time domain, achieving improved SNR as a performance metric.'
      + 'Analyzed speech signals in the time domain, demonstrating faster processing compared to the frequency domain by about 11%.',
  },
  {
    title: '2 Player Terminal Chess with Move Suggestions ',
    subtitle: 'C++, Stockfish AI',
    image: '/images/projects/harvest.jpg',
    date: '2022-08-01',
    desc:
      'Created a 2-player terminal-based chess game leveraging object-oriented C++ programming.'
      + 'Further improved project with AI moves suggestions for each player through stockfish interface.'
      + 'Generated FEN string to retrieve current board status and calling stockfish interface to suggest'
      + 'the next best move, spiking a 30% interest rate among players.',
  },
];

export default data;
