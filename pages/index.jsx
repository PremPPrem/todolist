import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import s from '@/styles/Home.module.scss'
import TodoList from './components/TodoList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={s.home}>
      <Head>
        <title>TodoList</title>
        <meta name="description" content="TodoList" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
    <TodoList />
    </div>
  )
}
