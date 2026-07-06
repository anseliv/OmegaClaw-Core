module.exports = {
  branchPrefix: "main",
  username: "renovate-anseliv",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: false,
  platform: "github",
  forkProcessing: "disable",
  repositories: ["anseliv/OmegaClaw-Core"],
  "extends": ["config:best-practices"],
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
      dependencyDashboardApproval: false,
      minimumReleaseAge: null,
    },
  ],
};
