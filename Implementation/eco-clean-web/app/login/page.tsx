"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { IoCloseCircle } from "@/lib/icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    window.location.assign(res?.url || "/");
  }

  return (
    <Box mih="100vh">
      <Container size="sm" py="xl" h="100vh">
        <Flex h="100%" align="center" justify="center">
          <Card
            withBorder
            radius="xl"
            p="xl"
            w="100%"
            maw={520}
          >
            <Stack gap="lg">
              <Flex justify="center">
                <Box p="sm">
                  <Image
                    src="/logo.png"
                    alt="Eco Clean"
                    width={88}
                    height={88}
                    priority
                  />
                </Box>
              </Flex>

              <Stack gap={6} ta="center">
                <Title order={1} fz="2rem">
                  Log In
                </Title>
                <Text size="sm" c="dimmed">
                  Sign in to continue to the Eco Clean workspace.
                </Text>
              </Stack>

              {error && (
                <Alert
                  variant="light"
                  color="red"
                  radius="lg"
                  icon={<IoCloseCircle />}
                >
                  {error}
                </Alert>
              )}

              <Stack gap="md">
                <TextInput
                  label="Email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  size="md"
                  radius="lg"
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  size="md"
                  radius="lg"
                />
              </Stack>

              <Button
                fullWidth
                size="md"
                radius="xl"
                loading={loading}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </Stack>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
}
