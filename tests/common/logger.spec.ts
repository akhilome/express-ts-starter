import { logger } from '../../src/common';

describe('Logger Util', () => {
  const consoleLogSpy = jest.spyOn(console, 'log');

  beforeEach(jest.resetAllMocks);

  it('should print string to stdout', () => {
    logger.console('hello');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith('[console]:', 'hello');
  });

  it('should pretty print object to stdout', () => {
    logger.console({ name: 'sam' });

    expect(consoleLogSpy).toBeCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      '[console]:',
      JSON.stringify({ name: 'sam' }, null, 2),
    );
  });

  it('should print error message && error stack to stdout', () => {
    logger.console(new Error('namaste'));

    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy.mock.calls[0][0]).toBe('[console]: error message >>> ');
    expect(consoleLogSpy.mock.calls[1][0]).toBe('[console]: stack trace >>> ');
  });
});
