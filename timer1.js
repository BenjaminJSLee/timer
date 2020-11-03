const args = process.argv.slice(2);
for (let val of args) {
  if (!Number.isNaN(Number(val)) && Number(val) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('.');
    },Number(val) * 1000);
  }
}
