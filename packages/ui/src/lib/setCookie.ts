export const setCookie = (value: string) => {
  if (
    globalThis && globalThis instanceof Window
    && globalThis.document && globalThis.document instanceof Document
  ) {
    // eslint-disable-next-line unicorn/no-document-cookie
    globalThis.document.cookie = value;
  }
};
