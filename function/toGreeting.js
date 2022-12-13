let username;
const toGreeting = () => {
  const argv = process.argv.slice(2).toString().split('=');
  argv[1] === 'your_username' || argv[1] === '' ? username = 'Mr. Nobody' : username = argv[1];
  console.log(`Welcome to the File Manager, ${username}!\n`);
};

export { toGreeting, username }