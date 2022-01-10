module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6f08ab69b0c0fcac51a11f1c58a9ce8'),
  },
});
