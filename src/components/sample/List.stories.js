import React from "react";

import List from "./List";
import dog from "./dog.jpg";

export default {
  title: "sample/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
    {
      image: dog,
      title: "Sample Book 1",
      author: "The author is a dog",
    },
  ],
};
