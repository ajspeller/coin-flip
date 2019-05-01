function choice(arr) {
  let rndIdx = Math.floor(Math.random() * 2);
  return arr[rndIdx];
}

export { choice };