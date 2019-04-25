const db = require("../config/db");

const Post = {
  getAll: async () => {
    const getAllPostsQuery = `SELECT * FROM posts`;
    const { rows } = await db.query(getAllPostsQuery);
    return rows;
  },

  createOne: async (name, region, comment) => {
    const insertQuery = `INSERT INTO posts(name, region, comment)
        VALUES($1, $2, $3)
        returning *`;

    const values = [name, region, comment];

    try {
      const { rows } = await db.query(insertQuery, values);

      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

module.exports = Post;
