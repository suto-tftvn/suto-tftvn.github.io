import React from "react";
import Builder from "./builder";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

export default function TeamComps() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Builder />
      </DndProvider>
    </div>
  );
}
