import React from "react";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import TabContainer, {
  type Tab,
} from "../components/TabContainer/TabContainer";

const frenchTabs: Tab[] = [
  {
    id: 0,
    label: "📚 EN Wiktionary",
    src: "https://en.wiktionary.org/wiki",
    title: "English Wiktionary",
    targetSite: "en-wiktionary",
  },
  {
    id: 1,
    label: "📖 FR Wiktionary",
    src: "https://fr.wiktionary.org/wiki",
    title: "French Wiktionary",
    targetSite: "fr-wiktionary",
  },
  {
    id: 2,
    label: "🌱 Etymonline",
    src: "https://www.etymonline.com",
    title: "Etymology Online",
    targetSite: "etymonline",
  },
  {
    id: 3,
    label: "🌐 FR Wikipedia",
    src: "https://fr.wikipedia.org/wiki",
    title: "French Wikipedia",
    targetSite: "fr-wikipedia",
  },
  {
    id: 4,
    label: "Conjugation",
    src: "https://www.conjugation-fr.com/index.html",
    title: "Conjugation",
    targetSite: "conjugation-fr",
  },
];

export const FrenchPage: React.FC = () => {
  return (
    <div>
      <h1>French Learning Resources</h1>
      <TabContainer tabs={frenchTabs} defaultActiveTab={0} />
    </div>
  );
};

export default function French() {
  return (
    <>
      <main>
        <SearchContainer />
        <TabContainer tabs={frenchTabs} defaultActiveTab={0} />
      </main>
    </>
  );
}
