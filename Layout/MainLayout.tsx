import { Footer, Header } from '@/components/common';
import React from 'react';

interface IMainLayoutProp {
  children: JSX.Element;
}
export default function MainLayout({ children }: IMainLayoutProp) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
