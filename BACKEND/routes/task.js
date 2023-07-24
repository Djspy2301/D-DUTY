const {getLogin, hostSignUp, updateUser,
staffList, createUser, deleteUser} = require('../controllers/task');

const exp= require('express');
const router=exp.Router();

router.route('/sign-up').post(hostSignUp);
router.route('/log-in').post(getLogin);
router.route('/dashboard');
router.route('/dashboard/add-staff').post(createUser);
router.route('/dashboard/staff').get(staffList);
router.route('/:admin/update-user').patch(updateUser);
router.route('/:admin/delete-user').delete(deleteUser);

module.exports = router;