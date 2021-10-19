import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Icon } from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

interface Props {}

export const Profile: React.FC<Props> = () => {
	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

	return (
		<Flex
			direction={isNotSmallerScreen ? "row" : "column"}
			w="100%"
			maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
		>
			<Box alignSelf="center" px="32" py="16">
				<Heading fontWeight="extrabold" color="cyan.500" size="4xl">
					3+
				</Heading>
				<Text fontSize="2xl" color="gray.400">
					Years of Experience
				</Text>
			</Box>
			<Box alignSelf="center" px="32" py="16">
				<Text fontSize="2xl" fontWeight="bold">
					Graphic/UI Designer and Software Developer, specialized in web application development.
				</Text>
				<Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						bg="blue.400"
						h="30vh"
						w="30vh"
						justify="flex-end"
					>
						<Icon color="white" p="4" as={DiAndroid} w="24" h="24"></Icon>
						<Text color="white" p="4" fontSize="xl" fontWeight="semibold">
							Android Apps
						</Text>
					</Flex>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						ml={isNotSmallerScreen ? 4 : 0}
						bg="gray.100"
						h="30vh"
						w="30vh"
						justify="flex-end"
						_hover={{ bg: "teal.400" }}
					>
						<Icon color="black" p="4" as={DiCodeigniter} w="24" h="24"></Icon>
						<Text color="black" p="4" fontSize="xl" fontWeight="semibold">
							Flutter Apps
						</Text>
					</Flex>
					<Flex
						rounded="xl"
						direction="column"
						mt={4}
						ml={isNotSmallerScreen ? 4 : 0}
						bg="gray.100"
						h="30vh"
						w="30vh"
						justify="flex-end"
						_hover={{ bg: "green.400" }}
					>
						<Icon color="black" p="4" as={DiWebplatform} w="24" h="24"></Icon>
						<Text color="black" p="4" fontSize="xl" fontWeight="semibold">
							Web Apps
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};
