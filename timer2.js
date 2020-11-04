const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
    process.stdout.write('beep!\n');
  } else if (/[1-9]/g.test(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('beep!\n');
    }, Number(key) * 1000);
  }
});