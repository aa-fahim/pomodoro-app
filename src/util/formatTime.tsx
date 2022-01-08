const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

export {
  formatTime
}