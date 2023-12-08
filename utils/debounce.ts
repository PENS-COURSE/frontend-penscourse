export function debounce(func: Function, timeout: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: Function[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
