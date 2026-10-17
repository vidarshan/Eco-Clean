import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Brand green. Index 6 is the primary shade used by filled buttons.
const eco: MantineColorsTuple = [
  "#f1fbec",
  "#e0f5d6",
  "#c1ebad",
  "#9fdf80",
  "#82d559",
  "#6dce3e",
  "#5fc92f",
  "#4eb220",
  "#429f19",
  "#328a0d",
];

const RADIUS = "md";
const FONT = "var(--font-sans), ui-serif, Georgia, serif";

const inputDefaults = { defaultProps: { radius: RADIUS, size: "sm" } };

export const theme = createTheme({
  colors: { eco },
  primaryColor: "eco",
  primaryShade: 7,
  defaultRadius: RADIUS,
  radius: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px" },
  fontFamily: FONT,
  headings: { fontFamily: FONT, fontWeight: "650" },
  shadows: {
    xs: "0 1px 2px rgba(15, 23, 42, 0.05)",
    sm: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
    md: "0 4px 12px rgba(15, 23, 42, 0.07)",
    lg: "0 12px 28px rgba(15, 23, 42, 0.09)",
  },
  components: {
    Button: { defaultProps: { radius: RADIUS, size: "sm", fw: 600 } },
    ActionIcon: { defaultProps: { radius: RADIUS, variant: "subtle", color: "gray" } },
    Badge: { defaultProps: { radius: "xl", size: "md", fw: 600 } },
    Paper: { defaultProps: { radius: "lg", withBorder: true, shadow: "xs" } },
    Card: { defaultProps: { radius: "lg", withBorder: true, shadow: "xs", padding: "lg" } },
    ThemeIcon: { defaultProps: { radius: RADIUS } },
    Modal: { defaultProps: { radius: "lg", centered: true, overlayProps: { blur: 3 } } },
    Drawer: { defaultProps: { radius: "lg" } },
    Menu: { defaultProps: { radius: RADIUS, shadow: "md" } },
    Popover: { defaultProps: { radius: RADIUS, shadow: "md" } },
    TextInput: inputDefaults,
    PasswordInput: inputDefaults,
    Textarea: inputDefaults,
    Select: inputDefaults,
    MultiSelect: inputDefaults,
    NumberInput: inputDefaults,
    DatePickerInput: inputDefaults,
    DateInput: inputDefaults,
    TimeInput: inputDefaults,
    SegmentedControl: inputDefaults,
    Checkbox: { defaultProps: { size: "sm" } },
    Radio: { defaultProps: { size: "sm" } },
  },
});
