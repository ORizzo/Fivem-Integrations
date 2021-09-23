const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function Query() {
  const User = await prisma;
  const UserIdentifies = await User.vrp_user_identities.findMany();
  const UserInfos = await User.vrp_users.findMany();
  return [UserIdentifies, UserInfos]
}
module.exports = Query;
