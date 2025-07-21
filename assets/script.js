// Fake Terminal for Contact Page
if (document.getElementById('fake-terminal')) {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.querySelector('#fake-terminal .terminal-output');

  const commands = {
    help: 'Available commands: <span class="cmd">email</span>, <span class="cmd">socials</span>, <span class="cmd">hobbies</span>, <span class="cmd">clear</span>',
    email: 'Email: <a href="mailto:f4z41u@gmail.com">f4z41u@gmail.com</a>',
    socials: 'LinkedIn, GitHub, Medium, LeakSnitch',
    hobbies: 'Reading, Travel, Memes, Blogging on Medium',
    clear: ''
  };

  function glitchType(text, callback) {
    let i = 0;
    terminalOutput.innerHTML = '';
    function type() {
      if (i < text.length) {
        terminalOutput.innerHTML += text[i];
        i++;
        setTimeout(type, Math.random() * 30 + 10);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value.trim().toLowerCase();
      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
      } else if (commands[cmd]) {
        glitchType(commands[cmd]);
      } else {
        glitchType('Unknown command. Type <span class="cmd">help</span>.');
      }
      terminalInput.value = '';
    }
  });
} 