import {
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  useBreakpointValue,
  HTMLChakraProps,
} from '@chakra-ui/react'

import { HTMLMotionProps, motion, AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'

import Reveal from 'react-reveal'

export const MotionHeading: NextPage<MotionProps> = motion(Heading)
const MotionText: NextPage<MotionProps> = motion(Text)
const MotionButton: NextPage<MotionProps> = motion(Button)
const MotionIcon: NextPage<MotionProps> = motion(Icon)

type Merge<P, T> = Omit<P, keyof T> & T
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

interface IHomeDefaultProps {
  title: string
  icon?: any
  description: string
  buttonText: string
}

export default function HomeDefault({
  title,
  icon,
  description,
  buttonText,
}: IHomeDefaultProps) {
  return (
    <Flex
      w="100%"
      bgImage="url('/images/bgPink.webp')"
      h={['100vh', '100vh', '100vh', '100vh', '110vh']}
      bgSize={['250%', 'cover', 'cover', '100%', '100%']}
      bgRepeat="no-repeat"
      zIndex="999"
      justify="center"
      mx="auto"
      align="center"
      overflowX="hidden"
      mb={['0', '0', '0', '0']}
    >
      <Flex
        mt={['7rem', '6rem', '5rem', '5rem']}
        flexDir="column"
        mx="auto"
        align="center"
      >
        <Flex flexDir="column" mx="auto" align="center" justify="center">
          <Reveal>
            <MotionIcon
              initial={{ y: '20vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-3000vh', opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
              mx="auto"
              h="100%"
              w="100%"
              as={icon}
            ></MotionIcon>
          </Reveal>
          <MotionHeading
            as="h1"
            color="pink.900"
            fontFamily="Raleway"
            fontWeight="600"
            fontSize={['1.85rem', '1.85rem', '1.85rem', '5.563rem']}
            my="0.5rem"
            initial={{ y: '20vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-3000vh', opacity: 0 }}
            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
          >
            {title}
          </MotionHeading>
        </Flex>
        <MotionText
          as="h2"
          fontSize={['1.063rem', '1.063rem', '1.063rem', '2.188rem']}
          fontFamily="Raleway"
          fontWeight="600"
          letterSpacing={['10%', '10%', '10%', '5px']}
          lineHeight="3.125rem"
          mt={['0.3rem', '0.3rem', '0.7rem', '-1rem']}
          mx="auto"
          mb={['0', '0', '0', '1.5rem']}
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: '-3000vh', opacity: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        >
          LEGAL DESIGN
        </MotionText>
        <MotionText
          as="h3"
          mx="auto"
          fontSize="1rem"
          lineHeight="1.5"
          textAlign="center"
          maxW={['331px', '331px', '331px', '503px']}
          color="#666666"
          fontWeight="400"
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          exit={{ y: '-3000vh', opacity: 0 }}
          transition={{ type: 'spring', duration: 2.5, bounce: 0.3 }}
        >
          {description}
        </MotionText>
        <MotionButton
          w="290px"
          h="50px"
          bgColor="pink.900"
          color="white"
          px="1rem"
          mx="auto"
          mt={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          fontSize="0.875rem"
          initial={{ y: '10vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >
          {buttonText}
        </MotionButton>
      </Flex>
    </Flex>
  )
}
