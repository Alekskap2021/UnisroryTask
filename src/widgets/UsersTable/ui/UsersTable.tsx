// Hooks
import { FC, useState, useEffect, useRef, MutableRefObject } from "react";
import { useGetUsersQuery } from "shared/api";

// Components
import { Preloader } from "shared/ui";
import { UserItem, UsersAddedItem } from "entities/ui";

// Helpers
import { throttle } from "shared/lib/throttle";

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
    tableRef.current?.addEventListener("scroll", onScrollHandlerThrottle);
    return () => tableRef.current?.removeEventListener("scroll", onScrollHandlerThrottle);
  }, [isLoading]);

  const onScrollHandler = () => {
    const tableHeight: number = tableRef.current?.offsetHeight || 0;
    const tableScrollHeight: number = tableRef.current?.scrollHeight || 0;
    const tableScrollTop: number = tableRef.current?.scrollTop || 0;

    // Проверяем, что мы близки к концу таблицы и выполняем запрос
    if (tableScrollHeight - (tableHeight + tableScrollTop) < 100) {
      setCurrentPage((prev) => prev + 1); // Меняем состояние страницы, что вызовет за собой запрос за новой порцией данных
    }
  };

  // Есть ренж пикселей внизу таблицы, есть риск многократного вызова setState.
  // React может сбатчить setState и вместо второй страницы есть риск получить сразу условную 10ую.
  // Для предотвращения этого оборачиваем хендлер в throttle
  const onScrollHandlerThrottle = throttle(onScrollHandler, 200);

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
          {usersList?.items.map((userData) => (
            <UserItem {...userData} key={userData.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
