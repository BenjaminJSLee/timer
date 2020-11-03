const args = process.argv.slice(2);
for (let val of args) {
  val = Number(val);
  if (!Number.isNaN(val) && val >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('.');
    },val * 1000);
  }
}
