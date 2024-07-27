"use client";

import Layout from './components/Layout';
import { Intro } from './components/intro/Intro';
import { IntroMobile } from './components/intro/IntroMobile';

export default function Home() {

  return (
      <>
        <Layout>
          <div className="hidden xl:block">
            <Intro />
          </div>
          <div className="block xl:hidden">
            <IntroMobile />
          </div>
        </Layout>
      </>
  );
}
