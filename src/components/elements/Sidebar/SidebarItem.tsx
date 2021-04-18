import { Button, ButtonProps, Image, Text } from '@chakra-ui/react';

interface SidebarItemProps extends ButtonProps {
  title: string;
  icon: string;
}

const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <Button width="100%" h={16} justifyContent="flex-start">
      <Image src={icon} mr={2.5} />
      <Text>{title}</Text>
    </Button>
  );
};

export default SidebarItem;
