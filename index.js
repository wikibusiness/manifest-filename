const core = require('@actions/core');
const github = require('@actions/github');

try {
    const branch = core.getInput('branch');
    let manifest = "templates-default"
    if (branch.indexOf("release/") != -1 || branch.indexOf("release-") != -1 || branch.indexOf("develop") != -1) {
        manifest = "templates-stable"
    }
    core.setOutput("manifest", manifest);
    console.log(`The manifest: ${manifest}`);
} catch (error) {
    core.setFailed(error.message);
}
