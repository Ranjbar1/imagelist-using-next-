import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Login from '../components/forms/login';
export default function Home() {
  return (
    <>
      <div className="flex mr-auto justify-center cursor-pointer">
        <div className=""></div>
      </div>
      <Login />
    </>
  );
}
