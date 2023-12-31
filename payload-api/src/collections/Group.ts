import { CollectionConfig } from "payload/types";

const Group: CollectionConfig = {
  slug: "group",
  //   auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
    delete: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "channelName", // Corrected field name
      type: "text",
      label: "Nama Channel",
      required: true,
    },
    {
      name: "channelDescription",
      type: "text",
      label: "Deskripsi Group",
      required: true,
    },
    {
      name: "members",
      label: "member",
      type: "relationship",
      relationTo: "loginMember",
      hasMany: true,
    },
    {
      name: "messages",
      label: "Message",
      type: "relationship",
      relationTo: "message",
      hasMany: true,
    },
  ],
};

export default Group;
