module.exports = {
  branchPrefix: "main",
  username: "renovate-anseliv",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: false,
  platform: "github",
  forkProcessing: "disable",
  repositories: ["anseliv/OmegaClaw-Core"],
  extends: ["config:recommended", ":dependencyDashboardApproval"],
  dependencyDashboardAutoclose: true,
  prCreation: "approval",
  prConcurrentLimit: 10,
  prHourlyLimit: 2,
  reviewers: "anseliv",
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      minimumReleaseAge: "3",
    },
  ],
};
