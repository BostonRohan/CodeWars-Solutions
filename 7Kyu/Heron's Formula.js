function heron(a,b,c) {
  //Establishing variable.
    const s = (a+b+c)/2;
    //Applying Heron's formula
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  heron(3,4,5)