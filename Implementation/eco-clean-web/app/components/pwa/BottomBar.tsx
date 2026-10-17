"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Group,
  Paper,
  Text,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";
import {
  IoCalendarClear,
  IoCheckbox,
  IoPerson,
  IoTime,
} from "@/lib/icons";
import { JSX } from "react";

type Tab = {
  href: string;
  label: string;
  Icon: JSX.Element;
};

const TABS: Tab[] = [
  { href: "/staff/tasks", label: "Tasks", Icon: <IoCheckbox /> },
  { href: "/staff/apply-leave", label: "Time-off", Icon: <IoCalendarClear /> },
  { href: "/staff/enter-availability", label: "Hours", Icon: <IoTime /> },
  { href: "/staff/profile", label: "Profile", Icon: <IoPerson /> },
];

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <Paper
      withBorder
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      radius={0}
    >
      <Group justify="space-around" py="xs" px="xs" wrap="nowrap">
        {TABS.map(({ href, label, Icon }) => {
          const active =
            pathname === href || (href !== "/" && pathname?.startsWith(href));

          return (
            <UnstyledButton
              component={Link}
              href={href}
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <ThemeIcon
                size={34}
                radius="xl"
                variant={active ? "filled" : "light"}
                color={active ? "lime" : "gray"}
              >
                {Icon}
              </ThemeIcon>
              <Text fw={700} size="xs" c={active ? "lime" : "dimmed"}>
                {label}
              </Text>
            </UnstyledButton>
          );
        })}
      </Group>
    </Paper>
  );
}
