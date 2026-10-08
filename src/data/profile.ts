/** Central profile + social links — single source of truth for sections. */

export const profile = {
  name: "Ajeet Baghel",
  role: "Software Engineer",
  email: "", // TODO: fill in before wiring the contact form
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ajeetbaghel/",
    },
    {
      label: "GitHub",
      url: "https://github.com/Ajeet-Baghel",
    },
  ],
} as const;
