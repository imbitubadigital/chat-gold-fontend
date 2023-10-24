import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  useCallback,
} from 'react';
import * as S from './styles';
import { ItemMessage } from '../ItemMessage';
import { ChatProps } from './types';

import { PaperPlaneRight } from 'phosphor-react';
import { MessageProps } from '@/services/http/message/types';

// import { Loading } from '../Loading';

export function Chat({
  message,
  userId,
  roomId,
  socket,
  enterRoom,
}: ChatProps) {
  const chatRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [textareaHeight, setTextareaHeight] = useState(20);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading] = useState(false);

  // const handleFakeResponseIa = useCallback(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     const index = randomNumberInterval(0, 19);
  //     const message = {
  //       id: messages.length + 1,
  //       type: 'ia',
  //       message: fakeAnswersIa[index],
  //     } as MessageProps;

  //     setMessages((prevState) => [...prevState, message]);
  //     setLoading(false);
  //   }, 2000);
  // }, [messages.length]);

  const handleSubmit = useCallback(() => {
    if (inputValue) {
      socket.emit('chatMessage', {
        userId,
        roomId,
        type: 'normal',
        content: inputValue,
      });
      setInputValue('');
      inputRef.current?.focus();
    }
  }, [inputValue, roomId, socket, userId]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    const { current } = inputRef;
    if (current) {
      const newHeight = Math.min(
        current.scrollHeight,
        5 * parseFloat(getComputedStyle(current).lineHeight),
      );

      current.style.height = `${newHeight}px`;
      setTextareaHeight(newHeight);
    }
  };

  const inputStyle: CSSProperties = {
    height: textareaHeight,
  };

  const onEnterPress = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e && e.key === 'Enter' && e.shiftKey === false) {
        e.preventDefault();
        if (!loading) {
          handleSubmit();
        }
      }
    },
    [handleSubmit, loading],
  );

  useEffect(() => {
    adjustHeight();
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (message) {
      setMessages((prevState) => [...prevState, message]);
    } else {
      setMessages([]);
    }
    // inputRef.current?.focus();
  }, [message]);

  useEffect(() => {
    socket.on('chatMessage', (payload) => {
      setMessages((prevState) => [...prevState, payload]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, [socket]);

  return (
    <S.Container>
      <S.MessagesContainer ref={chatRef}>
        <S.MessagesContent>
          {messages?.map((item) => (
            <ItemMessage
              key={String(item.id)}
              type={item.userId === userId ? 'me' : 'members'}
              message={item}
            />
          ))}
        </S.MessagesContent>
        {/* {loading && <Loading />} */}
      </S.MessagesContainer>
      {enterRoom && (
        <S.InputContainer>
          <S.InputContent>
            <S.Input
              ref={inputRef}
              value={inputValue}
              onChange={handleChange}
              style={inputStyle}
              onKeyDown={onEnterPress}
              placeholder="Digite sua mensagem"
              disabled={!enterRoom}
            />
            <button type="button" onClick={handleSubmit} disabled={!enterRoom}>
              <PaperPlaneRight size={32} />
            </button>
          </S.InputContent>
        </S.InputContainer>
      )}
    </S.Container>
  );
}
