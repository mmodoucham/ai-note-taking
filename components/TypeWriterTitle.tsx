"use client";
import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriterTitle = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Take notes with your voice.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Hello World")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
