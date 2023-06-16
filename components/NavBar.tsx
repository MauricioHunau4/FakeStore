import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
} from '@chakra-ui/icons';
import { BsCartFill } from 'react-icons/bs'
import { GiClothes } from 'react-icons/gi'
import { FC } from 'react'

const NavBar: FC<NavBar> = ({ setOpen }) => {
    const { isOpen, onToggle } = useDisclosure();
    const LogoColor = useColorModeValue('#232b2b', 'white')

    return (
        <header>
            <Flex
                bg={useColorModeValue('white', '#232b2b')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex flex={{ base: 1 }} align={'center'} justify={{ base: 'center' }} justifyContent={'space-between'} gap={10}>
                    <IconButton
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <Flex alignItems={'center!important'} gap={'10px'} cursor={'pointer'}>
                        <Icon as={GiClothes} color={LogoColor} w={10} h={10} ></Icon>
                        <Text fontSize={'4xl'} fontFamily={'fantasy'} display={{ base: 'none' }}>FakeStore</Text>
                    </Flex>
                    <Flex display={{ base: 'none', md: 'flex' }} flexGrow={1}>
                        <DesktopNav />
                    </Flex>
                    <IconButton aria-label={'Open cart'} icon={<BsCartFill width={10} height={10} />} onClick={() => setOpen(true)} color={LogoColor} w={10} h={10} cursor={'pointer'}></IconButton>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity >
                <MobileNav />
            </Collapse>

        </header>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('#232b2b', 'white');
    const linkHoverColor = useColorModeValue('gray.800', 'gray.400');
    const popoverContentBgColor = useColorModeValue('white', '#23272B');

    return (
        <Stack direction={'row'} spacing='30px' >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                fontSize={'2xl'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, subLabel }: NavItem) => {
    return (
        <Link
            role={'group'}
            display={'block'}
            p={2}
            href={`/category/${label.toLowerCase()}`}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('gray.200', '') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'gray.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', '#23272B')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    category?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Category',
        children: [
            {
                label: 'Electronics',
                category: 'electronics',
            },
            {
                label: 'Jewelery',
                category: 'jewelery',
            },
            {
                label: "Men's clothing",
                category: "men's%20clothing",
            },
            {
                label: "Women's clothing",
                category: "womens's%20clothing",
            }
        ],
    }, {
        label: 'Surprise'
    }
];

export default NavBar