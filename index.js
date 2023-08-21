const core = require('@actions/core');
const github = require('@actions/github');

try {
    const branch = core.getInput('branch');
    let manifest = "application.yaml"
    if (branch.indexOf("release/") != -1 || branch.indexOf("release-") != -1 || branch.indexOf("develop") != -1) {
        manifest = "application-stable.yaml"
    }
    core.setOutput("manifest", manifest);
    console.log(`The manifest: ${manifest}`);
} catch (error) {
    core.setFailed(error.message);
}
