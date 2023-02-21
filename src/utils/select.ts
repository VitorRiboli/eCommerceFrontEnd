export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: "var(--color-font-placeholder)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none"
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    display: "none"
  }),
  option: (provided: any) => ({
    ...provided,
    color: "var(--color-font-primary)",
  }),

} 