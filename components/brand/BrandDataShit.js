import { Tab } from "@headlessui/react";
import { useState } from "react";
import PdfViewer from "./PdfViewer";

export default function BrandDataShit({ catalog, priceList, installGuide }) {
  let Tabs = [
    {
      label: "لیست قیمت",
      content: <PdfViewer images={priceList} />,
      visible: priceList.length > 0,
    },
    {
      label: "کاتالوگ",
      content: <PdfViewer images={catalog} />,
      visible: catalog.length > 0,
    },
    {
      label: "راهنمای نصب",
      content: <PdfViewer images={installGuide} />,
      visible: installGuide.length > 0,
    },
  ];

  return (
    <>
      <div className="w-full max-w-md py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-blue-900/20 p-1 px-0.5">
            {Tabs.map(
              (item, index) =>
                item.visible && (
                  <Tab
                    key={index}
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
                    {item.label}
                  </Tab>
                )
            )}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Tabs.map((pdf, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                {pdf.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
