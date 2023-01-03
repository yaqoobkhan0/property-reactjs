import React, { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const Dashdropdown = () => {
  const { date, setdate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const dates = [
    {
      value: "date Range (any)",
    },
    {
      value: "2010 - 2011",
    },
    {
      value: "2011 - 2012",
    },
    {
      value: "2012 - 2013",
    },
    {
      value: "2013 - 2014",
    },
    {
      value: "2014 - 2015",
    },
    {
      value: "2015 - 2016",
    },
    {
      value: "2016 - 2017",
    },
    {
      value: "2017 - 2018",
    },
    {
      value: "2019 - 2020",
    },
    {
      value: "2020 - 2021",
    },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{date}</div>
          <div className="text-[13px]">Choose Date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              onClick={() => setdate(date.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {date.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default Dashdropdown;
