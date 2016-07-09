export default function createLogger(mount) {
  const buffer = [];
  const container = document.createElement('pre');

  mount.innerHTML = '';
  mount.appendChild(container);

  function checkBuffer() {
    if (buffer.length > 0) {
      const line = buffer[0];
      const child = document.createTextNode(line[0]);
      const remainder = line.slice(1);

      if (remainder) {
        buffer[0] = remainder;
      } else {
        buffer.shift();
      }

      container.appendChild(child);
    }

    requestAnimationFrame(checkBuffer);
  }

  function log(...messages) {
    const messageString = `> ${messages.join(' ')}\n`;
    buffer.push(messageString);
  }

  function clear() {
    container.innerHTML = '';
  }

  checkBuffer();

  return { log, clear };
}
