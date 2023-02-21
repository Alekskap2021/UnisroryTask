type TimeoutT = ReturnType<typeof setTimeout>;
type ThrottleT = () => void;

// HOC для оптимизации запросов. Принимает функцию и задержку. Откладывает вызов переданной функции
// При необхоимости пожно
export const throttle = (handler: () => void, timeout: number): ThrottleT => {
  let timer: TimeoutT | null = null;

  // Возвращаем другую функцию.
  return function perform() {
    // Если таймер есть - функция уже вызвалась, выходим
    if (timer) return;

    // Если таймера нет - делаем вызов:
    timer = setTimeout(() => {
      // При необходимости можно типизировать handler как (...args: SomeType[]) => void
      // и вызывать как handler(...args), тогда мы сможем передавать сюда ивент и прочие аргументы
      // Но тут это используется в одном месте и ничего не принимает
      handler();

      // По окончании очищаем таймер:
      timer && clearTimeout(timer);

      timer = null;
    }, timeout);
  };
};
