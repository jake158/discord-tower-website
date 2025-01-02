import { HStack, Image, Text, Tabs, Box } from '@chakra-ui/react';
import {
  LuSun,
  LuShieldCheck,
  LuLayoutDashboard,
  LuMenu,
} from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router-dom';
import TowerIcon from '../assets/react.svg';
import { ColorModeButton } from './ui/color-mode';
import { useState } from 'react';
import MobileSideBar from './MobileSideBar';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const normalizedPath =
    location.pathname === '/' ? '/welcome' : location.pathname;

  const tabs = [
    { path: '/welcome', label: 'Welcome', icon: <LuSun /> },
    { path: '/tos', label: 'TOS', icon: <LuShieldCheck /> },
    { path: '/dashboard', label: 'Dashboard', icon: <LuLayoutDashboard /> },
  ];

  const handleSidebarClosed = (path?: string) => {
    setSidebarOpen(false);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <MobileSideBar
        tabs={tabs}
        currentTab={normalizedPath}
        isOpen={isSidebarOpen}
        onClosed={handleSidebarClosed}
      />

      <HStack w="100%" justify="space-between" p="3">
        <HStack flex="1" gap="4" marginLeft="1">
          <Box
            as={LuMenu}
            hideFrom="lg"
            boxSize="7"
            cursor="pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          />
          <Image src={TowerIcon} boxSize="15" hideBelow="lg" />
          <Text textStyle="xl" fontWeight="bold" mt="1">
            Tower
          </Text>
        </HStack>

        <Box
          hideBelow="lg"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          <Tabs.Root
            value={normalizedPath}
            onValueChange={(details) => navigate(details.value)}
            variant="line"
          >
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
              {tabs.map((tab) => (
                <Tabs.Trigger key={tab.path} value={tab.path}>
                  <Box as={tab.icon.type} boxSize="5" />
                  {tab.label}
                </Tabs.Trigger>
              ))}
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
          </Tabs.Root>
        </Box>

        <Box flex="1" />
        <ColorModeButton marginRight="4" />
      </HStack>
    </>
  );
};

export default NavBar;
