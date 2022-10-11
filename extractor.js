const extractor = (w) => {
  const a = [];
  if (w && w.navigation && w.navigation.entries()) {
    for (i of w.navigation.entries()) {
      a.push(i.url);
    }
  }
  return a;
};
