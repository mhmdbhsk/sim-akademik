import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Circle, Flex, Image, Box, Text } from '@chakra-ui/react';

interface ButtonPopUpProps {
  icon?: string;
  title?: string;
  onClick?: () => void;
  help?: boolean;
  back?: boolean;
}

const ButtonPopUp = ({
  icon,
  title,
  onClick,
  help,
  back,
}: ButtonPopUpProps) => {
  return help ? (
    <Button
      w="100%"
      h="67px"
      justifyContent="flex-start"
      bg="transparent"
      borderRadius={0}
    >
      <Flex align="center">
        <Circle size="40px" bg="#484848" color="white">
          <Image src="/assets/help.svg" alt="Beri Masukan" />
        </Circle>
        <Box ml={3} w="100%">
          <Text align="start">Beri Masukan</Text>
          <Text
            fontWeight={400}
            color="#8c8c8c"
            align="start"
            fontSize={12}
            mt={1}
          >
            <Text>Bantu kami menyempurnakan</Text>
            <Text>layanan kami</Text>
          </Text>
        </Box>
      </Flex>
    </Button>
  ) : (
    <Button
      w="100%"
      h="60px"
      justifyContent="flex-start"
      bg="transparent"
      borderRadius={0}
      onClick={onClick}
    >
      <Flex align="center">
        <Circle size="40px" bg="#484848" color="white">
          {back ? <ArrowBackIcon /> : <Image src={icon} alt={title} />}
        </Circle>
        <Box ml={3} w="100%">
          <Text align="start">{title}</Text>
        </Box>
      </Flex>
    </Button>
  );
};

export default ButtonPopUp;
