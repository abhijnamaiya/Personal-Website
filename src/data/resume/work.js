/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'HFCL 5G R&D LTD',
    position: 'Software Engineer 1',
    url: 'https://www.hfcl.com/',
    startDate: '2022-07-01',
    endDate: '2024-07-01',
    summary: 'Leading telecom revolution, we at HFCL, have deployed and delivered multiple large-scale, technologically advanced, customized, end-to-end and fully integrated network solutions.',
    highlights: [
      'Spearheaded Web Development for 5G Fixed Wireless Access Customer Premise Equipment (FWA-CPE), integrating QMI/QCMAP [Qualcomm] interface for 8 networking features.',
      'Delivered high-quality design and implementation methodology for User Management, Password History and Crash Logging using object-oriented C++ design concepts.',
      'Developed cellular and data-centric features with Unix socket-to-socket communication between back-end and front-end.',
      'Collaborated with a team of experienced developers and testers to devise testing strategies and scripts for long run tests, reducing repetitive bugs/issues by 15%.',
      'Organized directories and files for ease of access within a Unix operating system using Linux commands for data retrieval.',
    ],
  },
  {
    name: 'HFCL 5G R&D LTD',
    position: 'Research Intern',
    url: 'https://www.hfcl.com/',
    startDate: '2022-01-01',
    endDate: '2022-06-01',
    summary: `Leading telecom revolution, we at HFCL, have deployed and delivered multiple large-scale, 
    technologically advanced, customized, end-to-end and fully integrated network solutions.`,
    highlights: [
      'Conducted in-depth analysis and documentation of 5G networks, the architecture, deployment, frequency bands, use cases and further scope according to 3GPP specifications, with weekly seminars and presentations.',
      'Researched on LTE UE MAC scheduling at the L2 layer, optimizing uplink and downlink bandwidth allocation for 275 resource blocks, 30kHz with channel quality index and QoS requirements under consideration.',
      'Took part in team training and technical workshops regarding product innovation and management resulting in strong problem-solving and creative thinking. Organized a technical seminar for coding standards for two internal teams.',
      'Collaborated on projects to create an in-house chatbot for all company related products and documentation utilizing Natural Language processing and pre-built models, over 40% of the employees found it to be useful in day-to-day activities.',
    ],
  },
];

export default work;
