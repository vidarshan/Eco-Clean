import { ActionIcon, Box, Flex, Group, Text, ThemeIcon } from "@mantine/core";
import { IoArrowBack, IoHome, IoMenu, IoRefresh } from "@/lib/icons";

interface Props {
  onClick: () => void;
  back: boolean;
  title: string;
  onRefresh?: () => void;
  refreshing?: boolean;
  onHome?: () => void;
}

const TopBar = ({
  back,
  onClick,
  title,
  onRefresh,
  refreshing,
  onHome,
}: Props) => {
  return (
    <Box
      pos="sticky"
      top={0}
      style={{
        zIndex: 120,
        paddingTop: "max(env(safe-area-inset-top), 0.15rem)",
      }}
    >
      <Group
        justify="space-between"
        align="center"
        gap="sm"
        py="10px"
        px="sm"
        mih={{ base: "3.7rem", xs: "3.9rem" }}
      >
        <Flex align="center" gap="xs" miw={0} flex={1}>
          <ThemeIcon
            variant="light"
            color="lime"
            radius="lg"
            size={42}
            onClick={onClick}
          >
            {back ? <IoArrowBack size={22} /> : <IoMenu size={24} />}
          </ThemeIcon>

          <Box style={{ minWidth: 0, flex: 1 }}>
            <Text size="lg" fw={700} truncate>
              {title}
            </Text>
          </Box>
        </Flex>

        <Group gap="xs">
          {onHome ? (
            <ActionIcon
              radius="lg"
              size={42}
              variant="light"
              aria-label="Go home"
              onClick={onHome}
            >
              <IoHome size={20} />
            </ActionIcon>
          ) : null}

          <ActionIcon
            radius="lg"
            size={42}
            variant="light"
            aria-label="Refresh"
            onClick={onRefresh}
            disabled={!onRefresh || refreshing}
            style={{ visibility: onRefresh ? "visible" : "hidden" }}
          >
            <IoRefresh size={20} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
};

export default TopBar;
