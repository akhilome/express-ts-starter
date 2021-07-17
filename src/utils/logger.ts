/* eslint-disable no-console */
type UNKNOWN_ENTITY = Record<string, unknown> | unknown[];

export class Logger {
  private prettify(object: UNKNOWN_ENTITY): string {
    return JSON.stringify(object, null, 2);
  }

  private isErrorInstance(entity: unknown): boolean {
    return entity instanceof Error;
  }

  private canPrettyPrint(entity: unknown): boolean {
    return typeof entity === 'object' && !this.isErrorInstance(entity);
  }

  public console(data: unknown): void {
    if (this.isErrorInstance(data)) {
      const errorObject = data as Error;
      const errorStack = errorObject.stack;

      /*
        node environment checks can happen here to
        know whether or not to dump errors to stdout.

        For ex., we could decide to only print to stdout
        when process.env.NODE_ENV is set to development.
      */

      console.log('[console]: error message >>> ', errorObject.message);
      errorStack && console.log('[console]: stack trace >>> ', errorStack);
      return;
    }

    if (this.canPrettyPrint(data)) {
      return console.log('[console]:', this.prettify(data as UNKNOWN_ENTITY));
    }

    return console.log('[console]:', data);
  }
}

export default new Logger();
