import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
