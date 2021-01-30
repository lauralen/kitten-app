import { DataItem } from "../utils/types";

const URL = "http://placekitten.com/400/400?image=";
const NAMES = [
  "Oliver",
  "Leo",
  "Milo",
  "Charlie",
  "Simba",
  "Luna",
  "Bella",
  "Lucy",
  "Kitty",
  "Lily"
];
const DESCRIPTIONS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sagittis erat, eu sagittis libero. Proin ultrices dui sem, a consectetur risus dignissim eget. Quisque libero purus, laoreet ut pharetra quis, imperdiet et mauris. Praesent ante elit, gravida vitae hendrerit id, fringilla tempor orci. Duis quis lorem interdum, lacinia odio nec, cursus dolor. Nulla eu aliquam nibh. Quisque dapibus ultrices dui ac finibus.",
  "Integer accumsan erat id est bibendum, a volutpat dolor tristique. Cras cursus lacus magna, et semper sapien vestibulum non. Etiam mattis pulvinar risus id hendrerit. Vestibulum euismod mattis lacus. Suspendisse aliquet imperdiet metus, eget efficitur ipsum ultricies et. Integer eu lorem urna.",
  "Vivamus consectetur lorem eu purus congue pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tortor in diam dictum tristique id vel nibh. Nullam porta, metus a laoreet aliquet, odio sapien finibus risus, id tincidunt risus orci eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia id turpis nec elementum."
];

export function generateData(itemsCount: number): DataItem[] {
  let data = [];

  for (let i = 0; i < itemsCount; i++) {
    const title = NAMES[getNumberInRange(0, NAMES.length)];
    const description = DESCRIPTIONS[getNumberInRange(0, DESCRIPTIONS.length)];

    data.push({
      id: String(i),
      title,
      img: URL + getNumberInRange(0, 16),
      description
    });
  }

  return data;
}

export function getNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
