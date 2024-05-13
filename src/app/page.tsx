"use client";

import { motion, useScroll } from "framer-motion";
import FeatureBox from "@/components/feature-box";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import PreviewBox from "@/components/preview-box";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div className="w-full h-1 bg-red-500 fixed top-0 rounded z-40 " style={{ scaleX: scrollYProgress }} /> */}
      <Wrapper className="mb-[17rem] sm:mb-[21rem] lg:mb-[30rem] relative bg-dark text-white/90">
        <Navbar />
        <div className="flex flex-col items-center gap-10">
          <div className="max-w-xl mt-20 flex flex-col items-center gap-10 text-center">
            <h2 className="text-6xl sm:text-[5rem] tracking-wide leading-tight font-semibold">
              Connect with your team
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Hush is a messaging app for your team that will helps you to
              connect with everyone in a easy and comfortable way posssible
            </p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mt-2 px-4 py-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-600/80 rounded-full duration-150 shadow-2xl drop-shadow-2xl shadow-blue-500/50"
            >
              <Image
                src="/assets/splash.png"
                alt="splash-icon"
                width={30}
                height={30}
                className="absolute -top-4 -left-4"
              />
              <Image
                src="/assets/apple.png"
                alt="apple-logo"
                width={30}
                height={30}
              />
              <span className="capitalize">download for MacOS</span>
            </motion.button>
          </div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "42%" }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[52rem] -mt-[35rem] sm:-mt-[27rem] md:-mt-96 lg:-mt-64 translate-y-96 sm:translate-y-80"
          >
            <Image
              fill
              loading="lazy"
              src="/assets/app-preview-1.png"
              alt="app-preview-1"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </Wrapper>

      <Wrapper className="bg-white text-black">
        <div className="w-full flex flex-col items-center">
          <h2 className="max-w-lg text-4xl sm:text-5xl leading-tight font-semibold text-center text-black/70">
            Some of our features that will help you
          </h2>

          <div className="max-w-lg lg:max-w-full mt-14 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12">
            <FeatureBox
              title="Easy Communication"
              description="Easy and simple way to communicate with your team and friends, build with awesome features with it"
              img="msg"
              extraStyles={"bg-green-50/30 shadow-lg shadow-green-50/40"}
            />
            <FeatureBox
              title="Community Support"
              description="Easy and simple way to communicate with your team and friends, build with awesome features with it"
              img="group"
              extraStyles={"bg-orange-50/30 shadow-lg shadow-orange-50/40"}
            />
            <FeatureBox
              title="Discover Channel"
              description="Discover new channels you interest in, meet with new people around the world and make more connections"
              img="discover"
              extraStyles={"bg-indigo-50/30 shadow-lg shadow-indigo-50/40"}
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-20 py-10 bg-dark text-white/90">
        <div className="flex flex-col gap-20">
          <PreviewBox
            img="app-preview-2"
            title="Easy and effortless way to connect with your team"
            description="With hush you can easliy connect with your team in a different fields, you can create, manage, and edit what ever you want inside the channel. Create as many as you want"
            btnText="learn more about hush"
            btnAction={() => {}}
            isImgFirst={true}
          />

          <PreviewBox
            img="app-preview-3"
            title="Tons of supportive community you can discover"
            description="Search any type and field of community you want, by searching on the search page you can discover tons of supportive community that will help you with your work."
            btnText="explore the communities"
            btnAction={() => {}}
            isImgFirst={false}
          />
        </div>

        <div className="w-full px-10 py-12 text-center flex flex-col items-center -mt-[16rem] sm:-mt-64 lg:-mt-64 translate-y-80 bg-blue-500 text-white/90 rounded-lg">
          <div className="max-w-3xl flex flex-col items-center gap-6">
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Join thousands creative teams on Hush
            </h2>
            <p className="text-white/80 font-medium leading-relaxed">
              With cube, you can build your app or website faster than before.
              Featured with an awesome things inside that will help you in your
              design process
            </p>
            <button className="relative mt-2 px-4 py-3 flex items-center gap-2 text-black bg-white hover:bg-white/80 rounded-full duration-150">
              <Image
                src="/assets/apple-dark.png"
                alt="apple-logo"
                width={30}
                height={30}
              />
              <span className="capitalize">download for MacOS</span>
            </button>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-[25rem] bg-white">
        <div className="w-full text-center flex flex-col items-center">
          <h2 className="text-5xl font-bold text-black/70 capitalize">
            our sponsers
          </h2>

          <div className="mt-14 w-full grid grid-cols-2 sm:grid-cols-4 place-items-center gap-10 sm:gap-5">
            {["1", "2", "3", "4"].map((img, index) => (
              <Image
                key={index}
                src={`/assets/sponser-${img}.png`}
                alt={`sponser-${img}`}
                width={80}
                height={80}
                className="object-cover"
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <hr className="my-16 border-t border-black/30" />
      <Wrapper className="bg-white">
        <Footer />
      </Wrapper>
    </>
  );
}
