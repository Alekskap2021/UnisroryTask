// Hooks
import { FC, useState, useEffect, useRef, MutableRefObject } from "react";
import { useGetUsersQuery } from "shared/api";

// Components
import { Preloader } from "shared/ui";
import { UserItem, UsersAddedItem } from "entities/ui";

import classNames from "classnames/bind";
import cls from "./UsersTable.module.scss";

const cn = classNames.bind(cls);

interface UsersTableProps {
  className?: string;
}

export const UsersTable: FC<UsersTableProps> = (props) => {
  const { className } = props;

  const tableRef: MutableRefObject<HTMLUListElement | null> = useRef(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data: usersList, isLoading } = useGetUsersQuery(currentPage);

  // Сайд эффект для добавления/удаления ивента скролла на таблицу
  useEffect(() => {
    tableRef.current?.addEventListener("scroll", onScrollHandler);
    return () => tableRef.current?.removeEventListener("scroll", onScrollHandler);
  }, [isLoading]);

  const onScrollHandler = () => {
    const tableHeight: number = tableRef.current?.offsetHeight || 0;
    const tableScrollHeight: number = tableRef.current?.scrollHeight || 0;
    const tableScrollTop: number = tableRef.current?.scrollTop || 0;

    // Считаем, сколько пикселей до низа таблицы. Меньше 100 - запрашиваем новую порцию данных
    if (tableScrollHeight - (tableHeight + tableScrollTop) < 100) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className={cn(cls.UsersTable, className)}>
      <h2 className="title">Participation listing (enable only for participants)</h2>

      {/* Заголовки таблицы */}
      <div className={cls.headers}>
        <h3>NAME</h3>
        <h3>EMAIL</h3>
        <h3>WALLET</h3>
      </div>

      {/* Опционально рисуем Preloader|Таблицу */}
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className={cls.rowsList} ref={tableRef}>
          {/* Строчка с данными, которые добавил юзер */}
          <UsersAddedItem />

          {/* Динамические строчки с данными с бэка */}
          {usersList?.items.map((UserData) => (
            <UserItem {...UserData} />
          ))}
        </ul>
      )}
    </div>
  );
};
