import { Markdown } from "@sceneforge/ui";
import { useEffect, useState } from "react";

import { TabLayout } from "../components/TabLayout";

const AboutTab = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("/locales/docs/en/about.md").then((response) => {
      response.text().then((text) => {
        setValue(text);
      })
        .catch((error) => {
          console.error(error);
        });
    })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TabLayout>
      <Markdown value={value} />
    </TabLayout>
  );
};

export default AboutTab;
