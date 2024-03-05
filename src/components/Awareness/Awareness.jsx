import React from 'react';


function Awareness() {
  const tips = [

  {
    title: 'Use Strong Passwords',
    description: 'Avoid using easily guessable passwords. Use a combination of letters, numbers, and special characters.',
  },
  {
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security by enabling two-factor authentication on your accounts.',
  },
  {
    title: 'Be Cautious of Phishing Scams',
    description: 'Do not click on links or download attachments from unknown or suspicious emails.',
  },
  {
    title: 'Keep Your Software Updated',
    description: 'Regularly update your operating system, antivirus software, and other applications to protect against vulnerabilities.',
  },
  {
    title: 'Use a Virtual Private Network (VPN)',
    description: 'When accessing sensitive information over public Wi-Fi, use a VPN to encrypt your internet connection.',
  },
  {
    title: 'Monitor Your Financial Statements',
    description: 'Regularly review your bank and credit card statements for any unauthorized transactions.',
  },
  {
    title: 'Limit the Information You Share Online',
    description: 'Be mindful of the personal information you share on social media and other online platforms.',
  },
  {
    title: 'Backup Your Data Regularly',
    description: 'Keep backups of important files to protect against data loss due to cyber attacks or hardware failures.',
  },
  {
    title: 'Use Security Software',
    description: 'Install and maintain reputable antivirus and anti-malware software on your devices.',
  },
  {
    title: 'Educate Yourself About Cybersecurity',
    description: 'Stay informed about the latest cyber threats and best practices for staying safe online.',
  },
];
    
  return (
    

    
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Cybercrime Awareness Tips</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      );}
    
    export default Awareness;
    
      

  