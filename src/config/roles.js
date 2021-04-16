
const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getCategories']);
roleRights.set(roles[1], ['createCategory','getCategories']);

module.exports = {
  roles,
  roleRights,
};
