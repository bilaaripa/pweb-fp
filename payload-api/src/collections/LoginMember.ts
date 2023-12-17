import { CollectionConfig } from "payload/types";

const loginMember: CollectionConfig = {
  slug: "loginMember",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
  },
  fields: [],
};

export default loginMember;
