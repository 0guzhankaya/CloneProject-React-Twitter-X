import React from "react";
import SidebarSection from "../../../../components/sidebar-section";
import { topics } from "../../../../utils/consts";
import Topic from "./topic";

function Topics() {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic key={index} item={topic} />
      ))}
    </SidebarSection>
  );
}

export default Topics;
