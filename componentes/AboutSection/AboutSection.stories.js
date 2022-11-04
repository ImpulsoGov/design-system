import React from "react";
import { AboutSection } from "./AboutSection";

const paragraphList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat velit nec erat aliquam fringilla. Nam vestibulum eu neque non convallis. Pellentesque elementum dignissim ante. Nulla lacinia enim lacinia erat cursus scelerisque. Aenean hendrerit, lorem sit amet condimentum tempor, mauris dui feugiat metus, non commodo ligula tortor vitae massa.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vestibulum, dui id bibendum ornare, orci mi venenatis mauris, et pellentesque magna enim posuere lacus. Suspendisse rhoncus diam ut consequat hendrerit. Proin convallis ultricies magna non interdum. Vivamus tristique libero ac lectus consequat dictum. Sed sit amet pellentesque enim, ac consequat quam.",
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
  ];

export default {
  title: "Componentes/AboutSection",
  component: AboutSection,
};
const Template = (args) => <AboutSection {...args}/>

export const Default = Template.bind({});
Default.args={
  paragraphsList:paragraphList,
  link:"https://www.w3schools.com/html/html_iframe.asp"
}
