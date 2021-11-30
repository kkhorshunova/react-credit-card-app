import React from 'react';
import {MainContainer} from './index.style';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({title, children}: PageProps) =>
  <MainContainer>
    <h1>{title}</h1>
    {children}
  </MainContainer>

export default Page;