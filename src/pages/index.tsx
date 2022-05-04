import type { NextPage } from "next";
import Head from "next/head";
import InputGroup from "~DesignSystem/InputGroup";
import Button from "../DesignSystem/Button";

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-primary-skyblue">text-primary-skyblue</h1>
        <h1 className="text-primary-brown">text-primary-brown</h1>
        <h1 className="text-primary-yellow">text-primary-yellow</h1>
        <h1 className="text-primary-orange">text-primary-orange</h1>
        <h1 className="text-primary-brown">text-primary-brown</h1>
        <h1 className="text-primary-green">text-primary-green</h1>
        <h1 className="text-primary-lightgreen">text-primary-lightgreen</h1>
        <h1 className="text-text">text-text</h1>
        <h1 className="text-placeholder">text-placeholder</h1>
        asdasdasd
        <Button
          color="primary-orange"
          size="medium"
          onClick={(e) => {
            console.log(e);
            console.log("123");
          }}
        >
          버튼
        </Button>
        <Button
          color="primary-orange"
          size="medium"
          className="text-purple-500 bg-red-200"
          onClick={(e) => {
            console.log(e);
            console.log("123");
          }}
        >
          버튼
        </Button>
        <button className="bg-primary-orange">asdf</button>
        <InputGroup
          id="input"
          label="이름"
          value={undefined}
          placeholder="placeholder"
          labelPos="up"
          labelDist={12}
        />
        <InputGroup
          id="input"
          label="이름"
          value={undefined}
          placeholder="placeholder"
          labelPos="left"
          labelDist={26}
        />
        <InputGroup
          id="input"
          label="이름"
          value={undefined}
          placeholder="placeholder"
          labelPos="left"
        />
      </main>
    </div>
  );
};
export default Home;
