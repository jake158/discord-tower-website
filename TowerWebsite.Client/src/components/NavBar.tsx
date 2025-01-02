import {
  HStack,
  Image,
  Text,
  Tabs,
  Box,
  Icon,
  SegmentGroupValueChangeDetails,
} from '@chakra-ui/react';
import { LuSun, LuShieldCheck, LuLayoutDashboard } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';
import TowerIcon from '../assets/react.svg';
import { ColorModeButton } from './ui/color-mode';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const normalizedPath =
    location.pathname === '/' ? '/welcome' : location.pathname;

  const handleTabChanged = (details: SegmentGroupValueChangeDetails) => {
    navigate(details.value);
  };

  return (
    <HStack w="100%" justify="space-between" p="3">
      <HStack flex="1" gap="4" marginLeft="1">
        <Image src={TowerIcon} boxSize="15" />
        <Text textStyle="xl" fontWeight="bold" mt="1">
          Tower
        </Text>
      </HStack>

      <Box position="absolute" left="50%" transform="translateX(-50%)">
        <Tabs.Root
          value={normalizedPath}
          onValueChange={handleTabChanged}
          variant="line"
        >
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger value="/welcome">
              <Icon boxSize="5">
                <LuSun />
              </Icon>
              Welcome
            </Tabs.Trigger>
            <Tabs.Trigger value="/tos">
              <Icon boxSize="5">
                <LuShieldCheck />
              </Icon>
              TOS
            </Tabs.Trigger>
            <Tabs.Trigger value="/dashboard">
              <Icon boxSize="5">
                <LuLayoutDashboard />
              </Icon>
              Dashboard
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Tabs.Root>
      </Box>

      <Box flex="1" />
      <ColorModeButton marginRight="4"></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
