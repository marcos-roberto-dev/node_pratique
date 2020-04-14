module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'node',
  define: {
    timestamps: true,
    underscored: true
  }
}