import { Dispatch, FC, SetStateAction, useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./ExtentionModal.module.scss";
import { Button } from "shared/ui";

const cn = classNames.bind(cls);

interface ExtentionModalProps {
  className?: string;
  isOpened: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const ExtentionModal: FC<ExtentionModalProps> = (props) => {
  const { className, isOpened, onClose } = props;

  // Запрещаем/разрешаем скролл документа в зависимости от состояния модалки
  useEffect(() => {
    isOpened && document.body.classList.add("hidden");

    return () => document.body.classList.remove("hidden");
  }, [isOpened]);

  // Возвращаем модалку, вешая пропс onClose на подложку и кнопу
  return (
    <div className={cn(cls.Modal, { opened: isOpened })} onClick={() => onClose(false)}>
      <div className={cn(cls.modalContent, className)} onClick={(e) => e.stopPropagation()}>
        <h2 className={cls.modalTitle}>metamask extention</h2>

        <p className={cls.modalDescr}>
          To work with our application, you have to install the{" "}
          <a href="https://metamask.io/download/" rel="noreferrer" target="_blank">
            Metamask browser extension
          </a>
        </p>

        <Button onClick={() => onClose(false)}>Skip this step</Button>
      </div>
    </div>
  );
};
