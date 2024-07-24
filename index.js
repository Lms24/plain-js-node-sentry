require("./instrument");

const Sentry = require("@sentry/node");

Sentry.startSpan(
  {
    op: "test",
    name: "My First Test Span",
  },
  () => {
    try {
      foo();
    } catch (e) {
      Sentry.captureException(e);
    }
  }
);
