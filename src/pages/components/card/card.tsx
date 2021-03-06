import { NextPage } from 'next';
import { Blogs } from '../../../types';
import { formatDate } from '../../../utils/Helper';
import styles from './card.module.scss';
import { useSpring, animated } from 'react-spring';

import theme from '../../../styles/theme.module.scss';
import Link from 'next/link';

/**
 *
 * @param blog with Blogs Type
 * @returns React Node
 *
 * Component to render the cards
 *
 * Used React Spring for sutle animation in future if we need
 * to add more animation we can move the react spring to new animation controller
 */

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
          <div className={styles.updatedAt}>{formatDate(blog.updatedAt)}</div>
        </animated.div>
      </div>
    </Link>
  );
};

export default Card;
