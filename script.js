function congrats_thing() {
  if (!finishUni1.classList.contains('hide')) {
    congrat.classList.remove('hide')
  }
}

university_Stage1.onchange = congrats_thing;
