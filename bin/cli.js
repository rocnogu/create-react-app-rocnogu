import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdout: `inherit` });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitChechoutCommand = `git clone --depth 1 https://github.com/rocnogu/create-react-app-rocnogu ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`cloning ${repoName}`);

const checkedOut = runCommand(gitChechoutCommand);
if (!checkedOut) {
  process.exit(code - 1);
}

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  process.exit(code - 1);
}

console.log(`Congratulations! You are ready. Follow the instructions to start`);
console.log(`cd ${repoName} && npm start`);
