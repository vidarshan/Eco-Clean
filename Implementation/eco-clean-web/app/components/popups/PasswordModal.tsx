"use client";

import { Modal, Text, Button, Group, Code, Paper, Stack } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

export function PasswordModal({
  opened,
  onClose,
  password,
}: {
  opened: boolean;
  onClose: () => void;
  password: string;
}) {
  const clipboard = useClipboard();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Temporary Password"
      centered
    >
      <Stack gap="md">
        <Paper withBorder radius="md" p="lg">
          <Stack gap={4}>
            <Text size="xs" fw={800} c="dimmed">
              Credential Handoff
            </Text>
            <Text fw={800}>Temporary password</Text>
            <Text size="sm" c="dimmed">
              Copy this password and share it with the user before closing the modal.
            </Text>
          </Stack>
        </Paper>

        <Paper withBorder radius="md" p="md">
          <Code block>{password}</Code>
        </Paper>

        <Paper withBorder radius="md" p="md">
          <Group justify="flex-end">
            <Button onClick={() => clipboard.copy(password)}>
              {clipboard.copied ? "Copied!" : "Copy"}
            </Button>

            <Button variant="light" onClick={onClose}>
              Close
            </Button>
          </Group>
        </Paper>
      </Stack>
    </Modal>
  );
}
