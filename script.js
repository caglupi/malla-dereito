fetch('data_DER.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('malla');
    for (let semestre in data) {
      const box = document.createElement('div');
      box.className = 'semestre';
      const title = document.createElement('h2');
      title.textContent = semestre.toUpperCase();
      box.appendChild(title);

      data[semestre].forEach(ramo => {
        const ramoDiv = document.createElement('div');
        ramoDiv.className = 'ramo';
        ramoDiv.textContent = `${ramo[0]} (${ramo[1]}) - ${ramo[2]} créditos`;
        box.appendChild(ramoDiv);
      });

      container.appendChild(box);
    }
  });
