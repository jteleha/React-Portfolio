import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} Joel Teleha. All rights reserved.</p>
      </div>
      <div>
        <a href="https://github.com/jteleha" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/joel-teleha-402345162" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/jteleha/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;