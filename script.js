//your JS code here. If required.
const inputEl = document.getElementById('ip');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// helper function: resolves after `ms` ms with the given `value`
function waitResolve(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

btn.onclick = function () {
  const raw = inputEl.value;

  if (raw === '' || raw === null) {
    alert('Please enter a number');
    return;
  }

  const num = Number(raw);
  if (Number.isNaN(num)) {
    alert('Please enter a valid number');
    return;
  }

  btn.disabled = true;
  output.textContent = ''; // clear previous result

  // 1) Initial promise: after 2 seconds → show the original number
  waitResolve(num, 2000)
    .then((value) => {
      output.textContent = `Result: ${value}`;

      // 2) Multiply by 2 → after 1 additional second
      const multiplied = value * 2;
      return waitResolve(multiplied, 1000);
    })
    .then((value) => {
      output.textContent = `Result: ${value}`;

      // 3) Subtract 3 → after 1 additional second
      const subtracted = value - 3;
      return waitResolve(subtracted, 1000);
    })
    .then((value) => {
      output.textContent = `Result: ${value}`;

      // 4) Divide by 2 → after 1 additional second
      const divided = value / 2;
      return waitResolve(divided, 1000);
    })
    .then((value) => {
      output.textContent = `Result: ${value}`;

      // 5) Add 10 → after 1 additional second
      const finalVal = value + 10;
      return waitResolve(finalVal, 1000);
    })
    .then((finalValue) => {
      output.textContent = `Final Result: ${finalValue}`;
    })
    .finally(() => {
      btn.disabled = false;
    });
};
