import { Pagination, css } from '@nextui-org/react';
import { NextPage } from 'next';
import { pageItems } from '../../../constants';

/**
 *
 * @param total : number of toal items
 * @param current: Current viewing page
 * @returns React Node
 *
 * Paginator componnt to show the pagination
 */
const Paginator: NextPage<{ total: number; current: Function }> = ({
  total,
  current,
}) => {
  return (
    <>
      <div>
        <Pagination
          color='gradient'
          size='md'
          total={Math.ceil(total / pageItems)}
          rounded
          //@ts-ignore
          onChange={current}
        />
      </div>
    </>
  );
};

export default Paginator;
