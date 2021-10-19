import React from "react";
import { FaGoogle, FaFacebookF, FaSpotify, FaShopify } from "react-icons/fa";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";

interface Props {}

export const Social: React.FC<Props> = () => {
	return (
		<HStack spacing="24">
			<Icon as={FaFacebookF} boxSize="50" />
			<Icon as={FaGoogle} boxSize="50" />
			<Icon as={FaSpotify} boxSize="50" />
			<Icon as={FaShopify} boxSize="50" />
		</HStack>
	);
};
