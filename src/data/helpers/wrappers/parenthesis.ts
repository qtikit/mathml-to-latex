import { Wrapper } from './wrapper';

export class ParenthesisWrapper {
  protected _open = '\\left(';
  protected _close = '\\right)';
  protected _closed = /^(\\left\(\\right.).*(\\left.\\right\))$/i;

  wrap(str: string): string {
    return new Wrapper(this._open, this._close).wrap(str);
  }

  wrapIfMoreThanOneChar(str: string): string {
    if (str.length <= 1 || this._closed.test(str) == true) return str;
    return this.wrap(str);
  }
}
