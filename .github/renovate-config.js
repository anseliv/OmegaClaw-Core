module.exports = {
  branchPrefix: "main",
  username: "renovate-anseliv",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: false,
  platform: "github",
  forkProcessing: "enabled",
  dryRun: "full",
  repositories: ["anseliv/OmegaClaw-Core"],
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
