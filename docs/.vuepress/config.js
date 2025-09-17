import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/joy.github.io/',
  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started','/test'],
      sidebar:[
    {
      text: 'Home',
      link: '/',
    
    },
    {
      text: 'Get Started',
      link: '/get-started',
    },
    {
      text: 'Test',
      link: '/test',
      prefix: '/test/',
      children: [
        {
          text: 'Test1',
          link: 'test1',
        },
        
        {
          text: 'Test2',
          link: 'test2',
        },
        
      ]
    }
   ],
  }),


  bundler: viteBundler(),
})
