import { useColorMode } from '@chakra-ui/color-mode';
import { Switch } from '@chakra-ui/switch';
import { Fragment } from 'react';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Fragment>
      <Switch onChange={toggleColorMode} />
    </Fragment>
  );
};

export default ColorModeToggle;
