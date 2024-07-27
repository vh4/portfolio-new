"use client";

import Layout from "../components/Layout";
import About from "../components/about/About";

export default function Abouts() {
  return (
    <>
        <Layout>
          <div className="hidden xl:block">
			<About />
          </div>
          <div className="block xl:hidden">
		  	bro
          </div>
        </Layout>
    </>

  );
}
