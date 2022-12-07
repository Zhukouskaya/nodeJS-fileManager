const toGreeting = () => {
  let username;
  const argv = process.argv.slice(2).toString().split('=');
  argv[1] === 'your_username' || argv[1] === '' ? username = 'Mr. Nobody' : username = argv[1];
  console.log(`Welcome to the File Manager, ${username}!\n`);
  // 'Thank you for using File Manager, Username, goodbye!'
};

export { toGreeting }