const db = require("../config/db");

const Reply = {
  getAll: async () => {
    const getQuery = `
        SELECT * FROM replies
    `;
    const { rows } = await db.query(getQuery);
    return rows;
  },

  createOne: async (pid, name, comment) => {
    const insertQuery = `
        INSERT INTO replies(pid, name, comment)
        VALUES($1, $2, $3)
        returning *
    `;

    const values = [pid, name, comment];

    try {
      const { rows } = await db.query(insertQuery, values);

      return rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

module.exports = Reply;
