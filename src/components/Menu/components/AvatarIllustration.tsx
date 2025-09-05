import { Image } from '@chakra-ui/react';

import profilePicIllustration from '../../../assets/images/profile-pic-illustration.jpeg';

export const AvatarIllustration: React.FC = () => {
  return (
    <Image
      src={profilePicIllustration}
      alt="Solomon's avatar illustration"
      w="60px"
      h="60px"
      rounded="full"
      objectFit="cover"
      objectPosition="top"
    />
  );
};
