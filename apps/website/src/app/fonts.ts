import localFont from 'next/font/local'

export const zillaSlab = localFont({
  src: [
    {
      path: '../fonts/ZillaSlab-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/ZillaSlab-Regular.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ZillaSlab-Italic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/ZillaSlab-SemiBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/ZillaSlab-SemiBoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-zilla-slab',
})

export const cervoNeue = localFont({
  src: [
    {
      path: '../fonts/CervoNeue-LightNeue.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/CervoNeue-RegularNeue.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/CervoNeue-MediumNeue.woff',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-cervo-neue',
})

export const brandonGrotesque = localFont({
  src: [
    {
      path: '../fonts/BrandonGrotesque-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-brandon-grotesque',
})
