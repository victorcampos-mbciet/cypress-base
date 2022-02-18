module.exports = (on) => {
  on('task', {
    log(message) {
      console.log(
        '{task.log[' + new Date().toLocaleTimeString() + ']: ' + message + ' }',
      );
      return null;
    },
  });
};