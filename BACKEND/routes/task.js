const {getLogin, hostSignUp, updateUser,
getAllUsers, createUser, deleteUser} = require('../controllers/task');

const exp= require('express');
const router=exp.Router();

router.route('/sign-up').post(hostSignUp);
router.route('/log-in').post(getLogin);
router.route('/:admin/dashboard').get(getAllUsers);
router.route('/:admin/create-user').post(createUser);
router.route('/:admin/update-user').patch(updateUser);
router.route('/:admin/delete-user').delete(deleteUser);

module.exports = router;