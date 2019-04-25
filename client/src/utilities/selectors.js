import { createSelector } from "reselect";
import _ from "lodash";

const getReplies = state => state["replies"].allReplies;

export const batchRepliesByPost = createSelector(
  [getReplies],
  replies => _.groupBy(replies, reply => reply.pid)
);

export default {
  batchRepliesByPost
};
