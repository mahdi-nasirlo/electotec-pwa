import { useState } from "react";
import { Tab } from "@headlessui/react";
import PdfViewer from "./PdfViewer";
import { TabData } from "../../data/TabData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BrandDataTab({ catalog, priceList, installGuide }) {
  let [categories] = useState({
    "لیست قیمت": {
      content: <PdfViewer images={catalog} />,
    },
  });

  return (
    <div className="w-full max-w-md py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-lg bg-blue-900/20 p-1 px-0.5">
          {Object.keys(TabData(catalog)).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full my-1 mx-2 rounded-lg py-2.5 text-sm font-medium leading-5 text-red-500",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(TabData(catalog)).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
