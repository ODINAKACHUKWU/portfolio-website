import React from "react";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { Header } from "./components/Header";
import { Social } from "./components/Social";
import { Profile } from "./components/Profile";

const App: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark: boolean = colorMode === "dark";

	return (
		<VStack p={5}>
			<Flex w="100%">
				<Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
					Heading
				</Heading>
				<Spacer></Spacer>
				<IconButton aria-label="Linkedin" icon={<FaLinkedin />} isRound={true}></IconButton>
				<IconButton
					aria-label="Instagram"
					ml={2}
					icon={<FaInstagram />}
					isRound={true}
				></IconButton>
				<IconButton aria-label="Github" ml={2} icon={<FaGithub />} isRound={true}></IconButton>
				<IconButton
					aria-label="Color mode"
					ml={8}
					icon={isDark ? <FaSun /> : <FaMoon />}
					isRound={true}
					onClick={toggleColorMode}
				></IconButton>
			</Flex>
			<Header></Header>
			<Social></Social>
			<Profile></Profile>
		</VStack>
	);
};

export default App;
