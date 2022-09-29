import {
  createContext,
  FunctionComponent,
  ReactNode,
  useRef,
  RefObject,
  useState,
  useEffect,
} from "react";
import { ModalContainer } from "./ModalContainer";

export const Context = createContext({});

type Props = {
  children: ReactNode;
}

export const ModalProvider: FunctionComponent<Props> = ({
  children,
}) => {
  const modalRef = useRef({}) as RefObject<HTMLDivElement>;
  const [context, setContext] = useState<HTMLDivElement>();
  useEffect(() => {
    setContext(modalRef.current as HTMLDivElement);
  }, [modalRef.current]);
  return (
    <ModalContainer>
      <Context.Provider value={context as any}>{children}</Context.Provider>
      <div ref={modalRef} />
    </ModalContainer>
  );
};
