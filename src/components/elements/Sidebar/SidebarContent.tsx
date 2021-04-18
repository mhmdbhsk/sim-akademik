import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import { SidebarItem } from '.';

interface SidebarContentProps {
  onClick?: Function;
  children?: React.ReactNode;
}

const SidebarContent = ({ onClick, children }: SidebarContentProps) => {
  return <VStack h="100%">{children}</VStack>;
};

export default SidebarContent;
