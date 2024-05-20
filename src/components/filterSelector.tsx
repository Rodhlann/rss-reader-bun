"use client";

import { useFetchFeeds } from "@/src/hooks/useFetchFeeds";

export const FilterSelector = () => {
  const feeds = useFetchFeeds();

  const selectCategory = (input: string) => {
    // if (input === "all") {
    //   document.getElementById("checkbox-all").checked = true;
    // } else {
    //   document.getElementById("checkbox-all").checked = false;
    // }
    // Object.keys(STATE.showCategories).forEach((key) => {
    //   if (input === "all") {
    //     STATE.showCategories[key] = true;
    //     document.getElementById(`checkbox-${key}`).checked = false;
    //   } else {
    //     document.getElementById(`checkbox-${key}`).checked = key === input;
    //     STATE.showCategories[key] = key === input;
    //   }
    // });
    // redrawFeeds();
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLLabelElement>,
    input: string
  ) => {
    if (event.key === "Enter") {
      selectCategory(input);
    }
  };

  return feeds?.length ? (
    <div id="feed-selector">
      <input
        type="checkbox"
        id="checkbox-all"
        className="filter-checkbox-hidden"
        name="feed-filter"
        value="all"
        checked
        onChange={() => selectCategory("all")}
      />
      <label
        className="filter-checkbox-label"
        htmlFor="checkbox-all"
        tabIndex={0}
        onKeyDown={(event) => handleKeyPress(event, "all")}
      >
        All
      </label>

      <input
        type="checkbox"
        id="checkbox-code"
        className="filter-checkbox-hidden"
        name="feed-filter"
        value="code"
        onChange={() => selectCategory("code")}
      />
      <label
        className="filter-checkbox-label"
        htmlFor="checkbox-code"
        tabIndex={0}
        onKeyDown={(event) => handleKeyPress(event, "code")}
      >
        Code
      </label>

      <input
        type="checkbox"
        id="checkbox-tech"
        className="filter-checkbox-hidden"
        name="feed-filter"
        value="tech"
        onChange={() => selectCategory("tech")}
      />
      <label
        className="filter-checkbox-label"
        htmlFor="checkbox-tech"
        tabIndex={0}
        onKeyDown={(event) => handleKeyPress(event, "tech")}
      >
        Tech
      </label>

      <input
        type="checkbox"
        id="checkbox-ocean"
        className="filter-checkbox-hidden"
        name="feed-filter"
        value="ocean"
        onChange={() => selectCategory("ocean")}
      />
      <label
        className="filter-checkbox-label"
        htmlFor="checkbox-ocean"
        tabIndex={0}
        onKeyDown={(event) => handleKeyPress(event, "ocean")}
      >
        Ocean
      </label>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
