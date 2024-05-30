import Head from 'next/head'
import linkifyHtml from 'linkify-html';

import { ChatConvoWrapper, ChatHeader, ChatBubble, ChatUser, ChatLike } from '../../styles/_nos.styles';
import convo from './_convo.json'

export default function Nos() {
  const proccessContent = (content: string) => {
    const likeRegex = /([^\s]+)\s*(Tiago Schmidt|Vitória Schaeffer Neves)$/;
    const imgLinkRegex = /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp)|www\.[^\s]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp))/gi;

    if (!likeRegex.test(content) && !imgLinkRegex.test(content)) {
      return { text: content };
    }

    const like = content.match(likeRegex)?.[0];

    if (content.startsWith('http')) return { image: content, like };

    const text = content.replace(likeRegex, '').replace(imgLinkRegex, '');
    const image = content.replace(likeRegex, '').match(imgLinkRegex)?.[0];

    return { text, like, image };
  }

  const processDate = (value: string) => {
    const date = new Date(`${value} GMT-0700`);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  };

  const options = { defaultProtocol: "https" };

  return (
    <>
      <Head>
        <title>Nossa conversa 🤍</title>
        <meta
          name="description"
          content="Vitoria, eu te amo!"
        />
      </Head>

      <ChatConvoWrapper>
        <ChatHeader>Nós 🤍</ChatHeader>
        {convo.map((item, id) => {
          if (!item.content) return null;

          const { text, like, image } = proccessContent(item.content);
          return (
            <ChatBubble key={id} $isMe={item.user === 'Tiago Schmidt'}>
              <ChatUser>
                {item.user}
                <small>{processDate(item.date)}</small>
              </ChatUser>
              {text && <p dangerouslySetInnerHTML={{ __html: linkifyHtml(text, { target: '_blank' }) }} />}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {image && <img src={image} alt="Imagem" />}
              {like && <ChatLike>{like}</ChatLike>}
            </ChatBubble>
          )
        })}
      </ChatConvoWrapper>
    </>
  )
};