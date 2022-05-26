import { NextPage } from 'next';
import { Blogs } from '../../../types';
import { formatDate } from '../../../utils/Helper';
import styles from './card.module.scss';
import { useSpring, animated } from 'react-spring';

import theme from '../../../styles/theme.module.scss';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

const Card: NextPage<{ blog: Blogs }> = ({ blog }) => {
  const [{ x, color, scale }, set] = useSpring(() => ({
    x: 100,
    color: theme.cardBgColor,
    scale: 'scale(1)',
  }));
  if (!blog) return null;
  return (
    <Link href={`Screens/Blog/${blog.id}`}>
      <div
        className={styles.animationWrapper}
        onMouseEnter={() =>
          set({
            x: 0,
            color: theme.cardBgColorHover,
            scale: 'scale(1.1)',
          })
        }
        onMouseLeave={() =>
          set({ x: 100, color: theme.cardBgColor, scale: 'scale(1)' })
        }>
        <animated.div
          // @ts-ignore
          style={{ background: color, transform: scale }}
          className={styles.container}>
          <div className={styles.heading}>{blog.title}</div>
          <div className={styles.description}>{blog.description}</div>
          {/* <div className={styles.cornerContents}>
          <div>
          {blog.authors.map((people) => (
            <Avatar key={people.id} alt={people.name} src={people.avatar} />
            ))}
          </div> */}
          <div className={styles.updatedAt}>{formatDate(blog.updatedAt)}</div>
          {/* </div> */}
        </animated.div>
      </div>
    </Link>
  );
};

export default Card;
