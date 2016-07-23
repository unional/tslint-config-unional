let oneLine = 2

if (oneLine) {
  oneLine = 1
}
else {
  oneLine = 3
}

try {
  oneLine = 2
}
catch (e) {
  oneLine = 1
}
finally {
  oneLine = 4
}
