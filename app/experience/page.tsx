"use client";

import Layout from "../components/Layout";
import Experience from "../components/experience/Experience";

export default function Experiences() {
  return (
    <>
        <Layout>
          <div className="hidden xl:block">
			<Experience />
          </div>
          <div className="block xl:hidden">
          </div>
        </Layout>
    </>

  );
}
