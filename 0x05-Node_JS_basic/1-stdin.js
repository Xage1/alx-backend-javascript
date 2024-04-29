process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
