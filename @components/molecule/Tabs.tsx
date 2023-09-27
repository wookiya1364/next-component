"use client";

import Button from "@components/atom/button";
import { Column } from "@components/atom/column";
import { Row } from "@components/atom/row";
import React from "react";
import { SetStateAction, createContext, useContext, useState } from "react";
import { cn } from "utility/cn";

type TabsProps = {
  defaultValue: number;
  children: React.ReactNode;
  as: TContainer;
};
type TabsListProps = {
  children: React.ReactNode;
  className: string;
};
type TabsTriggerProps = {
  className: string;
  value: number;
  children: React.ReactNode;
};
type TabsPanelProps = {
  children: React.ReactNode;
  value: number;
};

const TabsContext = createContext({
  selectedIndex: 0,
  setSelectedIndex: (value: SetStateAction<number>) => {},
});

const Tabs = ({ defaultValue, children, ...props }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      <Column
        {...props}
        role="tablist"
        aria-orientation="horizontal"
        aria-label="Tabs example"
      >
        {children}
      </Column>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className }: TabsListProps) => {
  return (
    <Row className={cn("w-[350px] overflow-auto justify-start", className)}>{children}</Row>
  );
};

const TabsTrigger = ({ value, children, className }: TabsTriggerProps) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabsContext);
  return (
    <Button
      onClick={() => setSelectedIndex(value)}
      className={cn(
        "border-b-2 border-b-gray-300 whitespace-pre",
        className,
        selectedIndex === value ? "border-b-blue-500" : "border-b-gray-300"
      )}
    >
      {children}
    </Button>
  );
};

const TabsPanel = ({ children, value }: TabsPanelProps) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabsContext);
  if (value !== selectedIndex) {
    return null;
  }
  return (
    <Row as={"section"}>
      {children}
    </Row>
  );
};

export {Tabs, TabsList, TabsTrigger, TabsPanel};
