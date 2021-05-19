/*global window EventSource fetch */

const version = process.env.REACT_APP_VERSION;

// Missing support
// :load <url> - to inject new DOM

const welcome = () => ({
  value: `Use <strong>:help</strong> to show console commands
`,
  html: true,
});

const help = () => ({
  value: `:theme dark|light
:clear
:history
:about
:version
copy(<value>) and $_ for last value

${about().value}`,
  html: true,
});

const about = () => ({
  value:
    'Built by <a href="https://twitter.com/rem" target="_blank">@rem</a> • <a href="https://github.com/remy/jsconsole" target="_blank">open source</a> • <a href="https://www.paypal.me/rem/9.99usd" target="_blank">donate</a>',
  html: true,
});

const set = async ({ args: [key, value], app }) => {
  switch (key) {
    case 'theme':
      if (['light', 'dark'].includes(value)) {
        app.props.setTheme(value);
      }
      break;
    case 'layout':
      if (['top', 'bottom'].includes(value)) {
        app.props.setLayout(value);
      }
      break;
    default:
  }
};

const theme = async ({ args: [theme], app }) => {
  if (['light', 'dark'].includes(theme)) {
    app.props.setTheme(theme);
    return;
  }

  return 'Try ":theme dark" or ":theme light"';
};

const history = async ({ app, args: [n = null] }) => {
  const history = app.context.store.getState().history;
  if (n === null) {
    return history.map((item, i) => `${i}: ${item.trim()}`).join('\n');
  }

  // try to re-issue the historical command
  const command = history.find((item, i) => i === n);
  if (command) {
    app.onRun(command);
  }

  return;
};

const clear = ({ console }) => {
  console.clear();
};

const commands = {
  help,
  theme,
  clear,
  history,
  set,
  welcome,
  version: () => version,
};

export default commands;
