import {
  Button,
  Card,
  Divider,
  Group,
  List,
  Progress,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useState } from "react";
import {
  IoAlertCircle,
  IoArrowDown,
  IoArrowUp,
  IoCheckmarkCircle,
  IoSparkles,
} from "@/lib/icons";
import { TaskAssistantResponse } from "@/lib/ai/schemas";

type Props = {
  data: TaskAssistantResponse;
};

export default function AiTaskAssistantCard({ data }: Props) {
  const [collapse, setCollapse] = useState(false);
  const totalMinutes = data.timePlan.reduce(
    (sum, item) => sum + item.minutes,
    0,
  );

  return (
    <Card radius="lg" withBorder shadow="sm" p="md">
      <Stack gap="md">
        <Group justify="space-between" align="center">
          <Group gap="xs" justify="space-between">
            <ThemeIcon radius="lg" variant="filled" color="grape">
              <IoSparkles size={16} />
            </ThemeIcon>
            <Title order={4}>AI Overview</Title>
          </Group>
          <Button
            radius="xl"
            size="xs"
            variant="white"
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "Collapse" : "Expand"}
          </Button>
        </Group>
        {collapse && (
          <>
            <Stack gap={4}>
              <Text fw={600}>Quick Brief</Text>
              <Text size="sm" c="dimmed">
                {data.brief}
              </Text>
            </Stack>

            {data.riskReason && (
              <Stack gap={4}>
                <Text fw={600}>Risk Insight</Text>
                <Text size="sm" c="dimmed">
                  {data.riskReason}
                </Text>
              </Stack>
            )}

            {data.priorityOrder.length > 0 && (
              <Stack gap={4}>
                <Text fw={600}>Priority Order</Text>

                <List
                  size="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon
                      radius="lg"
                      size={18}
                      variant="filled"
                      color="grape"
                    >
                      <IoCheckmarkCircle size={12} />
                    </ThemeIcon>
                  }
                >
                  {data.priorityOrder.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </Stack>
            )}

            {data.timePlan.length > 0 && (
              <Stack gap="xs">
                <Text fw={600}>Suggested Time Plan</Text>

                <Stack gap="xs">
                  {data.timePlan.map((item, index) => {
                    const percent =
                      totalMinutes > 0
                        ? (item.minutes / totalMinutes) * 100
                        : 0;

                    return (
                      <Stack gap={4} key={index} p="xs">
                        <Group justify="space-between" align="center">
                          <Text size="sm">{item.label}</Text>
                          <Text size="xs" c="dimmed">
                            {item.minutes} min
                          </Text>
                        </Group>
                        <Progress value={percent} radius="xl" size="sm" />
                        {index !== data.timePlan.length - 1 ? (
                          <Divider mt={6} />
                        ) : null}
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            )}

            {data.alerts.length > 0 && (
              <Stack gap={4}>
                <Text fw={600}>Alerts</Text>

                <List
                  size="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon
                      radius="lg"
                      size={18}
                      variant="filled"
                      color="yellow"
                    >
                      <IoAlertCircle size={12} />
                    </ThemeIcon>
                  }
                >
                  {data.alerts.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </Stack>
            )}

            {data.checklist.length > 0 && (
              <Stack gap={4}>
                <Text fw={600}>Checklist</Text>
                <List
                  size="sm"
                  spacing="xs"
                  icon={
                    <ThemeIcon
                      radius="lg"
                      size={18}
                      variant="filled"
                      color="grape"
                    >
                      <IoCheckmarkCircle size={12} />
                    </ThemeIcon>
                  }
                >
                  {data.checklist.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </Stack>
            )}

            {data.completionDraft && (
              <Stack gap={4}>
                <Text fw={600}>Completion Draft</Text>
                <Text size="sm" c="dimmed">
                  {data.completionDraft}
                </Text>
              </Stack>
            )}
          </>
        )}
      </Stack>
    </Card>
  );
}
