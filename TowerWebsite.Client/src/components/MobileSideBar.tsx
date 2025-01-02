import {
  DrawerRoot,
  DrawerPositioner,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerTitle,
  VStack,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';

interface Props {
  tabs: { path: string; label: string; icon: JSX.Element }[];
  currentTab: string;
  isOpen: boolean;
  onClosed?: (newPath?: string) => void;
}

const MobileSideBar = ({
  tabs,
  currentTab,
  isOpen,
  onClosed = () => null,
}: Props) => {
  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={() => onClosed()}
      placement="start"
      size="xs"
    >
      <DrawerBackdrop />
      <DrawerPositioner>
        <DrawerContent>
          <DrawerHeader paddingLeft={4}>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>

          <DrawerBody mt={3} paddingLeft={3} paddingRight={3}>
            <VStack align="stretch" gap="3">
              {tabs.map((tab) => (
                <HStack
                  key={tab.path}
                  p="3"
                  bg={currentTab === tab.path ? 'blue.500' : ''}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => onClosed(tab.path)}
                >
                  <Box as={tab.icon.type} boxSize="5" />
                  <Text fontWeight="medium" textStyle="md" mt="1">
                    {tab.label}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerPositioner>
    </DrawerRoot>
  );
};

export default MobileSideBar;
