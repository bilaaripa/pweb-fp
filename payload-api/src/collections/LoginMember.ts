import { CollectionConfig } from "payload/types";

const loginMember: CollectionConfig = {
  slug: "loginMember",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: () => true,
    delete: () => true,
    update: () => true,
  },
  fields: [],
};

export default loginMember;
