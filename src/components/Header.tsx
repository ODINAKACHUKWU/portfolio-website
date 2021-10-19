import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

interface Props {}

export const Header: React.FC<Props> = () => {
	const { colorMode } = useColorMode();
	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

	const isDark: boolean = colorMode === "dark";

	return (
		<Stack>
			<Circle
				position="absolute"
				bg="blue.100"
				opacity="0.1"
				w="300px"
				h="300px"
				alignSelf="flex-end"
			/>
			<Flex
				direction={isNotSmallerScreen ? "row" : "column"}
				spacing="200px"
				p={isNotSmallerScreen ? "32" : "0"}
				alignSelf="flex-start"
			>
				<Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
					<Text fontSize="5xl" fontWeight="semibold">
						Hi! I am
					</Text>
					<Text
						fontSize="7xl"
						fontWeight="bold"
						bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
						bgClip="text"
					>
						Odinakachukwu Ezeobika
					</Text>
					<Text color={isDark ? "gray.200" : "gray.500"}>
						Software Engineer - Javascript (NodeJS, AdonisJS, ReactJs), Rails (Ruby on Rails)
					</Text>
					<Button mt={8} colorScheme="blue" onClick={() => window.open("https://pawan.live")}>
						Hire Me
					</Button>
				</Box>
				<Image
					alignSelf="center"
					mt={isNotSmallerScreen ? "0" : "12"}
					mb={isNotSmallerScreen ? "12" : "0"}
					borderRadius="full"
					bgColor="transparent"
					boxShadow="lg"
					boxSize="300px"
					src="https://avatars.githubusercontent.com/u/41029613?v=4"
					alt="Profile picture"
				/>
			</Flex>
		</Stack>
	);
};
