import config from "@/config/config.json";
import { DiscussionEmbed } from "disqus-react";
import React from "react";

const Disqus = ({ className }: { className?: string }) => {
  const { disqus } = config;
  return (
    <div className={className} style={{ backgroundColor: "#f5f8fa", padding: "4px", borderRadius: "6px"}}>
      {disqus.enable && (
        <DiscussionEmbed
          shortname={disqus.shortname}
          config={disqus.settings}
        />
      )}
    </div>
  );
};

export default Disqus;
