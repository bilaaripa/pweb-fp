import { CollectionConfig } from "payload/types";

const Group: CollectionConfig = {
  slug: "contact",
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
      name: "contactName", // Corrected field name
      type: "text",
      label: "Nama Channel",
      required: true,
    },
    {
      name: "handphone",
      type: "text",
      label: "Nomor Hp",
      required: true,
    },
    {
      name: "personalmessages",
      label: "Personal Message",
      type: "relationship",
      relationTo: "personalmessage",
      hasMany: true,
    },
  ],
};

export default Group;
