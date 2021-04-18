import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/popover';
import { Fragment, useState } from 'react';
import {
  Badge,
  Button,
  Flex,
  Text,
  Box,
  Avatar,
  Divider,
} from '@chakra-ui/react';
import { ColorModeToggle } from '@components/elements';
import { ButtonPopUp } from '@components/elements';

const ProfileDropdown = () => {
  const [detailMenu, setDetailMenu] = useState({ isOpen: false, state: null });

  const handleOpenMenu = (state) => {
    setDetailMenu({ isOpen: !detailMenu.isOpen, state: state });
  };

  const title = () => {
    switch (detailMenu.state) {
      case 'changeColorMode':
        console.log('change color mode');
        return 'Tema';
        break;
      case 'changeLanguage':
        console.log('change language');
        return 'Bahasa';
        break;
      default:
        return '';
        break;
    }
  };

  const renderDetailMenu = () => {
    switch (detailMenu.state) {
      case 'changeColorMode':
        console.log('change color mode');
        return (
          <Flex p={4} justifyContent="space-between" align="center">
            <Text>Tema Gelap</Text>
            <ColorModeToggle />
          </Flex>
        );
        break;
      case 'changeLanguage':
        console.log('change language');
        return (
          <Fragment>
            <ButtonPopUp
              title="Bahasa Indonesia"
              icon="/assets/indonesia.svg"
              onClick={() => console.log('Bahasa Indonesia')}
            />
            <ButtonPopUp
              title="English"
              icon="/assets/english.svg"
              onClick={() => console.log('Bahasa Inggris')}
            />
          </Fragment>
        );
        break;
      default:
        return '';
        break;
    }
  };

  console.log(detailMenu);

  return (
    <Fragment>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button p={0} pr={4} borderRadius={100}>
            <Flex align="center">
              <Avatar src="https://github.com/mhmdbhsk.png" w="40px" h="40px" />
              <Box ml="3">
                <Text fontWeight="bold">
                  Muhammad Bhaska
                  <Badge ml="1" colorScheme="green">
                    GURU
                  </Badge>
                </Text>
              </Box>
            </Flex>
          </Button>
        </PopoverTrigger>

        <PopoverContent w="270px" _focus={{ boxShadow: 'none', outline: 0 }}>
          <PopoverArrow />
          {!detailMenu.isOpen && (
            <PopoverHeader fontWeight="semibold" p={0} h="78px">
              <Button
                w="100%"
                bg="transparent"
                borderRadius={0}
                p={4}
                h="100%"
                justifyContent="flex-start"
              >
                <Flex align="center">
                  <Avatar src="https://github.com/mhmdbhsk.png" />
                  <Box ml="3">
                    <Text fontWeight="bold" maxW="178px" w="100%" isTruncated>
                      Muhammad Bhaska
                    </Text>
                    <Text
                      fontWeight={400}
                      color="#8c8c8c"
                      align="start"
                      fontSize={12}
                      mt={1}
                    >
                      Lihat Profil
                    </Text>
                  </Box>
                </Flex>
              </Button>
            </PopoverHeader>
          )}

          <PopoverBody px={0}>
            {detailMenu.isOpen ? (
              <Fragment>
                <ButtonPopUp
                  title={title()}
                  back
                  onClick={() => handleOpenMenu(null)}
                />
                {renderDetailMenu()}
              </Fragment>
            ) : (
              <Fragment>
                <ButtonPopUp help />

                <Divider my={2} w="90%" mx="auto" />

                <ButtonPopUp
                  title="Tema"
                  icon="/assets/moon.svg"
                  onClick={() => handleOpenMenu('changeColorMode')}
                />
                <ButtonPopUp
                  title="Bahasa"
                  icon="/assets/language.svg"
                  onClick={() => handleOpenMenu('changeLanguage')}
                />
                <ButtonPopUp
                  title="Keluar"
                  icon="/assets/signout.svg"
                  onClick={() => console.log('Signed out')}
                />
              </Fragment>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Fragment>
  );
};

export default ProfileDropdown;
