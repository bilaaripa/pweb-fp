import { CollectionConfig } from "payload/types";

const Message: CollectionConfig = {
  slug: "personalmessage",
  // auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "personalmessage",
      type: "text",
      label: "Personal Message",
      required: true,
    },
  ],
};

export default Message;
