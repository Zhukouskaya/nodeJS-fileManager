const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress']; 

function handler (rl, command) {
  command = command.trim()
  try {
    if (commands.filter(word => word === command).toString() === command) {
      console.log(`command: ${command}`)
    } else {
      throw new Error ('Invalid input')
    }} catch (err) { 
      console.error ('Invalid input')
    }}

export { handler}