module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f778f949e07fc7925997bc05ab68571'),
  },
});
