import { Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { Comment } from '../../../types';
import { formatDate } from '../../../utils/Helper';
import styles from './Comments.module.scss';

const Comments: NextPage<Comment> = ({
  title,
  createdAt,
  updatedAt,
  description,
}) => {
  return (
    <>
      <div className={styles.commentCont}>
        <Text size={'1.5rem'} color='white' weight={'bold'}>
          {title}
        </Text>
        <Text color='white'>{description}</Text>
        <div className={styles.datesCont}>
          <Text size={'.75rem'} color='white'>
            Created On: {formatDate(createdAt)}
          </Text>
          <Text size={'.75rem'} color='white'>
            Last Edited On: {formatDate(updatedAt)}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Comments;
