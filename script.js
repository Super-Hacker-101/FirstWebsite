(function(){
  const counterEl = document.getElementById('counter');
  const incBtn = document.getElementById('increment');
  const decBtn = document.getElementById('decrement');
  const resetBtn = document.getElementById('reset');
  const STORAGE_KEY = 'counterValue';

  let value = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (Number.isNaN(value)) value = 0;

  function render(){
    counterEl.textContent = value;
    localStorage.setItem(STORAGE_KEY, String(value));
  }

  incBtn.addEventListener('click', ()=>{ value++; render(); });
  decBtn.addEventListener('click', ()=>{ value--; render(); });
  resetBtn.addEventListener('click', ()=>{ value = 0; render(); });

  window.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowUp') { value++; render(); }
    else if (e.key === 'ArrowDown') { value--; render(); }
    else if (e.key.toLowerCase() === 'r') { value = 0; render(); }
  });

  render();
})();
//Oh you are searching here? here is the sercond part : _r4bb1_z1dn1