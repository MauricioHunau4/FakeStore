// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


// 3. extend the theme
const theme = extendTheme({
  colors: {
    dark: '#232b2b'
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: {colorMode: string}) => ({
      body: {
        color: props.colorMode === 'dark' ? 'white' : 'black',
        bg: props.colorMode === 'dark' ? '#232b2b' : 'white',
      },
    }),
  }
})

export default theme